import React from "react";
import { Link } from "react-router-dom";
import { getDifficultyBgColor } from "../../utils/recipe";

export default function Item({ recipe }) {
  
  return (
    <div className="flex w-full p-6 border border-grey-500 rounded-3xl">
      <div className="w-60 h-auto">
        <img 
          className="h-full object-cover aspect-square rounded-3xl text-center" 
          src={recipe.image} 
          alt={recipe.name}
        />
      </div>
      <div className="px-4 flex justify-between leading-normal w-full">
        <div className="w-3/4">
          <h2 className="text-gray-900 text-2xl font-medium mb-4"> 
            {recipe.name} 
          </h2>
          <div className="flex gap-3 mb-4">
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
          <div className="">
            <p className="text-md text-gray-400 flex items-center max-w-[75%] mb-2">
              {recipe.instructions}
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              {recipe.ingredients.join(', ')}
            </p>
          </div>
        </div>
        <div className="w-1/4 flex h-fit justify-end mt-auto">
          <Link 
            className="btn text-center" 
            to={`/recipes/${recipe.id}`}
            state={ { recipeDetail: recipe } }
          > 
            Vedi dettagli 
          </Link>

        </div>
      </div>
    </div>
  )
}