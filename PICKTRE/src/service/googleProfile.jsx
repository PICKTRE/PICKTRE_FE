import axios from "axios";
import { BASE_URL } from "../constants/url";

const googleProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/google`, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
    });
    // localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error(error);
    alert(error.response.data);
    throw new Error(error.response.data.message);
  }
};

export default googleProfile;
