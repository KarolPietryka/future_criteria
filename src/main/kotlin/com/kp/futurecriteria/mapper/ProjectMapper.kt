package com.kp.futurecriteria.mapper

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.model.ProjectDto
import com.kp.futurecriteria.model.SaveProjectReq
import org.mapstruct.Mapper
import org.mapstruct.Mapping

@Mapper(componentModel = "spring", uses = [TaskMapper::class])
interface ProjectMapper {
    @Mapping(target = "tasks", ignore = true)
    fun toEntity(saveProjectReq: SaveProjectReq): Project

    fun toDto(project: Project): ProjectDto
}