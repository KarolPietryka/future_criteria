package com.kp.futurecriteria.data

import com.kp.futurecriteria.enumerator.ManagementStatus
import jakarta.persistence.*

@Entity
@Table(name = "TASKS")
data class Task (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,

    @Column(name = "task_name", nullable = false)
    val taskName: String?,

    @Column(name = "task_description", length = 1500)
    val taskDescription: String?,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    var project: Project?,

    @Column(name = "status", length = 40, nullable = false)
    @Enumerated(EnumType.STRING)
    val status: ManagementStatus?,
)