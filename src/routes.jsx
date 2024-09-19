import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import AboutUs from "./Views/AboutUs/AboutUs";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
  ]);
  return element;
}
