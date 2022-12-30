import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import Addtask from "../../AddTask/Addtask";
import Error from "../../Error/Error";
import Home from "../../Home/Home";
import MyTask from "../../MyTask/MyTask";
import ComplpletedTask from "../../CompletedTask/CompletedTask";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
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
                element:<Private><Addtask></Addtask></Private>
            },
            {
                path: "/my-tasks/:email",
                loader: async ({ params }) => {
                    // console.log(params);
                    return fetch(
                      `https://taskey-server-lyart.vercel.app/my-task/${params.email}`
                    );
                  },
                element:<MyTask></MyTask>
            },
            {
                path: "/completed-task",
                element:<ComplpletedTask></ComplpletedTask>
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