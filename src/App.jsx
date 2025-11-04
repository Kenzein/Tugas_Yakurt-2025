import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import SuccessPage from "./pages/SuccessPage .jsx";
import MovieList from "./pages/MovieList.jsx";
import Welcome from "./pages/Welcome.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Welcome></Welcome>
      </>
    ),
  },

  {
    path: "/movies",
    element: (
      <>
        <Navbar />
        <MovieList />
      </>
    ),
  },
  {
    path: "/movies/:id",
    element: (
      <>
        <Navbar />
        <MovieDetail />
      </>
    ),
  },
  {
    path: "/movies/:id/payment",
    element: (
      <>
        <PaymentPage></PaymentPage>
      </>
    ),
  },
  {
    path: "/success",
    element: (
      <>
        <SuccessPage></SuccessPage>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login></Login>
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Signup></Signup>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <NotFound></NotFound>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
