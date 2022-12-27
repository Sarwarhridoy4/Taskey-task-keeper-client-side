import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import ComingSoon from "../../Coming Soon/ComingSoon";
import Error from "../../Error/Error";
import Home from "../../Home/Home";

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
                element:<ComingSoon></ComingSoon>
            },
            {
                path: "/my-tasks",
                element:<ComingSoon></ComingSoon>
            },
            {
                path: "/completed-task",
                element:<ComingSoon></ComingSoon>
            },
    ]
    }
  ]);
  
  export default router;