import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import Addtask from "../../AddTask/Addtask";
import Error from "../../Error/Error";
import Home from "../../Home/Home";
import MyTask from "../../MyTask/MyTask";
// import ComplpletedTask from "../../CompletedTask/CompletedTask";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import Loading from "../../Loading/Loading";
import Private from "../Private/Private";
const router = createBrowserRouter([
    {
        path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/add-a-task",
                element:<Addtask></Addtask>
            },
            {
                path: "/my-tasks",
                element:<Private><MyTask></MyTask></Private>
            },
            {
                path: "/completed-task",
                element:<Loading></Loading>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/signup",
                element:<SignUp></SignUp>
            },
    ]
    }
  ]);
  
  export default router;