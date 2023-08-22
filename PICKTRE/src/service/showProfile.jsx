import axios from "axios";
import { BASE_URL } from "../constants/url";

const showProfile = async ( ) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/members/3`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${localStorage.getItem("token")}`,
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