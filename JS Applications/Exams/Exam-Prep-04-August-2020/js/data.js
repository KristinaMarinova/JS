import { beginRequest, endRequest, showError } from './notification.js';
import API from './api.js';

const endpoints = {
    RECIPES: 'data/recipes',
    RECIPE_BY_ID: 'data/recipes/'

};

const api = new API(
    '33604DAA-B8A8-0FC7-FFBA-0EC7CEC8CC00',
    '3C08B3A5-2E34-46E1-A1FA-7384E35898BB',
    beginRequest,
    endRequest);

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

//get all
export async function getAll() {
    return api.get(endpoints.RECIPES);
}

//create
export async function createRecipe(recipe) {
    return api.post(endpoints.RECIPES, recipe);
}
//get by id
export async function getRecipeById(id) {
    return api.get(endpoints.RECIPE_BY_ID + id);
}
//edit by id
export async function editRecipe(id, recipe) {
    return api.put(endpoints.RECIPE_BY_ID + id, recipe);
}
//delete by id
export async function deleteRecipe(id) {
    return api.delete(endpoints.RECIPE_BY_ID + id);
}

//like
export async function likeRecipe(id) {
    const recipe = await getRecipeById(id);

    return editRecipe(id, { likes: recipe.likes + 1 });
}

export function checkResult(result) {
    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }
}