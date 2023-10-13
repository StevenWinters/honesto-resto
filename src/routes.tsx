import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import MenuPage from "./pages/MenuPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import StorePage from "./pages/StorePage";
import StoryPage from "./pages/StoryPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import StatisticsPage from "./pages/StatisticsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "store",
        element: <StorePage />,
      },
      {
        path: "story",
        element: <StoryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "statistics",
        element: <StatisticsPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditionsPage />,
      },
    ],
  },
]);

export default router;
