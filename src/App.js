import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavLayout from "./Layouts/NavLayout";
import HomePage from "./Pages/HomePage";
import MovieLayout from "./Layouts/MovieLayout";
import MovieListPage from "./Pages/MovieListPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavLayout />,
      children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/movies",
        element: <MovieLayout />,
        children: [
          {
            index: true,
            element: <MovieListPage />
          }
        ]
      }
      ]
    }
  ])
	return (
		<div className="App-header">
      <RouterProvider router={router} />
		</div>
	);
}

export default App;
