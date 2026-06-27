import { useEffect, useState } from "react";
import { getLeadById } from "../../services/lead.service";
import LeadDrawer from "../../components/leads/LeadDrawer";

import { getLeads } from "../../services/lead.service";
import LeadsTable from "../../components/leads/LeadsTable";

const Leads = () => {

    const [leads, setLeads] = useState([]);

    const [pagination, setPagination] = useState({});

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
const [status, setStatus] = useState("");
const [selectedLead, setSelectedLead] = useState(null);
const [drawerOpen, setDrawerOpen] = useState(false);

async function openLead(id) {

    try {

        const response = await getLeadById(id);

        setSelectedLead(response.data);

        setDrawerOpen(true);

    }

    catch (error) {

        console.error(error);

    }

}


    async function loadLeads() {

        try {

            const response = await getLeads({
    page,
    search,
    status
});

            setLeads(response.data.leads);

            setPagination(response.data.pagination);

        }

        catch (error) {

            console.log(error);

        }

    }

    useEffect(() => {

    const timer = setTimeout(() => {

        loadLeads();

    }, 300);

    return () => clearTimeout(timer);

}, [page, search, status]);

    useEffect(() => {

    const timer = setTimeout(() => {

        loadLeads();

    }, 300);

    return () => clearTimeout(timer);

}, [search]);

    return (

        <div>

            <h1 className="text-3xl font-bold">

                Leads

            </h1>

            <p className="mt-2 text-gray-500">

                Total Records : {pagination.totalRecords || 0}
                

            </p>
            <div className="my-6 flex gap-4">

    <input
        type="text"
        placeholder="Search by Lead No, Name, Company, Email or Phone..."
        value={search}
        onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
        }}
        className="flex-1 rounded-lg border p-3"
    />

    <select
        value={status}
        onChange={(e) => {
            setPage(1);
            setStatus(e.target.value);
        }}
        className="rounded-lg border p-3"
    >
        <option value="">All Status</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Proposal Sent">Proposal Sent</option>
        <option value="Won">Won</option>
        <option value="Lost">Lost</option>
    </select>

</div>
            <div className="my-6">

</div>
            <>
    <LeadsTable
        leads={leads}
        onView={openLead}
    />

    <LeadDrawer
    open={drawerOpen}
    lead={selectedLead}
    onClose={() => setDrawerOpen(false)}
    onSaved={loadLeads}
/>
</>

        </div>

    );

};

export default Leads;