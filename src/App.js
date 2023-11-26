import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../src/App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Offers from "./components/Offers";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: '/restaurant/:resId',
        element: <ResMenu/>
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/offers',
        element: <Offers />
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);