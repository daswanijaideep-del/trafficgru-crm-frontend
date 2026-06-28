const LeadsTable = ({

    leads,
    onView,
    archived = false,
    onRestore
}) => {
    console.log({
    archived,
    onRestore,
    leads
});

    return (
        

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            <table className="min-w-full">

                <thead className="border-b bg-gray-50">

                    <tr>

                        <th className="w-36 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                            #
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Name
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Company
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Email
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Phone
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Status
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Priority
                        </th>

                        <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        leads.length > 0 ? (

                            leads.map((lead) => (

                                <tr
                                    key={lead._id}
                                    className="border-b last:border-b-0 hover:bg-gray-50 transition"
                                >

                                    <td className="px-6 py-4 font-medium text-gray-700">

                                        {lead.leadNumber}

                                    </td>

                                    <td className="px-6 py-4">

                                        <div className="font-medium">

                                            {lead.name}

                                        </div>

                                    </td>

                                    <td className="px-6 py-4 text-gray-600">

                                        {lead.company || "-"}

                                    </td>

                                    <td className="px-6 py-4 text-gray-600">

                                        {lead.email}

                                    </td>

                                    <td className="px-6 py-4 text-gray-600">

                                        {lead.countryCode} {lead.phone}

                                    </td>

                                    <td className="px-6 py-4">

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold

                                            ${

                                                lead.status === "New"

                                                    ? "bg-blue-100 text-blue-700"

                                                : lead.status === "Contacted"

                                                    ? "bg-yellow-100 text-yellow-700"

                                                : lead.status === "Proposal Sent"

                                                    ? "bg-orange-100 text-orange-700"

                                                : lead.status === "Won"

                                                    ? "bg-green-100 text-green-700"

                                                : "bg-red-100 text-red-700"

                                            }`}
                                        >

                                            {lead.status}

                                        </span>

                                    </td>

                                    <td className="px-6 py-4">

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold

                                            ${

                                                lead.priority === "Urgent"

                                                    ? "bg-red-100 text-red-700"

                                                : lead.priority === "High"

                                                    ? "bg-orange-100 text-orange-700"

                                                : lead.priority === "Normal"

                                                    ? "bg-blue-100 text-blue-700"

                                                : "bg-green-100 text-green-700"

                                            }`}
                                        >

                                            {lead.priority}

                                        </span>

                                    </td>

                                    <td className="p-4 text-center">

    <div className="flex justify-center gap-2">

        <button
            onClick={() => onView(lead._id)}
            className="rounded bg-black px-4 py-2 text-white"
        >
            View
        </button>

        {

            archived && (

                <button
                    onClick={() => onRestore(lead._id)}
                    className="rounded bg-green-600 px-4 py-2 text-white"
                >
                    Restore
                </button>

            )

        }

    </div>

</td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="8"
                                    className="py-12 text-center text-gray-500"
                                >

                                    No leads found.

                                </td>

                            </tr>

                        )

                    }

                </tbody>

            </table>

        </div>

    );

};

export default LeadsTable;