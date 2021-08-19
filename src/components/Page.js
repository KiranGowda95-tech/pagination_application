import React from "react";

const Page = ({ users }) => {
  return (
    <div className="flex">
      {users.length &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
              <img key={user.avatar} alt="user" src={user.avatar} />
              <p>{user.text}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Page;
