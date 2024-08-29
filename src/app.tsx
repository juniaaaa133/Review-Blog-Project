import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Blog from "./components/blog/Blog";
import Layout from "./components/router-layout/Layout";
import Home from "./page/home/Home";
import AuthFormPage from "./page/auth-form/AuthFormPage";
import CategoryPage from "./page/categoryPage/CategoryPage";
import FIlteredPage from "./page/filteredPage/FIlteredPage";

export function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout />,
      children : [
        {
          index : true,
          element : <Home />,
        },
        {
          path : "/categories",
          element : <CategoryPage />,
        },
        {
          path : '/categories/:category',
          element : <FIlteredPage />
        },
        {
          path : "/login",
          element : <AuthFormPage login={true} />
        },
        {
          path : "/sign-up",
          element : <AuthFormPage login={false} />
        }
      ]

    }
  ])

  return <RouterProvider router={router} />
}
