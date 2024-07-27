import {   createBrowserRouter  } from "react-router-dom";
import App from './App.jsx';
import Resturents from "./component/resturent/Resturents.jsx";
import Home from "./component/home/Home.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/resturents/detail/:id",
      element: <Resturents />,
    },
  ]);



export default router