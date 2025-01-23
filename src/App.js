import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";

function App() {
  const routeDefinitions = createRoutesFromElements(
    <Route>
      <Route path= "/" element={<HomePage />} />
      <Route path= "/products" element={<ProductPage />} />
    </Route>
  );

  const router = createBrowserRouter(routeDefinitions);

  // const router = createBrowserRouter([
  //   { path: '/', element: <HomePage /> },
  //   { path: '/products', element: <ProductPage />},
  // ]);

  return <RouterProvider router={router} />;
}

export default App;
