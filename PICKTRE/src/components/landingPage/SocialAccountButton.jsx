import classes from "./SocialAccountButton.module.css";
import Kakaotalk from "../../assets/kakaotalk.png";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import googleProfile from "../../service/googleProfile";
import { useNavigate } from "react-router-dom";

const SocialAccountButton = () => {
  const navigate = useNavigate();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleClick = async () => {
    try {
      const profileData = await googleProfile(); // googleProfile 함수를 호출하여 memberId 값을 가져옴
      // setIsLoggedIn(true); // 로그인 상태를 true로 설정
      // localStorage.setItem("memberId", profileData.data.memberId); // memberId 값을 localStorage에 저장
      console.log(profileData.memberId);
      navigate("/home"); // home 페이지로 이동
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Link to="/home">
        <div className={classes.buttonKakao}>
          <img
            src={Kakaotalk}
            alt="kakaotalk_logos"
            className={classes.kakaoLogo}
          />
        </div>
      </Link>
      <Link to="/home">
        <div className={classes.buttonNaver}>
          <SiNaver className={classes.naverLogo} size="22px" />
        </div>
      </Link>
      <Link to="/home">
        <div className={classes.buttonFacebook}>
          <RiFacebookFill className={classes.facebookLogo} size="32px" />
        </div>
      </Link>
      <div className={classes.buttonGoogle} onClick={handleGoogleClick}>
        <FcGoogle size="30px" />
      </div>
    </>
  );
};

export default SocialAccountButton;
