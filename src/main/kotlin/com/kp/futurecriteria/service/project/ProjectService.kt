package com.kp.futurecriteria.service.project

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.mapper.ProjectMapper
import com.kp.futurecriteria.mapper.TaskMapper
import com.kp.futurecriteria.mapper.context.TaskToEntityContext
import com.kp.futurecriteria.model.ProjectDto
import com.kp.futurecriteria.model.SaveProjectReq
import com.kp.futurecriteria.repository.ProjectRepository
import com.kp.futurecriteria.repository.TaskRepository
import org.apache.commons.text.CaseUtils
import org.springframework.data.jpa.domain.Specification
import org.springframework.stereotype.Service
import kotlin.reflect.full.memberFunctions

@Service
class ProjectService (
    val projectRepository: ProjectRepository,
    val taskRepository: TaskRepository,
    val projectMapper: ProjectMapper,
    val taskMapper: TaskMapper,
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
        val spec: Specification<Project> = Specification { root, _, criteriaBuilder ->
            val serializedProjectDto = ProjectDto::class.memberFunctions.filter { func ->
                func.name.startsWith("get") && func.parameters.size == 1
            }.associateBy({CaseUtils.toCamelCase(it.name.removePrefix("get"), false)}, {it.call(project)})
            .filter { it.value != null }

            val predicates = serializedProjectDto.map { (propertyName, value) ->
                criteriaBuilder.equal(root.get<Any>(propertyName), value)
            }

            criteriaBuilder.and(*predicates.toTypedArray())
        }
        return projectRepository.findAll(spec).map(projectMapper::toDto).toMutableList()
    }
}