import React from 'react';
import { Link } from 'react-router-dom';

import { recipeActions } from '../../_actions';

export class NavBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onClick = this.onClick.bind(this);
  // }
  //
  // onClick() {
  //   this.props.dispatch(recipeActions.clearSelected());
  // }

  render() {
    return (
      <div style={{background: "#c1c1c1", padding: 10, borderRadius: 10}}>
        <Link style={{padding: 10, borderRight: "solid gray 1px"}} to="/">Cook book</Link>
        <Link style={{padding: 10, borderRight: "solid gray 1px"}} to="/list">Shopping List</Link>
        <Link onClick={this.props.onClear} style={{padding: 10, borderRight: "solid gray 1px"}} to="/form">New Recipe</Link>
        <Link style={{padding: "10px", marginTop: "-10px", float: "right", borderLeft: "solid gray 1px"}} to="/login">Logout</Link>
      </div>
    );
  }
}
