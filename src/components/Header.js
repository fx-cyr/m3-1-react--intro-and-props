import React from "react";

import "./Header.css";

const Header = (props) => {
  console.log(props);

  return (
    <header>
      {props.users
        .filter((user) => {
          if (user.username !== props.currentUser.username) {
            return true;
          } else {
            return false;
          }
        })
        .map((user) => {
          return (
            <div className="chatMember">
              <p>
                <img
                  className="memberIcon"
                  src={user.avatar}
                  alt={user.username}
                  title={user.username}
                />
              </p>
              <p className="memberName">{user.username}</p>
            </div>
          );
        })}
    </header>
  );
};

export default Header;
