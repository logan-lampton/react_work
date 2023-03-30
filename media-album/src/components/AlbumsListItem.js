import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";

function AlbumsListItem({ album }) {
  const [deleteAlbum, results] = useDeleteAlbumMutation();

  const handleDeleteAlbum = () => {
    deleteAlbum(album);
  };

  const header = (
    <div className="flex flex-row">
      <Button className="mr-2" loading={results.isLoading} onClick={handleDeleteAlbum}>
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      UPDATE CODE to show the list of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
