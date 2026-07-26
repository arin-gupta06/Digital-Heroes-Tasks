const BASE_URL = "http://localhost:5000/api";

export const createLead = async (formData) => {
    const response = await fetch(`${BASE_URL}/lead`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error("Failed to submit inquiry.");
    }

    return response.json();
};

export const getLeads = async () => {
    const response = await fetch(`${BASE_URL}/admin/lead`);

    if (!response.ok) {
        throw new Error("Failed to fetch leads.");
    }

    return response.json();
};

export const updateLead = async (id, status) => {
    const response = await fetch(`${BASE_URL}/admin/lead/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
    });

    if (!response.ok) {
        throw new Error("Failed to update lead.");
    }

    return response.json();
};