import classes from "./SocialAccountButton.module.css";
import Kakaotalk from "../../assets/kakaotalk.png";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const SocialAccountButton = () => {
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
      <Link to="/home">
        <div className={classes.buttonGoogle}>
          <FcGoogle size="30px" />
        </div>
      </Link>
    </>
  );
};

export default SocialAccountButton;
