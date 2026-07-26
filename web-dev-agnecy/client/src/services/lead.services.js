import { API_URL, getErrorMessage, readJson } from "./api";

export const createLead = async (formData) => {
    const response = await fetch(`${API_URL}/lead`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const data = await readJson(response);

    if (!response.ok) {
        throw new Error(getErrorMessage(data, "Failed to submit inquiry."));
    }

    return data;
};

export const getLeads = async () => {
    const response = await fetch(`${API_URL}/admin/lead`, {
        credentials: "include",
    });

    const data = await readJson(response);

    if (!response.ok) {
        throw new Error(getErrorMessage(data, "Failed to fetch leads."));
    }

    return data;
};

export const updateLead = async (id, status) => {
    const response = await fetch(`${API_URL}/admin/lead/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ status }),
    });

    const data = await readJson(response);

    if (!response.ok) {
        throw new Error(getErrorMessage(data, "Failed to update lead."));
    }

    return data;
};
