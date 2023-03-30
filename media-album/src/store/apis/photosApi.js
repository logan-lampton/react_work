import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const photosApi = createApi({
    reducerPath: "photos",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({}),
            addPhoto: builder.mutation({}),
            removePhoto: builder.mutation({})
        }
    }
});
