package com.kp.futurecriteria.data

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "PROJECTS")
data class Project (

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val name: String,

    @Column(length = 500)
    val description: String,

    @Column(name = "start_date")
    val startDate: LocalDateTime,

    @Column(name = "end_date")
    val endDate: LocalDateTime,

    @Column(name = "private")
    val isPrivate: Boolean,

    @OneToMany(mappedBy = "project", cascade = [CascadeType.ALL], orphanRemoval = true)
    val tasks: Set<Task> = HashSet(),
)
