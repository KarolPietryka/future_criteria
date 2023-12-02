package com.kp.futurecriteria.factory

import com.kp.futurecriteria.data.Project
import java.time.LocalDateTime

class ProjectFactory {
    fun createSampleProject() = Project(
        name = "Sample Project",
        description = "This is a sample project",
        startDate = LocalDateTime.of(2023,1,1,0,0,0),
        endDate = LocalDateTime.of(2024,1,1,0,0,0),
        isPrivate = false,
    )
}