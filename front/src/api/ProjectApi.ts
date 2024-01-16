import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ProjectApi = createApi({
    reducerPath: 'projectApi', // Unique key for the Redux store
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080', credentials: "include"}), // Replace '/api' with your actual base URL
    endpoints: (builder) => ({
        getAllProjects: builder.query({
            query: () => '/projects',
        }),
        createProject: builder.mutation({
            query: (project) => ({
                url: '/projects',
                method: 'PUT',
                body: project,
            }),
        }),
        getProjectById: builder.query({
            query: (id) => `/projects/${id}`,
        }),
        filterProjects: builder.query({
            query: (project) => ({
                url: '/projects/filter',
                method: 'POST',
                body: project,
            }),
        }),
    }),
});

export const {
    useGetAllProjectsQuery,
    useCreateProjectMutation,
    useGetProjectByIdQuery,
    useFilterProjectsQuery,
} = ProjectApi;
