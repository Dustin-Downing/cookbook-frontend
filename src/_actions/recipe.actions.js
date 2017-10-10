import { recipeConstants } from '../_constants';
import { recipeService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const recipeActions = {
  create,
  getAll,
  getById,
  update,
  clearSelected,
  delete: _delete
};

function create(recipe) {
  return dispatch => {
    dispatch(request(recipe));

    recipeService.create(recipe)
      .then(
        recipe => {
          dispatch(success());
          history.push('/form');
          dispatch(alertActions.success('Recipe created successfully'));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(recipe) { return { type: recipeConstants.CREATE_REQUEST, recipe } }
  function success(recipe) { return { type: recipeConstants.CREATE_SUCCESS, recipe } }
  function failure(error) { return { type: recipeConstants.CREATE_FAILURE, error } }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    recipeService.getAll()
      .then(
        recipes => dispatch(success(recipes)),
        error => dispatch(failure(error))
      );
  };

  function request() { return { type: recipeConstants.GETALL_REQUEST } }
  function success(recipes) { return { type: recipeConstants.GETALL_SUCCESS, recipes } }
  function failure(error) { return { type: recipeConstants.GETALL_FAILURE, error } }
}

function getById(id) {
  return dispatch => {
    dispatch(request());

    recipeService.getById(id)
      .then(
        recipe => dispatch(success(recipe)),
        error => dispatch(failure(error))
      );
  };

  function request() { return { type: recipeConstants.GETONE_REQUEST } }
  function success(recipe) { return { type: recipeConstants.GETONE_SUCCESS, recipe } }
  function failure(error) { return { type: recipeConstants.GETONE_FAILURE, error } }
}

function update(recipe) {
  return dispatch => {
    dispatch(request());

    recipeService.update(recipe)
      .then(
          recipe => dispatch(success(recipe)),
          error => dispatch(failure(error))
      );
  };

  function request() { return { type: recipeConstants.UPDATE_REQUEST } }
  function success(recipe) { return { type: recipeConstants.UPDATE_SUCCESS, recipe } }
  function failure(error) { return { type: recipeConstants.UPDATE_FAILURE, error } }
}

// clears the current selected recipe for creating new recipes
function clearSelected() {
  return dispatch => {
    dispatch(request());
  };

  function request() { return { type: recipeConstants.CLEARSELECTED_REQUEST } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    recipeService.delete(id)
      .then(
        recipe => {
          dispatch(success(id));
        },
        error => {
          dispatch(failure(id, error));
        }
      );
  };

  function request(id) { return { type: recipeConstants.DELETE_REQUEST, id } }
  function success(id) { return { type: recipeConstants.DELETE_SUCCESS, id } }
  function failure(id, error) { return { type: recipeConstants.DELETE_FAILURE, id, error } }
}
