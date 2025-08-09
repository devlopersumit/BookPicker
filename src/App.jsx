import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Components/MainLayout";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Search from "./Pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories", element: <Categories /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
