import classes from "./SocialAccountButton.module.css";
import Kakaotalk from "../../assets/kakaotalk.png";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import googleProfile from "../../service/googleProfile";
import { useNavigate } from "react-router-dom";

const SocialAccountButton = () => {
  const navigate = useNavigate();
  
  const handleGoogleClick = async () => {
    window.location.href="https://www.pick-tre.com/api/google"
    try {
      const profileData = await googleProfile();
      // 여기서 페이지 리다이렉션 또는 다른 작업을 수행할 수 있습니다.
      console.log("Profile data:", profileData);
      navigate("/home");
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
