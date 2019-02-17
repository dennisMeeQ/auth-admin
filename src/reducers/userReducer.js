import * as types from '../actions/actionTypes';

export default function userReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_USERS_SUCCESS:
            return action.users;

        case types.LOAD_USER_SUCCESS:
          return action.user;

        default:
            return state;
    }
};