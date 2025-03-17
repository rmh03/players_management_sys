import axios from "axios";

const API_URL = "http://localhost:5000/api/players";

export const fetchPlayers = async () => {
  try {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role"); // Get role from local storage

    const response = await axios.get(API_URL, {
      headers: { 
        Authorization: `Bearer ${token}`,
        "X-User-Role": role // Send role in request headers
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};
