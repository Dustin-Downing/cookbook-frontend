import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import { recipeActions, modalActions } from '../../_actions';
import { RecipePreview, NavBar, Recipe } from '../../_components';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onClear() {
    this.props.dispatch(recipeActions.clearSelected());
  }

  onOpenModal (recipe) {
    this.props.dispatch(modalActions.open());
    this.props.dispatch(recipeActions.getById(recipe.id));
  }

  onCloseModal () {
    this.props.dispatch(modalActions.close());
  }

  componentDidMount() {
    this.props.dispatch(recipeActions.getAll());
  }

  render() {
    const { recipes, modal } = this.props;
    const recipeList = (recipes.items) && recipes.items.map(recipe => {
      return <RecipePreview onClick={this.onOpenModal} key={recipe.id} recipe={recipe} />
    })

    return (
      <div className="col-md-10 col-md-offset-1">
        <NavBar onClear={this.onClear}/>
        <h1 style={{textAlign: "center"}}>Cook Book</h1>
        {recipeList}
        <ReactModal
           isOpen={modal.showModal}
           contentLabel="Minimal Modal Example">
          {recipes.item && <Recipe recipe={recipes.item} onClose={this.onCloseModal}/>}
        </ReactModal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { recipes, modal } = state;
  return {
    recipes,
    modal
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
