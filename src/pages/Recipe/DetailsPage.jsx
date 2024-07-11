import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Cuisine from "../../models/cuisine";
import Diet from "../../models/diet";
import Difficulty from "../../models/difficulty";
import Recipe from "../../models/recipe";

import { get as getRecipe } from "../../services/recipe";
import { get as getCuisine } from "../../services/cuisine";
import { get as getDiet } from "../../services/diet";
import { get as getDifficulty } from "../../services/difficulty";

import { getDifficultyBgColor } from './../../utils/recipe';

export default function DetailsPage() {
  const { productId } = useParams();

  const location = useLocation()
  const state = location.state;
  const { recipeDetail } = state ?? { recipeDetail: null };
  
  const [recipe, setRecipe] = useState(recipeDetail ?? null)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {    
    const get = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const recipe = await getRecipe(productId).then(async (res) => {
          
          if(res?.data) {
            const cuisine = await getCuisine(res.data.cuisineId).then(res => res?.data ? new Cuisine(res.data) : null) 
            const diet = await getDiet(res.data.dietId).then(res => res?.data ? new Diet(res.data) : null)
            const difficulty = await getDifficulty(res.data.difficultyId).then(res => res?.data ? new Difficulty(res.data) : null)
            const recipe = new Recipe(res.data)
            recipe.setCuisine(cuisine);
            recipe.setDiet(diet);
            recipe.setDifficulty(difficulty);
            return recipe
          } else {
            return null
          }
        })
        setRecipe(recipe)
      } catch(error) {
        setError(error.message || 'Qualcosa è andato storto!');
      } finally {
        setIsLoading(false)
      }
    };


    if(recipeDetail) {
      setRecipe(recipeDetail)
    } else {
      get()
    }
  }, [])
  
  return (
    recipe ?
      <div className="container mx-auto pb-10">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-4xl text-center font-bold uppercase mb-3"> {recipe.name} </h1>
          </div>
          <div className="flex justify-center gap-3 mb-5">
              <div className="badge border-blue-400 text-gray-600 capitalize">
                {recipe.cuisine?.name ?? ''} cuisine
              </div>
              <p className="badge border-purple-600 text-gray-600 capitalize">
                {recipe.diet?.name ?? ''} Diet
              </p>
              <p className={`badge text-white capitalize ${getDifficultyBgColor(recipe.difficulty?.name)}`}>
                {recipe.difficulty?.name ?? ''} Difficulty
              </p>
            </div>
          <div>
            <img className="w-full object-cover aspect-video rounded-3xl" src={recipe.image} alt={recipe.name} />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-3"> Ingredients </h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}> {ingredient} </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-3"> Procedure </h2>
            <p> {recipe.instructions} </p>
          </div>
        </div>
      </div>
    : ''
  )
}