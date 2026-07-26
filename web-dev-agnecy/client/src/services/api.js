const API_ORIGIN = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const API_URL = `${API_ORIGIN}/api`;

export const readJson = async (response) => {
    const text = await response.text();

    if (!text) {
        return {};
    }

    try {
        return JSON.parse(text);
    } catch {
        return {};
    }
};

export const getErrorMessage = (data, fallback) => {
    return data?.message || fallback;
};
