import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { RecipeBrowse } from './pages/RecipeBrowse';
import { RecipeManage } from './pages/RecipeManage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StandalonePage } from './pages/StandalonePage';
import { RedirectPage } from './pages/RedirectPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <StandalonePage />,
      children: [
        {
          path: '/',
          element: <RedirectPage to='/recipes' />,
        },
        {
          path: '/recipes',
          element: <RecipeBrowse />,
        },
        {
          path: '/recipes/:recipeId',
          element: <RecipeManage />,
        },
      ],
    },
  ],
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider  client={queryClient}> 
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);