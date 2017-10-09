import React from 'react';

export class RecipePreview extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.recipe)
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>
          Recipe: {this.props.recipe.name}
        </h1>
        <h2>
          Cooktime: {this.props.recipe.time}mins
        </h2>
      </div>
    );
  }
}
