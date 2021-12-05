import { memo, VFC } from "react";
import { Link, useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
  const history = useHistory();

  return (
    <div className="bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-2 flex items-center">
        <h1>
          <Link className="mr-4" to="/home">
            ProjectName
          </Link>
        </h1>
        <div className="flex">
          <button className="mx-2 py-2 hover:opacity-70" onClick={() => history.push("/home")}>
            Home
          </button>
          <button className="mx-2 py-2 hover:opacity-70" onClick={() => history.push("/home/user_management")}>
            UserManagement
          </button>
        </div>
      </div>
    </div>
  );
});
