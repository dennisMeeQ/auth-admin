import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';

class UserOverviewPage extends Component {
  // constructor(props, context) {
  //   super(props, context);

  //   this.state = {
  //     users: [],
  //   }
  // }

  componentDidMount(){
    this.props.actions.loadUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Users</h1>
        <UserList users={users} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserOverviewPage);