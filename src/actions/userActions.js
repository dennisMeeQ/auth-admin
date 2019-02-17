import * as types from './actionTypes';
import Swagger from 'swagger-client';

/***
 * Swagger API
 * TODO: Extract to separate file/component
 ***/
const spec = require('../api/auth-admin-openapi.json');

function getAllUsers() {
  return Swagger({ spec }).then((client) => {
    return client
      .apis
      .user
      .getAllUsers();
  }).catch(error => {
    throw error;
  });
}

function getUser(userId) {
  return Swagger({ spec }).then((client) => {
    return client
      .apis
      .user
      .getUser({
        id: userId
      });
  }).catch(error => {
    throw error;
  });
}

/***
 * END Swagger API
 ***/

export function loadUsersSuccess(users) {
  return {
    type: types.LOAD_USERS_SUCCESS,
    users,
  }
}

export function loadUsers() {
  return function(dispatch) {
    return getAllUsers()
    .then(users => {
      dispatch(loadUsersSuccess(users.body));
    })
    .catch(error => {
      throw(error);
    });
  };
}

export function loadUserSuccess(user) {
  console.log(`USer succerss: ${user}`);
  return {
    type: types.LOAD_USER_SUCCESS,
    user,
  }
}

export function loadUser(userId) {
  return function(dispatch) {
    return getUser(userId)
    .then(user => {
      dispatch(loadUserSuccess(user.body));
    })
    .catch(error => {
      throw(error);
    });
  };
}