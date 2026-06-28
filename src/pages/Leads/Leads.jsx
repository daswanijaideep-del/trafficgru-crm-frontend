import { useEffect, useState } from "react";

import {
    getLeads,
    getLeadById
} from "../../services/lead.service";

import LeadsTable from "../../components/leads/LeadsTable";
import LeadDrawer from "../../components/leads/LeadDrawer";

const Leads = () => {

    const [leads, setLeads] = useState([]);
    const [pagination, setPagination] = useState({});

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");

    const [selectedLead, setSelectedLead] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

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

            console.error(error);

        }

    }

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

    useEffect(() => {

        const timer = setTimeout(() => {

            loadLeads();

        }, 300);

        return () => clearTimeout(timer);

    }, [page, search, status]);

    return (

        <div>

            <h1 className="text-3xl font-bold">

                Leads

            </h1>

            <p className="mt-2 text-gray-500">

                Showing Page {pagination.page || 1} of {pagination.totalPages || 1}

                {" • "}

                Total Leads : {pagination.totalRecords || 0}

            </p>

            {/* Filters */}

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
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="Won">Won</option>
                    <option value="Lost">Lost</option>

                </select>

            </div>

            {/* Table */}

            <LeadsTable

                leads={leads}

                onView={openLead}

            />

            {/* Pagination */}

            {

                pagination.totalPages > 1 && (

                    <div className="mt-6 flex items-center justify-between">

                        <button

                            disabled={page === 1}

                            onClick={() => setPage((prev) => prev - 1)}

                            className="rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"

                        >

                            ← Previous

                        </button>

                        <span className="font-medium">

                            Page {pagination.page} of {pagination.totalPages}

                        </span>

                        <button

                            disabled={page === pagination.totalPages}

                            onClick={() => setPage((prev) => prev + 1)}

                            className="rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"

                        >

                            Next →

                        </button>

                    </div>

                )

            }

            {/* Drawer */}

            <LeadDrawer

                open={drawerOpen}

                lead={selectedLead}

                onClose={() => setDrawerOpen(false)}

                onSaved={loadLeads}

            />

        </div>

    );

};

export default Leads;