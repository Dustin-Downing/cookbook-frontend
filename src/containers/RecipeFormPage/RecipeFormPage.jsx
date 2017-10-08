import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { recipeActions } from '../../_actions';

class RecipeFormPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: {
                name: '',
                description: '',
                time: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { recipe } = this.state;
        this.setState({
            recipe: {
                ...recipe,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { recipe } = this.state;
        const { dispatch } = this.props;
        if (recipe.name && recipe.description && recipe.time) {
            dispatch(recipeActions.create(recipe));
        }
    }

    render() {
        const { recipe, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>RecipeFormPage</h1>
                <p>You're logged in with React!!</p>
                <p>
                  <Link to="/">Home</Link>
                </p>
                <p>
                  <Link to="/login">Logout</Link>
                </p>


                <div className="col-md-6 col-md-offset-3">
                    <h2>New Recipe</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !recipe.name ? ' has-error' : '')}>
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" value={recipe.name} onChange={this.handleChange} />
                            {submitted && !recipe.name &&
                                <div className="help-block">Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !recipe.description ? ' has-error' : '')}>
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" name="description" value={recipe.description} onChange={this.handleChange} />
                            {submitted && !recipe.description &&
                                <div className="help-block">Description is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !recipe.time ? ' has-error' : '')}>
                            <label htmlFor="time">Time</label>
                            <input type="number" className="form-control" name="time" value={recipe.time} onChange={this.handleChange} />
                            {submitted && !recipe.time &&
                                <div className="help-block">Time is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Create</button>
                            <Link to="/form" className="btn btn-link">Clear</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
      registering
  };
}

const connectedRecipeFormPage = connect(mapStateToProps)(RecipeFormPage);
export { connectedRecipeFormPage as RecipeFormPage };
