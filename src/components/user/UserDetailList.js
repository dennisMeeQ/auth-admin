import React from 'react';

const UserDetailList = ({ user = {} }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item list-group-item-action list-group-item-primary">
          <h1>User {user.username}</h1>    
        </li>
        <li className="list-group-item">UserID: {user.userId}</li>
        <li className="list-group-item">First name: {user.firstName}</li>
        <li className="list-group-item">Last name: {user.lastName}</li>
        <li className="list-group-item">eMail: {user.email}</li>
      </ul>
    </div>
  );
}

export default UserDetailList;