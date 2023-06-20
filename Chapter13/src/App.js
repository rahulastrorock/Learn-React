// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's Get Hooked

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux"; //this is used to provide the store to the app
import store from "./utils/store"; //this is the store

//lazy loading the instamart component
const Instamart = lazy(() => import("./components/Instamart")); // here import is promise based so we can use lazy loading

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  const [user, setUser] = React.useState({
    name: "Rahul Singh",
    email: "rahul@gmail.com",
  });

  return (
    <React.Fragment>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }} //this value is overriding the value of userContext.Provider in Body.js
          // this will print Rahul Singh in all the header outlet and Footer component instead of
          // astrorock
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Body
          // user={{
          //   name: "astrorock",
          //   age: 25,
          // }}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          //fallback is used to show shimmer effect while loading the component
          <Suspense fallback={<Shimmer />}>
            <Instamart />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />, //here we are calling the cart component but don't know why <cart/> is not working
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
