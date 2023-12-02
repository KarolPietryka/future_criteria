package com.kp.futurecriteria.mapper

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.model.ProjectDto
import org.mapstruct.Mapper

@Mapper(componentModel = "spring")
interface ProjectMapper {
    fun toEntity(projectDto: ProjectDto): Project
}