package com.kp.futurecriteria.controller


import com.kp.futurecriteria.api.ProjectsApi
import com.kp.futurecriteria.model.ProjectDto
import com.kp.futurecriteria.model.SaveProjectReq
import com.kp.futurecriteria.service.project.ProjectService
import com.kp.futurecriteria.utility.ConstUtility.API_PROJECTS
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.util.UriComponentsBuilder
import java.net.URI


@RestController
class ProjectController(
    val projectService: ProjectService
) : ProjectsApi {

    override fun projectsIdGet(id: Long): ResponseEntity<ProjectDto> {
        return ResponseEntity.ok(projectService.get(id!!))
    }

    override fun projectsPut(saveProjectReq: SaveProjectReq): ResponseEntity<Void> {
        val savedProject = projectService.save(saveProjectReq)
        val location: URI = UriComponentsBuilder
            .fromPath("$API_PROJECTS/{id}")
            .buildAndExpand(savedProject.id)
            .toUri()

        return ResponseEntity.created(location).build()
    }

    override fun projectsFilterGet(projectDto: ProjectDto): ResponseEntity<MutableList<ProjectDto>> {
        return ResponseEntity.ok(projectService.getFiltered(projectDto))
    }
}

