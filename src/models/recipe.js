import Cuisine from './cuisine';
import Diet from './diet';
import Difficulty from './difficulty';

export default class Recipe {
  id;
  name;
  ingredients;
  instructions;
  cuisineId;
  dietId;
  difficultyId;
  image;

  constructor(recipe, cuisines = [], diets = [], difficulties = []) {
    this.id = recipe?.id ?? null;
    this.name = recipe?.name ?? '';
    this.ingredients = recipe?.ingredients ?? [];
    this.instructions = recipe?.instructions ?? '';
    this.cuisine = recipe?.cuisineId ? this.getCuisine(recipe.cuisineId, cuisines) : null;
    this.diet = recipe?.dietId ? this.getDiet(recipe.dietId, diets) : null;
    this.difficulty = recipe?.difficultyId ? this.getDifficulty(recipe.difficultyId, difficulties) : null;
    this.image = recipe?.image ? this.getImage(recipe.image) : '';
  }
  

  getCuisine(cuisineId, cuisines) {
    const cuisine = cuisines.find(cuisine => cuisine.id === cuisineId)
    return new Cuisine(cuisine);
  }

  setCuisine(cuisine) {
    this.cuisine = cuisine
  }
  
  getDiet(dietId, diets) {
    const diet = diets.find(diet => diet.id === dietId)
    return new Diet(diet);
  }

  setDiet(diet) {
    this.diet = diet
  }

  getDifficulty(difficultyId, difficulties) {
    const difficulty = difficulties.find(difficulty => difficulty.id === difficultyId)
    return new Difficulty(difficulty);
  }

  setDifficulty(difficulty) {
    this.difficulty = difficulty
  }

  getImage(image) {
    return `${process.env.REACT_APP_ASSET_URL}${image}`
  }
}
