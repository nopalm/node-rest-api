import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h1>Data Users</h1>
      {users.map((user) => (
        <div className="card" key={user._id}>
          <div className="card-body">
            <p className="card-text">user name : {user.name}</p>
            <p className="card-text">user address : {user.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
