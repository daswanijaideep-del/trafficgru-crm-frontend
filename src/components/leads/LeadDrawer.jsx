import { useEffect, useState } from "react";
import { updateLead } from "../../services/lead.service";

const LeadDrawer = ({
    open,
    onClose,
    lead,
    onSaved
}) => {

    const [formData, setFormData] = useState(null);

    useEffect(() => {

        if (lead) {
            setFormData(lead);
        }

    }, [lead]);

    async function handleSave() {

    try {

        await updateLead(formData._id, {

            status: formData.status,
            priority: formData.priority,
            notes: formData.notes

        });

        onSaved();

        onClose();

    }

    catch (error) {

        console.error(error);

        alert("Failed to update lead.");

    }

}

    if (!open || !formData) return null;

    return (

        <div className="fixed inset-0 z-50 flex">

            {/* Backdrop */}

            <div
                className="flex-1 bg-black/40"
                onClick={onClose}
            />

            {/* Drawer */}

            <div className="w-[500px] bg-white shadow-xl overflow-y-auto flex flex-col">

                {/* Header */}

                <div className="flex items-center justify-between border-b p-5">

                    <h2 className="text-xl font-bold">
                        Lead Details
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl"
                    >
                        ×
                    </button>

                </div>

                {/* Body */}

                <div className="flex-1 space-y-6 p-6">

                    <div>
                        <label className="font-semibold">
                            Lead Number
                        </label>
                        <p>{formData.leadNumber}</p>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Name
                        </label>
                        <p>{formData.name}</p>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Company
                        </label>
                        <p>{formData.company || "-"}</p>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Email
                        </label>
                        <p>{formData.email}</p>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Phone
                        </label>
                        <p>
                            {formData.countryCode} {formData.phone}
                        </p>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Message
                        </label>
                        <p className="whitespace-pre-wrap">
                            {formData.message || "-"}
                        </p>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Status
                        </label>

                        <select
                            value={formData.status}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    status: e.target.value
                                })
                            }
                            className="mt-2 w-full rounded border p-2"
                        >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Qualified">Qualified</option>
                            <option value="Proposal Sent">Proposal Sent</option>
                            <option value="Won">Won</option>
                            <option value="Lost">Lost</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Priority
                        </label>

                        <select
                            value={formData.priority}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    priority: e.target.value
                                })
                            }
                            className="mt-2 w-full rounded border p-2"
                        >
                            <option value="Low">Low</option>
                            <option value="Normal">Normal</option>
                            <option value="High">High</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold">
                            Internal Notes
                        </label>

                        <textarea
                            rows={5}
                            value={formData.notes || ""}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    notes: e.target.value
                                })
                            }
                            className="mt-2 w-full rounded border p-3"
                        />
                    </div>

                </div>

                {/* Footer */}

                <div className="border-t p-6">

                    <button
    onClick={handleSave}
    className="w-full rounded bg-black py-3 text-white"
>
    Save Changes
</button>

                </div>

            </div>

        </div>

    );

};

export default LeadDrawer;