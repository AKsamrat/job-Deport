


import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/LoginPage";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import AllJobs from "../pages/AllJobs/AllJobs";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>
      },
      {
        path: 'allJobs',
        element: <AllJobs></AllJobs>
      },

    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/register',
    element: <Register />,
  },
])

export default router;