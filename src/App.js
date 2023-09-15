import {
  Outlet,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/home/Navbar";
import TopHeader from "./components/home/TopHeader";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import SignUp from "./components/auth/SignUp";
import MenuOptions from "./components/home/MenuOptions";
import { lazy, Suspense } from "react";

const LogIn = lazy(() => import("./components/auth/LogIn"));
const Contact = lazy(() => import("./components/Contact"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Membership = lazy(() => import("./components/memebership/Membership"));
const ServiceTab = lazy(() => import("./components/Services/ServiceTab"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));

const LazyComponent = (Component) => {
  console.log("here");
  return (
    <Suspense
      fallback={
        <div>
          <h1 className="text-8xl">loading</h1>
        </div>
      }
    >
      {Component}
    </Suspense>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // This is the default route for the parent component
        element: <Home />,
      },
      {
        path: "login",
        element: LazyComponent(<LogIn />),
      },
      {
        path: "signup",
        element: LazyComponent(<SignUp />),
      },
      {
        path: "contact",
        element: LazyComponent(<Contact />),
      },
      {
        path: "aboutus",
        element: LazyComponent(<AboutUs />),
      },
      {
        path: "membership",
        element: LazyComponent(<Membership />),
      },
      {
        path: "services",
        element: LazyComponent(<ServiceTab />),
      },
      {
        path: "gallery",
        element: LazyComponent(<Gallery />),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <MenuOptions />

      {/* Use Outlet to render child routes */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default function MainApp() {
  return (
    <RouterProvider router={appRouter}>
      <Router />
    </RouterProvider>
  );
}
