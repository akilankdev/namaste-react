import React, { lazy, Suspense, useContext,useState,useEffect } from "react";
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
  const [userName,setUserName] = useState("Akilan");
  
  return (
    //Inorder to modify the userName in BODY component,we need to pass the setUserName() as context to let BODY component use it to modify the context data.
    <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
      <div className="app">
          <Header />
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
