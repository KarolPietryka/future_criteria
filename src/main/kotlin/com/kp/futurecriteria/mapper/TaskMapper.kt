package com.kp.futurecriteria.mapper

import com.kp.futurecriteria.data.Task
import com.kp.futurecriteria.model.NestedTaskDto
import org.mapstruct.Mapper
import org.mapstruct.Mapping

@Mapper(componentModel = "spring")
interface TaskMapper {
    @Mapping(source = "project", target = "project.id")
    fun toEntity(taskDto: NestedTaskDto): Task
}