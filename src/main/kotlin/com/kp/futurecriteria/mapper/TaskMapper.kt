package com.kp.futurecriteria.mapper

import com.kp.futurecriteria.data.Project
import com.kp.futurecriteria.data.Task
import com.kp.futurecriteria.mapper.context.TaskToEntityContext
import com.kp.futurecriteria.model.TaskDto
import org.mapstruct.Context
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.Named

@Mapper(componentModel = "spring")
interface TaskMapper {
    @Mapping(source = ".", target = "project", qualifiedByName = ["mapProject"])
    fun toEntity(taskDto: TaskDto, @Context toEntityCtx: TaskToEntityContext): Task

    companion object {
        @JvmStatic
        @Named("mapProject")
        fun mapProject(taskDto: TaskDto, @Context toEntityCtx: TaskToEntityContext): Project {
            return toEntityCtx.project
        }
        @JvmStatic
        @Named("projectToDto")
        fun projectToDto(project: Project): Long = project.id!!
    }
    @Mapping(source = "project", target = "project", qualifiedByName = ["projectToDto"])
    fun toDto(task: Task): TaskDto
}