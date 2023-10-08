import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import EventDetails from "../Pages/Home/EventDetails/EventDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorElement from "../ErrorElement/ErrorElement";
import MoreReview from "../Review/MoreReview";
import MoreTeam from "../Team/MoreTeam";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/data.json")
            },
            {
                path: '/card/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: ()=> fetch("/data.json")    

            },
            {
                path: '/reviewMore',
                element: <PrivateRoute><MoreReview></MoreReview></PrivateRoute>,
            },
            {
                path: '/instructorMore',
                element: <PrivateRoute><MoreTeam></MoreTeam></PrivateRoute>,
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

