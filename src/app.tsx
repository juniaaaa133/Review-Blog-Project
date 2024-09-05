import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Blog from "./components/blog/Blog";
import Layout from "./components/router-layout/Layout";
import Home from "./page/home/Home";
import AuthFormPage from "./page/auth-form/AuthFormPage";
import CategoryPage from "./page/categoryPage/CategoryPage";
import FIlteredPage from "./page/filteredPage/FIlteredPage";
import BlogDetail from "./page/blog-detail/BlogDetail";
import UserPage from "./page/admin/users/UserPage";
import CreateBlogPage from "./page/admin/products/CreateBlogPage";
import UserDetail from "./page/admin/user-detail/UserDetail";

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
          path: "/:id",
          element : <BlogDetail />
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
        },
        {
          path : "/admin",
          children : [
            {
              path : "/admin/create-blog",
              element : <CreateBlogPage />,
            },
            {
              path : "/admin/users",
              element : <UserPage />,
            },
            {
              path : "/admin/users/:id",
              element : <UserDetail />,
            },
          ]
        },
      ]

    }
  ])

  return <RouterProvider router={router} />
}
