package com.kp.futurecriteria.controller


import com.kp.futurecriteria.api.ProjectsApi
import com.kp.futurecriteria.model.ProjectDto
import com.kp.futurecriteria.service.project.ProjectService
import com.kp.futurecriteria.utility.ConstUtility.API_PROJECTS
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.util.UriComponentsBuilder
import java.net.URI


@Controller
@RequestMapping(API_PROJECTS)
class ProjectController(
    val projectService: ProjectService
) : ProjectsApi {

//    override fun projectsGet(): ResponseEntity<MutableList<ProjectDto>> {
//        return ResponseEntity.ok(listOf(ProjectFactory().createSampleProject()))
//    }

    override fun projectsPut(projectDto: ProjectDto): ResponseEntity<Void> {
        val savedProject = projectService.save(projectDto)
        val location: URI = UriComponentsBuilder
            .fromPath("$API_PROJECTS/{id}")
            .buildAndExpand(savedProject.id)
            .toUri()

        return ResponseEntity.created(location).build()
    }
}

