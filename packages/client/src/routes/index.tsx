import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFoundErrorPage from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundErrorPage />,
  },
  {
    path: "/test",
    element: <div>Tesing route</div>,
  },
]);

export default router;
