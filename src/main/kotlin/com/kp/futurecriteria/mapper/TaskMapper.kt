package com.kp.futurecriteria.mapper

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.data.Task
import com.kp.futurecriteria.mapper.context.TaskToEntityContext
import com.kp.futurecriteria.model.NestedTaskDto
import org.mapstruct.Context
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.Named

@Mapper(componentModel = "spring")
interface TaskMapper {
    @Mapping(source = ".", target = "project", qualifiedByName = ["mapProject"])
    fun toEntity(taskDto: NestedTaskDto, @Context toEntityCtx: TaskToEntityContext): Task

    companion object {
        @JvmStatic
        @Named("mapProject")
        fun mapProject(taskDto: NestedTaskDto, @Context toEntityCtx: TaskToEntityContext): Project {
            return toEntityCtx.project
        }
    }
}