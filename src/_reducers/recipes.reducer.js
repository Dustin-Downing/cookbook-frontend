import { recipeConstants } from '../_constants';

export function recipes(state = {}, action) {
  switch (action.type) {
    case recipeConstants.CREATE_REQUEST:
      return {
        loading: true
      };
    case recipeConstants.CREATE_SUCCESS:
      return {
        item: action.recipe
      };
    case recipeConstants.CREATE_FAILURE:
      return {
        error: action.error
      };
    case recipeConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case recipeConstants.GETALL_SUCCESS:
      return {
        items: action.recipes
      };
    case recipeConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case recipeConstants.GETONE_REQUEST:
      return {
        loading: true
      };
    case recipeConstants.GETONE_SUCCESS:
      return {
        items: action.recipe
      };
    case recipeConstants.GETONE_FAILURE:
      return {
        error: action.error
      };
    case recipeConstants.DELETE_REQUEST:
      // add 'deleting:true' property to recipe being deleted
      return {
        ...state,
        items: state.items.map(recipe =>
          recipe.id === action.id
            ? { ...recipe, deleting: true }
            : recipe
        )
      };
    case recipeConstants.DELETE_SUCCESS:
      // remove deleted recipe from state
      return {
        items: state.items.filter(recipe => recipe.id !== action.id)
      };
    case recipeConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to recipe
      return {
        ...state,
        items: state.items.map(recipe => {
          if (recipe.id === action.id) {
            // make copy of recipe without 'deleting:true' property
            const { deleting, ...recipeCopy } = recipe;
            // return copy of recipe with 'deleteError:[error]' property
            return { ...recipeCopy, deleteError: action.error };
          }

          return recipe;
        })
      };
    default:
      return state
  }
}

// 
// UPDATE_REQUEST: 'RECIPE_UPDATE_REQUEST',
// UPDATE_SUCCESS: 'RECIPE_UPDATE_SUCCESS',
// UPDATE_FAILURE: 'RECIPE_UPDATE_FAILURE',
