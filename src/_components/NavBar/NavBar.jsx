import React from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Link style={{padding: 10}} to="/">Cookbook</Link>
        <Link style={{padding: 10}} to="/list">Shopping List</Link>
        <Link style={{padding: 10}} to="/form">New Recipe</Link>
        <Link style={{padding: 10}} to="/login">Logout</Link>
      </div>
    );
  }
}
