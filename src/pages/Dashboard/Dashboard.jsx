import StatsCard from "../../components/dashboard/StatsCard";
import useDashboard from "../../hooks/useDashboard";
import RecentLeadsTable from "../../components/dashboard/RecentLeadsTable";
const Dashboard = () => {

    const {
        dashboard,
        loading,
        error
    } = useDashboard();

    if (loading) {

        return <p>Loading...</p>;

    }

    if (error) {

        return <p>Something went wrong.</p>;

    }

    return (

        <div>

            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <StatsCard
                    title="Total Leads"
                    value={dashboard.totalLeads}
                />

                <StatsCard
                    title="Today's Leads"
                    value={dashboard.todayLeads}
                />

                <StatsCard
                    title="New Leads"
                    value={dashboard.newLeads}
                />

                <StatsCard
                    title="Proposal Sent"
                    value={dashboard.proposalSent}
                />

            </div>
            <RecentLeadsTable

    leads={dashboard.recentLeads}

/>

        </div>

    );

};

export default Dashboard;