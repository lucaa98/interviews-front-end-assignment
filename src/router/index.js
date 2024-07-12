import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "../components/Layout";

const HomePage = lazy(() => import('../pages/HomePage'));
const SearchResultsPage = lazy(() => import('../pages/SearchResultsPage'));
const DetailsPage = lazy(() => import('../pages/Recipe/DetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'recipes',
        element: <SearchResultsPage />
      },
      {
        path: 'recipes/:productId',
        element: <DetailsPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
])

export { router }