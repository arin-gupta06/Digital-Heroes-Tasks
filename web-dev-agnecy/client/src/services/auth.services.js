import { API_URL, getErrorMessage, readJson } from "./api";

const BASE_URL = `${API_URL}/admin`;

export const loginAdmin = async (credentials) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
    });

    const data = await readJson(response);

    if (!response.ok) {
        throw new Error(getErrorMessage(data, "Failed to login."));
    }

    return data;
};

export const logoutAdmin = async () => {
    const response = await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        credentials: "include",
    });

    const data = await readJson(response);

    if (!response.ok) {
        throw new Error(getErrorMessage(data, "Failed to logout."));
    }

    return data;
};
