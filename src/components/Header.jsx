import React from "react";
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <header className="sticky top-0 mb-4">
      <nav className="bg-gray-800">

        <div className="mx-auto max-w-7xl px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500" alt="Tailwind Logo" />
              </div>
              <div className="ml-6">
                <div className="flex space-x-4">
                  <NavLink className="nav-item" activeclassname="active" to="/" exact="true"> Home </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}