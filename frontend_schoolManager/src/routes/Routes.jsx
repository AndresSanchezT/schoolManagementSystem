import { createBrowserRouter } from "react-router-dom";
import TableStudent from "../pages/Student/Student";
import AddStudent from "../pages/AddStudent/FormStudent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TableStudent />,
    },
    {
        path: "/añadirEstudiante",
        element: <AddStudent />,
    },
]);

export default router