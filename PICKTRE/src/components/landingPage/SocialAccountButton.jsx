import classes from "./SocialAccountButton.module.css";
import Kakaotalk from "../../assets/kakaotalk.png";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";

const SocialAccountButton = () => {
  // const navigate = useNavigate();

  const onClickGoogleLogin = () => {
    window.location.href ="http://picktre.duckdns.org:8080/api/google"
  }

  return (
    <>
      <div className={classes.buttonKakao}>
        <img
          src={Kakaotalk}
          alt="kakaotalk_logo"
          className={classes.kakaoLogo}
        />
      </div>
      <div className={classes.buttonNaver}>
        <SiNaver className={classes.naverLogo} size="22px" />
      </div>
      <div className={classes.buttonFacebook}>
        <RiFacebookFill className={classes.facebookLogo} size="32px" />
      </div>
      <Link to="/home">
        <div className={classes.buttonGoogle} onClick={onClickGoogleLogin}>
          <FcGoogle size="30px" />
        </div>
      </Link>
    </>
  );
};

export default SocialAccountButton;
