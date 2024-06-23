import { createBrowserRouter } from "react-router-dom";
import TableStudent from "../pages/Student/Student";
import AddStudent from "../pages/AddStudent/FormStudent";
import InfoStudent from "../pages/InfoStudent/InfoStudent";


const router = createBrowserRouter([
    {
        path: "/",
        element: <TableStudent />,
    },
    {
        path: "/añadirEstudiante",
        element: <AddStudent />,
    }, {
        path: "/editarEstudiante/:id",
        element: <AddStudent />,
    },
    {
        path: "/infoStudent",
        element: <InfoStudent/>
    },
]);

export default router