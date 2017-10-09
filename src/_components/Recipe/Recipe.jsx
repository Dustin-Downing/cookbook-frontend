import React from 'react';

export class Recipe extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.recipe.name}</h1>
        <button onClick={this.props.onClose}>Close Modal</button>
      </div>
    );
  }
}
