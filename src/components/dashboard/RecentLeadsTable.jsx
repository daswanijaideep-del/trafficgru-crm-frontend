const RecentLeadsTable = ({ leads }) => {

    return (

        <div className="mt-10 rounded-xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b p-5">

                <h2 className="text-xl font-semibold">

                    Recent Leads

                </h2>

                <button className="rounded-lg bg-black px-4 py-2 text-white">

                    View All

                </button>

            </div>

            <table className="w-full">

                <thead className="bg-gray-50">

                    <tr>

                        <th className="p-4 text-left">
                            Lead No
                        </th>

                        <th className="p-4 text-left">
                            Name
                        </th>

                        <th className="p-4 text-left">
                            Company
                        </th>

                        <th className="p-4 text-left">
                            Status
                        </th>

                        <th className="p-4 text-left">
                            Created
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        leads.map((lead) => (

                            <tr
                                key={lead._id}
                                className="border-t hover:bg-gray-50"
                            >

                                <td className="p-4">

                                    {lead.leadNumber}

                                </td>

                                <td className="p-4">

                                    {lead.name}

                                </td>

                                <td className="p-4">

                                    {lead.company}

                                </td>

                                <td className="p-4">

                                    <span className="rounded bg-blue-100 px-3 py-1 text-sm">

                                        {lead.status}

                                    </span>

                                </td>

                                <td className="p-4">

                                    {new Date(lead.createdAt).toLocaleDateString()}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default RecentLeadsTable;