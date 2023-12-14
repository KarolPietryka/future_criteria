package com.kp.futurecriteria.mapper

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.model.SaveProjectReq
import org.mapstruct.Mapper
import org.mapstruct.Mapping

@Mapper(componentModel = "spring")
interface ProjectMapper {
    @Mapping(target = "tasks", ignore = true)
    fun toEntity(saveProjectReq: SaveProjectReq): Project
}