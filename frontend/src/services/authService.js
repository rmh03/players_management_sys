import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Change to your backend auth endpoint

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Returns token & user info
  } catch (error) {
    throw error.response ? error.response.data : "Server error";
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
