import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import EventDetails from "../Pages/Home/EventDetails/EventDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/data.json")
            },
            {
                path: '/card/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
            
        ]
    }
]);
export default router;

