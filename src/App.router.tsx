import { Navigate, RouteObject, useRoutes } from "react-router-dom";

// app
import App from "./App";
import PokedexPage from "./pages/PokedexPage";

const routes: RouteObject[] = [
  {
    element: <App />,
    path: "/",
    children: [
      { element: <Navigate to="/" />, path: "*" },
      {
        element: <PokedexPage title="Pokedex Page" />,
        path: "/",
      },
    ],
  },
];

function AppRouter() {
  const element = useRoutes(routes);

  return element;
}

export default AppRouter;
