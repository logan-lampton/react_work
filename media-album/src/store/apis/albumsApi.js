import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// reducerPath is a propert on the big state object where all of the keys/data of the API state should be maintained

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
        addAlbum: builder.mutation({
            query: (user) => {
                return {
                    url: "/albums",
                    method: "POST",
                    body: {
                        userId: user.id,
                        title: faker.commerce.productName()
                    }
                }
            }
        }),
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
