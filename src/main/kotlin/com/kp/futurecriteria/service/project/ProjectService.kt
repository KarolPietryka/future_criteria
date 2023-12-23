package com.kp.futurecriteria.service.project

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.mapper.ProjectMapper
import com.kp.futurecriteria.mapper.TaskMapper
import com.kp.futurecriteria.mapper.context.TaskToEntityContext
import com.kp.futurecriteria.model.ProjectDto
import com.kp.futurecriteria.model.SaveProjectReq
import com.kp.futurecriteria.repository.ProjectRepository
import com.kp.futurecriteria.repository.TaskRepository
import jakarta.persistence.EntityManager
import jakarta.persistence.PersistenceContext
import org.springframework.stereotype.Service
import kotlin.reflect.full.memberFunctions

@Service
class ProjectService (
    val projectRepository: ProjectRepository,
    val taskRepository: TaskRepository,
    val projectMapper: ProjectMapper,
    val taskMapper: TaskMapper,
    @PersistenceContext
    val entityManager: EntityManager
){
    fun save(saveProjectReq: SaveProjectReq): Project {
        val project = projectMapper.toEntity(saveProjectReq)
        projectRepository.save(project)
        val ctx = TaskToEntityContext(project)
        saveProjectReq.tasks.map{taskMapper.toEntity(it, ctx)}.apply(taskRepository::saveAll)
        return project
    }
    fun get(projectId: Long) =
        projectRepository.getReferenceById(projectId).let(projectMapper::toDto)


    fun getFiltered(project: ProjectDto): MutableList<ProjectDto>{
        val criteriaBuilder = entityManager.criteriaBuilder
        val query = criteriaBuilder.createQuery(Project::class.java)
        val root = query.from(Project::class.java)

        val serializedProjectDto = ProjectDto::class.memberFunctions.filter { func ->
            func.name.startsWith("get") && func.parameters.size == 1
        }.associateBy({it.name.removePrefix("get")}, {it.call(project)})
        .filter { it.value != null }

        val predicates = serializedProjectDto.map { (propertyName, value) ->
            criteriaBuilder.equal(root.get<Any>(propertyName), value)
        }

        if (predicates.isNotEmpty()) {
            query.where(criteriaBuilder.and(*predicates.toTypedArray()))
        }

        return entityManager.createQuery(query).resultList.map(projectMapper::toDto).toMutableList()
    }
}