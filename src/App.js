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
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

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
        element: <LogIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <TopHeader />
      <Navbar />
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
