import React, { useEffect, useState } from "react";
import { getAll as getAllRecipes } from "../services/recipe";
import { getAll as getAllCuisines } from "../services/cuisine";
import { getAll as getAllDiets } from "../services/diet";
import { getAll as getAllDifficulties } from "../services/difficulty";
import Item from "../components/Recipe/Item";
import Recipe from "../models/recipe";
import Cuisine from './../models/cuisine';
import Diet from './../models/diet';
import Difficulty from './../models/difficulty';
import { Link } from "react-router-dom";

export default function SearchResults() {
  const [recipes, setRecipes] = useState([])
  const [cuisines, setCuisines] = useState([])
  const [diets, setDiets] = useState([])
  const [difficulties, setDifficulties] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const allCuisines = await getAllCuisines().then(res => res?.data.map(cuisine => new Cuisine(cuisine) ?? []))
        const allDiets = await getAllDiets().then(res => res?.data.map(diet => new Diet(diet) ?? []))
        const allDifficulties = await getAllDifficulties().then(res => res?.data.map(difficulty => new Difficulty(difficulty) ?? []))
        const allRecipes = await getAllRecipes().then(res => res?.data.map(recipe => new Recipe(recipe, allCuisines, allDiets, allDifficulties) ?? []))
        setCuisines(allCuisines);
        setDiets(allDiets);
        setDifficulties(allDifficulties);
        setRecipes(allRecipes);
      } catch(error) {
        setError(error.message || 'Qualcosa è andato storto!');
      } finally {
        setIsLoading(false)
      }
    };
    getAll()
  }, [])
  
  return (
    <div className="container mx-auto">
      <div className="text-end mb-5">
        <Link className="btn-add" to='/add-recipe'> 
          + Add Recipes
        </Link>       
      </div>
      
      <div>
        {isLoading ? (
          <p>Caricamento...</p>
        ): error ? (
          <p>Errore: {error} </p>
        ): (
          <div className="flex flex-col gap-4 w-full">
            {recipes.map((recipe) => (
              <Item key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}