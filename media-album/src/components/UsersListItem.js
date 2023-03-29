import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";

function UsersListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleDeleteUser = () => {
    doDeleteUser(user);
  };

  const header = <>
   <Button
            className="mr-3"
            loading={isLoading}
            onClick={handleDeleteUser}
          >
            <GoTrashcan />
          </Button>
          {error && <div>Error deleting user.</div>}
          {user.name}
  </>;

  return (
    <ExpandablePanel header={header}>
        CONTENT!!!
    </ExpandablePanel>
  );
}

export default UsersListItem;
