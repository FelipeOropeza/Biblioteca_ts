import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import DetalhesLivro from "../pages/DetalhesLivro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "livro/:id", element: <DetalhesLivro /> },
    ],
  },
]);

export default router;
