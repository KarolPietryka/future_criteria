package com.kp.futurecriteria.service.project

import com.kp.futurecriteria.mapper.ProjectMapper
import com.kp.futurecriteria.model.ProjectDto
import com.kp.futurecriteria.repository.ProjectRepository
import org.springframework.stereotype.Service

@Service
class ProjectService (
    val projectRepository: ProjectRepository,
    val projectMapper: ProjectMapper
){
    fun save(project: ProjectDto) = projectRepository.save(projectMapper.toEntity(project))

}