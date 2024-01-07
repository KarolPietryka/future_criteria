package com.kp.futurecriteria.mapper

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.model.ProjectDto
import com.kp.futurecriteria.model.SaveProjectReq
import com.kp.futurecriteria.utility.DateUtils
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.Named
import java.time.OffsetDateTime

@Mapper(componentModel = "spring", uses = [TaskMapper::class])
interface ProjectMapper {
    @Mapping(target = "tasks", ignore = true)
    @Mapping(target = "startDate", source = "startDate", qualifiedByName = ["toLocalDateTime"])
    @Mapping(target = "endDate", source = "endDate", qualifiedByName = ["toLocalDateTime"])
    fun toEntity(saveProjectReq: SaveProjectReq): Project

    companion object{
        @JvmStatic
        @Named("toLocalDateTime")
        fun toLocalDateTime(dateTime: OffsetDateTime) = DateUtils.toLocalDateTime(dateTime)
    }
    @Mapping(target = "isPrivate", source = "private")
    fun toDto(project: Project): ProjectDto
}