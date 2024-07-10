import React from "react";
import logo from '../assets/images/logo.jpeg';
import bgHome from '../assets/images/home.jpg';
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-10">
        <div className="w-1/2">
          <img src={bgHome} alt="Home" />
        </div>
        <div className="flex flex-col items-center w-1/2">
          <img className="w-32 h-32 mb-5" src={logo} alt="Logo" />
          <h1 className="text-5xl font-bold mb-3"> 
            RecipeBook 
          </h1>
          <h2 className="text-2xl mb-5"> 
            Discover Recipes 
          </h2>
          <Link className="btn" to="/search-results"> Explore </Link>
        </div>
      </div>
    </div>
  )
}