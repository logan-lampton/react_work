import { useFetchPhotosQuery } from "../store";

function PhotosList({ album }) {
    useFetchPhotosQuery(album);

    return "Photos List"
}

export default PhotosList;