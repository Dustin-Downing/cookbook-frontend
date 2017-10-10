import React from 'react';
import { connect } from 'react-redux';

import { NavBar } from '../../_components';
import { recipeActions } from '../../_actions';

class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: (props.recipes.item && props.recipes.item.name) || '',
      description: (props.recipes.item && props.recipes.item.description) || '',
      time: (props.recipes.item && props.recipes.item.time) || '',
      ingredients: (props.recipes.item && props.recipes.item.ingredients) || [],
      newIngredient: '',
      newIngredientAmount: '',
      submitted: false,
      isNew: !props.recipes.item
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onClear() {
    this.props.dispatch(recipeActions.clearSelected());
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  addIngredient(e) {
    const { newIngredient, newIngredientAmount, ingredients } = this.state;
    const newIngredientObj = {
      amount: newIngredientAmount,
      name: newIngredient
    }
    ingredients.push(newIngredientObj);
    this.setState({ ingredients:ingredients, newIngredient:'', newIngredientAmount:'' });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { name, description, time, ingredients, isNew } = this.state;
    const { dispatch, recipes } = this.props;
    const recipe = {
      ...recipes.item,
      name: name,
      description: description,
      time: time,
      ingredients: ingredients
    }

    if(recipe.name && recipe.description && recipe.time && recipe.ingredients.length > 0) {
      if(isNew) {
        dispatch(recipeActions.create(recipe));
      } else {
        dispatch(recipeActions.update(recipe));
      }
    }
  }

  render() {
    const { recipes } = this.props;
    const { name, description, time, ingredients, submitted, newIngredient, newIngredientAmount, isNew } = this.state;

    return (
      <div className="col-md-10 col-md-offset-1">
        <NavBar onClear={this.onClear}/>
        <h1 style={{textAlign: "center"}}>{(isNew) ? "New Recipe" : "Update Recipe" }</h1>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
            {submitted && !name &&
              <div className="help-block">Name is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !description ? ' has-error' : '')}>
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" name="description" value={description} onChange={this.handleChange} />
            {submitted && !description &&
              <div className="help-block">Description is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !time ? ' has-error' : '')}>
            <label htmlFor="time">Cook Time</label>
            <input type="number" className="form-control" placeholder="Minutes" name="time" value={time} onChange={this.handleChange} />
            {submitted && !time &&
              <div className="help-block">Cook Time is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !ingredients ? ' has-error' : '')}>
            <label htmlFor="ingredients">Ingredients</label>
            <ul>
              { ingredients&&
                ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.amount} of {ingredient.name}</li>
                ))
              }
              <li>
                <input type="text" name="newIngredientAmount" placeholder="Amount" value={newIngredientAmount} onChange={this.handleChange}/> of
                <input type="text" name="newIngredient" placeholder="Ingredient" value={newIngredient} onChange={this.handleChange} style={{margin:7}}/>
                {(newIngredientAmount && newIngredient) && <button className="btn btn-secondary" onClick={this.addIngredient} type="button">Add</button>}
              </li>
            </ul>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">{(isNew) ? "Create" : "Update"}</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { recipes } = state;
  return {
    recipes
  };
}

const connectedFormPage = connect(mapStateToProps)(FormPage);
export { connectedFormPage as FormPage };
