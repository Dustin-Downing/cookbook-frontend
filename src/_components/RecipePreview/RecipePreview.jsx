import React from 'react';
import { styles } from './style.js'

export class RecipePreview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.recipe)
  }

  // let containerStyle = {
  //   display: "inline-block",
  //   cursor: "pointer",
  //   border:  "solid #828282 2px",
  //   borderRadius: 5;
  // };

  render() {
    // const styles = require('./style.js');

    return (
      <div style={styles.containerStyle} onClick={this.handleClick}>
        <h2 style={styles.headerStyle}>
          {this.props.recipe.name}
        </h2>
        <p style={styles.bodyStyle}>
          Cooktime: {this.props.recipe.time}mins
        </p>
      </div>
    );
  }
}
