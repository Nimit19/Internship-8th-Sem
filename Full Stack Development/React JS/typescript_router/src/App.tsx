import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { RootLayout } from "./Pages/RootLayout";
import Error from "./Pages/Error";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement:<Error/>, 
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Product /> },
        { path: "/products/:productId", element: <ProductDetailsPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
