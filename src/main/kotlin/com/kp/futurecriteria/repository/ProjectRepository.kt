package com.kp.futurecriteria.repository

import com.kp.futurecriteria.data.Project
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProjectRepository: JpaRepository<Project, Long>{
}