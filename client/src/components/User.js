import React from 'react';
import useFetch from '../hooks/useFetch';
import UserList from '../components/UserList';

const User = () => {
  const { error, data: users } = useFetch('http://localhost:5000/users');
  return (
    <div>
      <>{error && <div>{error}</div>}</>
      <div className="col-md-6">{users && <UserList users={users} />}</div>
    </div>
  );
};

export default User;
