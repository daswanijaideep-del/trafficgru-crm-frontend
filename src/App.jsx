import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import Leads from "./pages/Leads/Leads";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

    const { user } = useAuth();

    return (

        <BrowserRouter>

            <Routes>

    <Route
        path="/"
        element={
            user
                ? <Navigate to="/dashboard" replace />
                : <Navigate to="/login" replace />
        }
    />

    <Route
        path="/login"
        element={<Login />}
    />
    <Route

    path="/leads"

    element={<Leads />}

/>

    <Route
        element={
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>
        }
    >

        <Route
            path="/dashboard"
            element={<Dashboard />}
        />

    </Route>

</Routes>

        </BrowserRouter>

    );

}

export default App;