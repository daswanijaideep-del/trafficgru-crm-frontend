import { useEffect, useState } from "react";
import { updateLead } from "../../services/lead.service";

const LeadDrawer = ({
    open,
    onClose,
    lead,
    onSaved
}) => {

    const [formData, setFormData] = useState(null);

    const [activeTab, setActiveTab] = useState("information");

    const [saving, setSaving] = useState(false);

    useEffect(() => {

        if (lead) {

            setFormData(lead);

        }

    }, [lead]);

    if (!open || !formData) return null;

    async function handleSave() {

        try {

            setSaving(true);

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

        finally {

            setSaving(false);

        }

    }

    return (

        <div className="fixed inset-0 z-50 flex">

            <div
                className="flex-1 bg-black/40"
                onClick={onClose}
            />

            <div className="w-[620px] bg-white shadow-xl overflow-y-auto flex flex-col">

                <div className="border-b p-6">

                    <div className="flex items-center justify-between">

                        <h2 className="text-2xl font-bold">

                            Lead Details

                        </h2>

                        <button

                            onClick={onClose}

                            className="text-3xl"

                        >

                            ×

                        </button>

                    </div>

                    <div className="mt-6 flex gap-3">

                        <button

                            onClick={() => setActiveTab("information")}

                            className={`rounded-lg px-4 py-2 text-sm font-medium

                            ${

                                activeTab === "information"

                                    ? "bg-black text-white"

                                    : "bg-gray-100"

                            }`}

                        >

                            Information

                        </button>

                        <button

                            onClick={() => setActiveTab("marketing")}

                            className={`rounded-lg px-4 py-2 text-sm font-medium

                            ${

                                activeTab === "marketing"

                                    ? "bg-black text-white"

                                    : "bg-gray-100"

                            }`}

                        >

                            Marketing

                        </button>

                        <button

                            onClick={() => setActiveTab("notes")}

                            className={`rounded-lg px-4 py-2 text-sm font-medium

                            ${

                                activeTab === "notes"

                                    ? "bg-black text-white"

                                    : "bg-gray-100"

                            }`}

                        >

                            Notes

                        </button>

                    </div>

                </div>

                <div className="flex-1 overflow-y-auto p-6">
                
                                    {activeTab === "information" && (

                        <div className="space-y-8">

                            {/* Lead Information */}

                            <div>

                                <h3 className="mb-4 border-b pb-2 text-lg font-semibold">

                                    📋 Lead Information

                                </h3>

                                <div className="grid grid-cols-2 gap-5">

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Lead Number

                                        </label>

                                        <p className="mt-1 font-medium">

                                            {formData.leadNumber}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Received On

                                        </label>

                                        <p className="mt-1 font-medium">

                                            {new Date(formData.createdAt).toLocaleString()}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Source

                                        </label>

                                        <p className="mt-1 font-medium">

                                            {formData.source || "Website"}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

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

                                            className="mt-2 w-full rounded-lg border p-2"

                                        >

                                            <option value="New">New</option>

                                            <option value="Contacted">Contacted</option>

                                            <option value="Proposal Sent">Proposal Sent</option>

                                            <option value="Won">Won</option>

                                            <option value="Lost">Lost</option>

                                        </select>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

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

                                            className="mt-2 w-full rounded-lg border p-2"

                                        >

                                            <option value="Low">Low</option>

                                            <option value="Normal">Normal</option>

                                            <option value="High">High</option>

                                            <option value="Urgent">Urgent</option>

                                        </select>

                                    </div>

                                </div>

                            </div>

                            {/* Contact Information */}

                            <div>

                                <h3 className="mb-4 border-b pb-2 text-lg font-semibold">

                                    👤 Contact Information

                                </h3>

                                <div className="grid grid-cols-2 gap-5">

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Name

                                        </label>

                                        <p className="mt-1 font-medium">

                                            {formData.name}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Company

                                        </label>

                                        <p className="mt-1 font-medium">

                                            {formData.company || "-"}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Email

                                        </label>

                                        <p className="mt-1 font-medium break-all">

                                            {formData.email}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Phone

                                        </label>

                                        <p className="mt-1 font-medium">

                                            {formData.countryCode} {formData.phone}

                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Website Information */}

                            <div>

                                <h3 className="mb-4 border-b pb-2 text-lg font-semibold">

                                    🌐 Website Information

                                </h3>

                                <div className="space-y-5">

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Landing Page

                                        </label>

                                        <div className="mt-2 flex items-center gap-3">

                                            <p className="flex-1 break-all rounded-lg bg-gray-50 p-3">

                                                {formData.pageUrl || "-"}

                                            </p>

                                            {

                                                formData.pageUrl && (

                                                    <button

                                                        onClick={() => window.open(formData.pageUrl)}

                                                        className="rounded-lg border px-3 py-2"

                                                    >

                                                        Open

                                                    </button>

                                                )

                                            }

                                        </div>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Page Title

                                        </label>

                                        <p className="mt-2 rounded-lg bg-gray-50 p-3">

                                            {formData.pageTitle || "-"}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Referrer

                                        </label>

                                        <p className="mt-2 rounded-lg bg-gray-50 p-3 break-all">

                                            {formData.referrer || "-"}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    )}

                                        {activeTab === "marketing" && (

                        <div className="space-y-8">

                            <div>

                                <h3 className="mb-4 border-b pb-2 text-lg font-semibold">

                                    📈 Marketing Attribution

                                </h3>

                                <div className="grid grid-cols-2 gap-5">

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            UTM Source

                                        </label>

                                        <p className="mt-2 rounded-lg bg-gray-50 p-3">

                                            {formData.utmSource || "-"}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            UTM Medium

                                        </label>

                                        <p className="mt-2 rounded-lg bg-gray-50 p-3">

                                            {formData.utmMedium || "-"}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            UTM Campaign

                                        </label>

                                        <p className="mt-2 rounded-lg bg-gray-50 p-3">

                                            {formData.utmCampaign || "-"}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            UTM Term

                                        </label>

                                        <p className="mt-2 rounded-lg bg-gray-50 p-3">

                                            {formData.utmTerm || "-"}

                                        </p>

                                    </div>

                                    <div className="col-span-2">

                                        <label className="text-sm text-gray-500">

                                            UTM Content

                                        </label>

                                        <p className="mt-2 rounded-lg bg-gray-50 p-3">

                                            {formData.utmContent || "-"}

                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div>

                                <h3 className="mb-4 border-b pb-2 text-lg font-semibold">

                                    🌍 Lead Source

                                </h3>

                                <div className="grid grid-cols-2 gap-5">

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Source

                                        </label>

                                        <p className="mt-2 rounded-lg bg-gray-50 p-3">

                                            {formData.source || "Website"}

                                        </p>

                                    </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Form ID

                                        </label>

                                        <p className="mt-2 rounded-lg bg-gray-50 p-3">

                                            {formData.formId || "-"}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    )}

                                        {activeTab === "notes" && (

                        <div className="space-y-8">

                            {/* Original Message */}

                            <div>

                                <h3 className="mb-4 border-b pb-2 text-lg font-semibold">

                                    💬 Original Message

                                </h3>

                                <div className="rounded-lg border bg-gray-50 p-4 whitespace-pre-wrap">

                                    {formData.message || "No message provided."}

                                </div>

                            </div>

                            {/* Internal Notes */}

                            <div>

                                <h3 className="mb-4 border-b pb-2 text-lg font-semibold">

                                    📝 Internal Notes

                                </h3>

                                <textarea

                                    rows={8}

                                    value={formData.notes || ""}

                                    onChange={(e) =>

                                        setFormData({

                                            ...formData,

                                            notes: e.target.value

                                        })

                                    }

                                    placeholder="Add internal notes here..."

                                    className="w-full rounded-lg border p-4 focus:border-black focus:outline-none"

                                />

                            </div>

                            {/* Future Timeline */}

                            <div>

                                <h3 className="mb-4 border-b pb-2 text-lg font-semibold">

                                    📅 Activity Timeline

                                </h3>

                                <div className="rounded-lg border border-dashed bg-gray-50 p-6 text-center text-gray-500">

                                    Activity timeline will be available in a future update.

                                </div>

                            </div>

                        </div>

                    )}

                </div>

                {/* Footer */}

                <div className="border-t bg-white p-6">

                    <button

                        onClick={handleSave}

                        disabled={saving}

                        className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"

                    >

                        {

                            saving

                                ? "Saving Changes..."

                                : "Save Changes"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

};

export default LeadDrawer;