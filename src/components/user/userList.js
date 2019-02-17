import React from 'react';
import UserListRow from './UserListRow';

const UserList = ({ users }) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">User</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) =>
          <UserListRow key={user.userId} user={user} index={index} />
        )}
      </tbody>
    </table>
  );
};

export default UserList;