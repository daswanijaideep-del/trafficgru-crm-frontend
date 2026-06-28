import { useEffect, useState } from "react";

import {
    getArchivedLeads,
    getLeadById
} from "../../services/lead.service";

import LeadsTable from "../../components/leads/LeadsTable";
import LeadDrawer from "../../components/leads/LeadDrawer";

const ArchivedLeads = () => {

    const [leads, setLeads] = useState([]);
    const [pagination, setPagination] = useState({});

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const [selectedLead, setSelectedLead] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    async function loadLeads() {

        const response = await getArchivedLeads({
            page,
            search
        });

        console.log("Archived API:", response);
        setLeads(response.data.leads);
        setPagination(response.data.pagination);

    }

    async function openLead(id) {

        const response = await getLeadById(id);

        setSelectedLead(response.data);

        setDrawerOpen(true);

    }

    useEffect(() => {

        loadLeads();

    }, [page, search]);

    return (

        <div>

            <h1 className="text-3xl font-bold">

                Archived Leads

            </h1>

            <p className="mt-2 text-gray-500">

                Total Archived : {pagination.totalRecords || 0}

            </p>

            <div className="my-6">

                <input

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                    placeholder="Search archived leads..."

                    className="w-full rounded-lg border p-3"

                />

            </div>

            <LeadsTable

                leads={leads}

                onView={openLead}

                

            />
            <p className="text-red-600 font-bold">
    Leads Count: {leads.length}
</p>

            <LeadDrawer

                open={drawerOpen}

                lead={selectedLead}

                onClose={() => setDrawerOpen(false)}

                onSaved={loadLeads}

            />

        </div>

    );

};

export default ArchivedLeads;