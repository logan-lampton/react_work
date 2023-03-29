import { createApi } from "@reduxjs/toolkit/query/react";

// reducerPath is a propert on the big state object where all of the keys/data of the API state should be maintained

const albumsApi = createApi({
  reducerPath: "albums",
});
