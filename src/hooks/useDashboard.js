import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboard.service";

export default function useDashboard() {
    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchDashboard() {

            try {

                const response = await getDashboard();

                setDashboard(response.data);

            } catch (err) {

                setError(err);

            } finally {

                setLoading(false);

            }

        }

        fetchDashboard();

    }, []);

    return {
        dashboard,
        loading,
        error
    };
}