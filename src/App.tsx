import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogSingle } from "./features/blog-feature";
import Layout from "./layouts";
import {
  AboutUs,
  Blog,
  Contact,
  Error,
  Faq,
  Home,
  Login,
  Portfolio,
  Pricing,
  Services,
  Signup,
  Team,
  Testimonials,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/faqs",
        element: <Faq />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/blog-single",
        element: <BlogSingle />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
