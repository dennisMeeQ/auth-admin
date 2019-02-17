import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserDetailList from './UserDetailList';

class UserDetailPage extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        user: {
          username: '',
          userId: 0,
          firstName: '',
          lastName: '',
          email: '',
        }
      };
  }
  
  componentDidMount(){
    this.props.actions.loadUser(this.props.match.params.id);
  }
  
  render() {
    const { user } = this.props;
    console.log(user);
    // const user = {
    //   username: 'dst',
    //   userId: 123456,
    //   firstName: 'Dennis',
    //   lastName: 'Stötzel',
    //   email: 'spotz@meeq.de',
    // };

    return (
      <div>
        <UserDetailList user={user} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailPage);