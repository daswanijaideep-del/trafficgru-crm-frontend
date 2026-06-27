import api from "./api";

export async function getLeads({
    page = 1,
    search = "",
    status = ""
}) {

    const response = await api.get("/admin/leads", {
        params: {
            page,
            search,
            status
        }
    });

    return response.data;

}

export async function getLeadById(id) {

    const response = await api.get(`/admin/leads/${id}`);

    return response.data;

}

export async function updateLead(id, data) {

    const response = await api.patch(
        `/admin/leads/${id}`,
        data
    );

    return response.data;

}