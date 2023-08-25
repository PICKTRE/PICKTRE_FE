import axios from "axios";
import { BASE_URL } from "../constants/url";
// import googleProfile from "./googleProfile";

const showProfile = async () => {
  try {
    // const data = await googleProfile();
    // const msrl = data.data.memberId;
    const response = await axios.get(
      `${BASE_URL}/members/1`
      // {
      //     headers: {
      //         Authorization: `Bearer ${localStorage.getItem("memberId")}`,
      //     },
      // }
    );

    //alert("방 생성 완료");

    return response.data;
  } catch (error) {
    console.error(error);
    alert(error.response.data);
    throw new Error(error.response.data.message);
  }
};

export default showProfile;
