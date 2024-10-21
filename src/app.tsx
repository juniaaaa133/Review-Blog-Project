import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import {Outlet} from "react-router"
import Blog from "./components/blog/Blog";
import Layout from "./components/router-layout/Layout";
import Home from "./page/home/Home";
import AuthFormPage from "./page/auth-form/AuthFormPage";
import CategoryPage from "./page/categoryPage/CategoryPage";
import FIlteredPage from "./page/filteredPage/FIlteredPage";
import BlogDetail from "./page/blog-detail/BlogDetail";
import UserPage from "./page/admin/users/UserPage";
import CreateBlogPage from "./page/admin/products/CreateBlogPage";
import EditBlogPage from "./page/admin/products/EditBlogPage";
import VerifyUser from "./page/verify-page/VerifyUser";
import EmailSent from "./page/verify-page/EmailSent";
import UserForm from "./page/admin/user-detail/UserForm";
import AuthMiddleware from "./middleware/AuthMiddleware";

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
          path : "/account/:id",
          element : <AuthMiddleware isMounted={false}>
            <UserForm/>
          </AuthMiddleware>
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
          element : <AuthMiddleware isMounted={true}/>,
          children : [
            {
              path : "/admin/create-blog",
              element : <CreateBlogPage />,
            },
            {
              path : "/admin/blog/:id",
              element : <EditBlogPage />
            },
            {
              path : "/admin/users",
              element : <UserPage />,
            },
            {
              path : "/admin/users/:id",
              element : <UserForm  />,
            }
          ]
        },
      ]

    },
    {
      path : "/verify-user/:token",
      element : <VerifyUser />
    },
    {
      path : "/verification",
      element : <EmailSent />
    },
  ])

  return <RouterProvider router={router} />
}
