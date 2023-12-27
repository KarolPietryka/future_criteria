import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import {ProjectApi} from "./api/ProjectApi";

export const store = configureStore({
    reducer: {
        [ProjectApi.reducerPath]: ProjectApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProjectApi.middleware),
})

setupListeners(store.dispatch)