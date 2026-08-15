import React, { lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";

//Makes the component lazy component.So it will be loaded only when it is required.
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    //Header only shows Vimal name as context.All the other components use the "Akil" as the context.This is how we can separately consume context and rewrite the context's value.
    <UserContext.Provider value={{ loggedInUser: "Akil" }}>
      <div className="app">
        {/* We can use Contexts in specific components also.We just need to wrap the components with the "contextName.Provider",all the outside components will use the default context. */}
        <UserContext.Provider value={{ loggedInUser: "Vimal" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          //While the component's JS code is downloading,browser shows the "Loading..." message till then.
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
