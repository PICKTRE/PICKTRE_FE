import googleProfile from "../../service/googleProfile";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RedirectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOAuthGoogle = async () => {
        try {
            // 카카오로부터 받아온 code를 서버에 전달하여 카카오로 회원가입 & 로그인한다
            const response = await googleProfile();
            const data = response.data; // 응답 데이터
            alert("로그인 성공: " + data)
            navigate("/home");
        } catch (error) {
            alert("로그인 실패");
            navigate("/");
        }
    };


    useEffect(() => {
       handleOAuthGoogle();
    }, [location]);

    return (
        <></>
    )
}

export default RedirectPage;