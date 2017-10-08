import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { recipeActions } from '../../_actions';

class RecipePage extends React.Component {
    componentDidMount() {
      this.props.dispatch(recipeActions.getAll());
    }

    render() {
      const { user, users } = this.props;
      return (
        <div className="col-md-6 col-md-offset-3">
          <h1>Recipes</h1>
          <p>You're logged in with React!!</p>
          <p>
              <Link to="/login">Logout</Link>
          </p>
        </div>
      );
    }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedRecipePage = connect(mapStateToProps)(RecipePage);
export { connectedRecipePage as RecipePage };
