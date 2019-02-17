import React from 'react';

const UserListRow = ({ user, index }) => {
  return (
    <tr>
      <th scope="row">{index+1}</th>
      <td>{user.username}</td>
      <td>{`${user.firstName} ${user.lastName}`}</td>
      <td>{user.email}</td>
      <td>
        <a href={`/user/${user.userId}`}>Detail</a>
      </td>
  </tr>
  );
};

export default UserListRow;