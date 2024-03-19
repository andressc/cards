import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { CheckEmail } from '@/pages/auth/checkEmail'
import { CreateNewPassword } from '@/pages/auth/createNewPassword'
import { ForgotPassword } from '@/pages/auth/forgotPassword'
import { SignIn } from '@/pages/auth/signIn'
import { SignUp } from '@/pages/auth/signUp'
import { DecksPage } from '@/pages/decks/decksPage/decksPage'

export const pathRoutes = {
  checkEmail: '/check-email',
  createNewPassword: '/create-new-password',
  forgotPassword: '/forgot-password',
  home: '/',
  login: '/login',
  registration: '/registration',
}

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: pathRoutes.login,
  },
  {
    element: <SignUp />,
    path: pathRoutes.registration,
  },
  {
    element: <ForgotPassword />,
    path: pathRoutes.forgotPassword,
  },
  {
    element: <CheckEmail />,
    path: pathRoutes.checkEmail,
  },
  {
    element: <CreateNewPassword />,
    path: pathRoutes.createNewPassword,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: pathRoutes.home,
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
