import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
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
        }
    ]
    }
  ]);
  
  export default router;