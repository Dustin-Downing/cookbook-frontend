import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import { recipeActions } from '../../_actions';
import { RecipePreview, NavBar, Recipe } from '../../_components';

class HomePage extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      recipe: {}
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (recipe) {
    this.setState({ showModal: true, recipe: recipe });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.props.dispatch(recipeActions.getAll());
  }

  dummyRecipes() {
    return [
      {
        created_at: "2017-10-08T15:34:21.384Z",
        description: "Facilis et culpa temporibus.",
        id: 1,
        name: "temporibus",
        time: 43,
        updated_at: "2017-10-08T15:34:21.384Z",
      },
      {
        created_at: "2017-10-08T15:34:21.384Z",
        description: "Sit adipisci quod et ut.",
        id: 2,
        name: "est",
        time: 77,
        updated_at: "2017-10-08T15:34:21.384Z",
      },
      {
        created_at: "2017-10-08T15:34:21.384Z",
        description: "Omnis dolore inventore culpa voluptatem voluptate cum ad.",
        id: 3,
        name: "non",
        time: 18,
        updated_at: "2017-10-08T15:34:21.384Z",
      }
    ]
  }

  render() {
    const { recipes } = this.props;
    const recipeList = this.dummyRecipes().map(recipe => {
      return <RecipePreview onClick={this.handleOpenModal} key={recipe.id} recipe={recipe} />
    })

    return (
      <div className="col-md-8 col-md-offset-2">
        <NavBar />
        {recipeList}
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example">
          <Recipe recipe={this.state.recipe} onClose={this.handleCloseModal}/>
        </ReactModal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps");
  console.log(state);
  const { users, authentication, recipes } = state;
  const { user } = authentication;
  return {
    user,
    users,
    recipes
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
