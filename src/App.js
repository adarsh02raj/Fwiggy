import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import "/src/App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import Search from "./components/Search";
import Cart from "./components/Cart";

//Lazy Loading
//Code Splitting
//Dynamic Budling
//Chunking
//On Demand Loading

const Offers = lazy(() => import("./components/Offers"));

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
        path: "/restaurant/:resId",
        element: <ResMenu />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Offers />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
