import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/useThunk";

function UsersListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

    const handleDeleteUser = () => {
        doDeleteUser(user);
    };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button loading={isLoading} onClick={handleDeleteUser}>
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;
