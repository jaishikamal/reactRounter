
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/Homepage";
import Page1 from "./pages/nested/Page1";
import Page2 from "./pages/nested/Page2";



const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
      index:true,
      element:<HomePage/>
     
        },
        {
          path: 'about-page',
          element: <About />
        },
        {
          path: 'contact-page',
          element: <Contact />
        },
      ]
    },


    {
      path: '*',
      element: <NotFound />
    },
    {
      path:'page-1',
      element:<Page1/>
    },
    {
      path:'page-2',
      element:<Page2/>
    }
  ]);
  return <RouterProvider router={router} />
}
export default App;