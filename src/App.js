import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";

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
      element: <RootLayout />, children: [
        { path: '/', element: <HomePage /> },
        { path: '/products', element: <ProductPage />},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
