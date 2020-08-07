import { getAll, createRecipe, checkResult, getRecipeById, editRecipe, likeRecipe, deleteRecipe as apiDelete } from '../data.js';
import { showInfo, showError } from '../notification.js';

export default async function home() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        catalog: await this.load('./templates/catalog/catalog.hbs'),
        recipe: await this.load('./templates/catalog/recipe.hbs')
    };

    const context = Object.assign({}, this.app.userData);
    if (this.app.userData.username) {
        const recipes = await getAll();
        context.recipes = recipes;
    }

    this.partial('./templates/home.hbs', context);
}

export async function createPage() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };

    this.partial('./templates/catalog/create.hbs', this.app.userData);
}

export async function editPage() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };

    const recipe = await getRecipeById(this.params.id);
    recipe.ingredients = recipe.ingredients.join(', ');
    const context = Object.assign({ recipe }, this.app.userData);

    await this.partial('./templates/catalog/edit.hbs', context);

    document.querySelectorAll('select[name=category]>option').forEach(o => {
        if (o.textContent == recipe.category) {
            o.selected = true;
        }
    });

}

export async function detailsPage() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };

    const recipe = await getRecipeById(this.params.id);
    const context = Object.assign({ recipe }, this.app.userData);

    if (recipe.ownerId === this.app.userData.userId) {
        recipe.canEdit = true;
    }

    this.partial('./templates/catalog/details.hbs', context);



}

export async function like() {
    const id = this.params.id;
    try {
        const result = await likeRecipe(id);
        checkResult(result);

        showInfo('You liked that recipe');
        this.redirect('#/home');

    } catch (err) {
        showError(err.message);
    }
}

export async function deleteRecipe() {
    const id = this.params.id;
    try {
        const result = await apiDelete(id);
        checkResult(result);

        showInfo('Your recipe was archived');
        this.redirect('#/home');

    } catch (err) {
        showError(err.message);
    }
}

export async function createPost() {
    const recipe = {
        meal: this.params.meal,
        ingredients: this.params.ingredients.split(',').map(i => i.trim()),
        prepMethod: this.params.prepMethod,
        description: this.params.description,
        foodImageURL: this.params.foodImageURL,
        category: this.params.category,
        likes: 0,
        categoryImageURL: 'https://t3.ftcdn.net/jpg/00/25/90/48/240_F_25904887_fhZJ692ukng3vQxzHldvuN981OiYVlJ1.jpg',
    }
    try {
        if (recipe.meal.length < 4) {
            throw new Error('Meal must be at least 4 characters long');
        }
        if (recipe.ingredients.length < 2) {
            throw new Error('There must be at least 2 ingredients');
        }
        if (recipe.prepMethod.length < 10) {
            throw new Error('Preparation method must be at least 10 characters long');
        }
        if (recipe.description.length < 10) {
            throw new Error('Description must be at least 10 characters long');
        }
        if (recipe.foodImageURL.slice(0, 7) != 'http://' && recipe.foodImageURL.slice(0, 8) != 'https://') {
            throw new Error('Invalid image URL');
        }
        if (recipe.category == 'Select category...') {
            throw new Error('Please select category from list');
        }

        const result = await createRecipe(recipe);
        checkResult(result);

        showInfo('Recipe shared successfuly!');
        this.redirect('#/home');

    } catch (err) {
        showError(err.message);
    }

}

export async function editPost() {

    const id = this.params.id;
    const recipe = await getRecipeById(id);

    recipe.meal = this.params.meal;
    recipe.ingredients = this.params.ingredients.split(',').map(i => i.trim());
    recipe.prepMethod = this.params.prepMethod;
    recipe.description = this.params.description;
    recipe.foodImageURL = this.params.foodImageURL;
    recipe.category = this.params.category;

    try {
        if (recipe.meal.length < 4) {
            throw new Error('Meal must be at least 4 characters long');
        }
        if (recipe.ingredients.length < 2) {
            throw new Error('There must be at least 2 ingredients');
        }
        if (recipe.prepMethod.length < 10) {
            throw new Error('Preparation method must be at least 10 characters long');
        }
        if (recipe.description.length < 10) {
            throw new Error('Description must be at least 10 characters long');
        }
        if (recipe.foodImageURL.slice(0, 7) != 'http://' && recipe.foodImageURL.slice(0, 8) != 'https://') {
            throw new Error('Invalid image URL');
        }
        if (recipe.category == 'Select category...') {
            throw new Error('Please select category from list');
        }

        const result = await editRecipe(id, recipe);
        checkResult(result);

        showInfo('Recipe edit successfuly!');
        this.redirect('#/home');

    } catch (err) {
        showError(err.message);
    }

}


