const LeadsTable = ({ leads, onView }) => {

    return (

        <div className="mt-8 overflow-hidden rounded-xl border bg-white shadow-sm">

            <table className="w-full">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="p-4 text-left">Lead No</th>

                        <th className="p-4 text-left">Name</th>

                        <th className="p-4 text-left">Company</th>

                        <th className="p-4 text-left">Email</th>

                        <th className="p-4 text-left">Phone</th>

                        <th className="p-4 text-left">Status</th>

                        <th className="p-4 text-center">Action</th>

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

                                    {lead.email}

                                </td>

                                <td className="p-4">

                                    {lead.countryCode} {lead.phone}

                                </td>

                                <td className="p-4">

                                    <span className="rounded bg-blue-100 px-3 py-1">

                                        {lead.status}

                                    </span>

                                </td>

                                <td className="p-4 text-center">

                                    <button
                                        onClick={() => onView(lead._id)}
                                        className="rounded bg-black px-4 py-2 text-white cursor-pointer"
                                    >
                                        View
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default LeadsTable;