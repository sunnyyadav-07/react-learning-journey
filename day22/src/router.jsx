import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import axios from "axios";
import api from "./axiosInstance";
import ProductDetails from "./pages/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <Products />,
        loader: () => {
          return api.get("/products");
        },
      },
      { path: "products/:id",element:<ProductDetails/>,loader:({params})=>{
        return api.get(`/products/${params.id}`)
      } },
    ],
  },
]);
export default router;
