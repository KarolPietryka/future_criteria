package com.kp.futurecriteria.mapper

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.model.ProjectDto
import com.kp.futurecriteria.model.SaveProjectReq
import org.mapstruct.Mapper
import org.mapstruct.Mapping

@Mapper(componentModel = "spring", uses = [TaskMapper::class])
interface ProjectMapper {
    /**
     * tasks prop need to be mapped on its own
     * due the fact that entity needs projectId to be set
     */
    @Mapping(target = "tasks", ignore = true)
    fun toEntity(saveProjectReq: SaveProjectReq): Project
    @Mapping(target = "tasks", ignore = true)
    fun toEntity(projectDto: ProjectDto): Project

    /**
     * Mapstruct removes `is` prefix from boolean properties
     */
    @Mapping(target = "isPrivate", source = "private")
    fun toDto(project: Project): ProjectDto
}