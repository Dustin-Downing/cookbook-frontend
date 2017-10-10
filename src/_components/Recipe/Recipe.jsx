import React from 'react';
import { Link } from 'react-router-dom';

export class Recipe extends React.Component {
  handleChange() {}

  render() {
    let newIngredient = '';

    return (
      <div>
        <div className="modal-header">
          <button onClick={this.props.onClose} style={{fontSize: 28}} className="close">
            <span aria-hidden="true">×</span>
          </button>
          <h1 className="modal-title" style={{textAlign: "center"}}>
            {this.props.recipe.name}
          </h1>
        </div>
        <div className="modal-body" style={{textAlign: "center"}}>
          <p style={{fontSize: 18, fontWeight: "500"}}>Description</p>
          {this.props.recipe.description}
        </div>
        <div className="modal-footer" style={{textAlign: "left"}}>
          <p style={{textAlign: "center", fontSize: 18, fontWeight: "500"}}>Ingredients</p>
          <ul style={{marginLeft: "40%"}}>
            {this.props.recipe.ingredients.map(ingredient => {
              return <li key={ingredient.id}>{ingredient.amount} {ingredient.name}</li>
            })}
          </ul>
        </div>
        <div className="modal-footer" style={{textAlign: "center"}}>
          <p style={{fontSize: 18, fontWeight: "500"}}>Steps</p>
          Comming soon...
        </div>
        <div className="modal-footer" style={{textAlign: "center"}}>
          <Link to="/form" onClick={this.props.onClose} className="btn btn-link">Edit Recipe</Link>
          <button className="btn btn-primary" onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}
