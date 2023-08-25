import axios from "axios";
import { BASE_URL } from "../constants/url";

const showProfile = async () => {
    try {
        const msrl = localStorage.getItem('memberId');
        const response = await axios.get(
            `${BASE_URL}/members/${msrl}`,
            //   {
            //       headers: {
            //           Authorization: `Bearer ${localStorage.getItem("memberId")}`,
            //       },
            //   }
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
