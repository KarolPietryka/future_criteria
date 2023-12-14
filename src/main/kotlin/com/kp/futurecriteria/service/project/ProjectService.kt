package com.kp.futurecriteria.service.project

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.mapper.ProjectMapper
import com.kp.futurecriteria.model.SaveProjectReq
import com.kp.futurecriteria.repository.ProjectRepository
import com.kp.futurecriteria.repository.TaskRepository
import org.springframework.stereotype.Service

@Service
class ProjectService (
    val projectRepository: ProjectRepository,
    val taskRepository: TaskRepository,
    val projectMapper: ProjectMapper,
){
    fun save(saveProjectReq: SaveProjectReq): Project {
        val project = projectMapper.toEntity(saveProjectReq)
        projectRepository.save(project)
        project.tasks?.apply(taskRepository::saveAll)
        return project
    }

}