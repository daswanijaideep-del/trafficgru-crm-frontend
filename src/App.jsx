import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Leads from "./pages/Leads/Leads";
import ArchivedLeads from "./pages/ArchivedLeads/ArchivedLeads";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

    const { user } = useAuth();

    return (

        <BrowserRouter>

            <Routes>

                {/* Root Route */}

                <Route
                    path="/"
                    element={
                        user
                            ? <Navigate to="/dashboard" replace />
                            : <Navigate to="/login" replace />
                    }
                />

                {/* Login */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* Protected Routes */}

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

                    <Route
                        path="/leads"
                        element={<Leads />}
                    />
                    <Route

                        path="/archived"

                        element={<ArchivedLeads />}

                    />

                    {/* Future Pages */}

                    {/*

                    <Route
                        path="/archived"
                        element={<ArchivedLeads />}
                    />

                    <Route
                        path="/proposals"
                        element={<Proposals />}
                    />

                    <Route
                        path="/settings"
                        element={<Settings />}
                    />

                    */}

                </Route>

                {/* 404 */}

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;