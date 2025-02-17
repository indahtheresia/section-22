import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

function App() {
  // const routeDefinitions = createRoutesFromElements(
  //   <Route>
  //     <Route path= "/" element={<HomePage />} />
  //     <Route path= "/products" element={<ProductPage />} />
  //   </Route>
  // );

  // const router = createBrowserRouter(routeDefinitions);

  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <RootLayout />, 
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> }, // path: ''
        { path: 'products', element: <ProductPage />},
        { path: 'products/:productId', element: <ProductDetailPage />},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
