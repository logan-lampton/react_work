import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";

function AlbumsListItem({ album }) {
  const header = <div className="flex flex-row">
    <Button>
    <GoTrashcan />
    </Button>
    {album.title}
    </div>;
  return (
    <ExpandablePanel key={album.id} header={header}>
      UPDATE CODE to show the list of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
