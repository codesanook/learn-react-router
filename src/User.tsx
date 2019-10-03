import React from "react";
import { Link, Route } from "react-router-dom";

interface IMatch {
  params: any;
  url: string;
}

interface IProps {
  match: IMatch;
}

const UserDetails: React.FC<IProps> = props => {
  const { params } = props.match;
  return (
    <div className="main-panel">
      <h1>User</h1>
      <h2>User Id: {params.id}</h2>
    </div>
  );
};

const User = () => {
  const style = {
    textAlign: "center" as "center"
  };
  return (
    <div>
      <h1 style={style}>Users</h1>
      <ul className="left-panel">
        <li>
          <Link to="/user/1">User 1 </Link>
        </li>
        <li>
          <Link to="/user/2">User 2 </Link>
        </li>
        <li>
          <Link to="/user/3">User 3 </Link>
        </li>
      </ul>
      <Route path="/user/:id" component={UserDetails} />
    </div>
  );
};

export default User;
