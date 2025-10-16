import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import PaymentPage from "./components/PaymentPage.jsx";
import SuccessPage from "./components/SuccessPage .jsx";
import MovieList from "./pages/MovieList.jsx";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
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
