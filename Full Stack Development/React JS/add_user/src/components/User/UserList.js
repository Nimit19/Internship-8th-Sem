import React from "react";

import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              Username:{user.userName} Age:{user.userAge}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
