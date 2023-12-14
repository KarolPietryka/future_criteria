package com.kp.futurecriteria.repository

import com.kp.futurecriteria.data.Task
import org.springframework.data.jpa.repository.JpaRepository

interface TaskRepository: JpaRepository<Task, Long> {
}