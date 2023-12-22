package com.kp.futurecriteria.service.project

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.mapper.ProjectMapper
import com.kp.futurecriteria.mapper.TaskMapper
import com.kp.futurecriteria.mapper.context.TaskToEntityContext
import com.kp.futurecriteria.model.SaveProjectReq
import com.kp.futurecriteria.repository.ProjectRepository
import com.kp.futurecriteria.repository.TaskRepository
import org.springframework.stereotype.Service

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


}