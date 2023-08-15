import classes from "./Footer.module.css"
import point from "../../assets/point.png";
import map from "../../assets/map.png";
import QR from "../../assets/QR.png";
import mypage from "../../assets/mypage.png";
import setting from "../../assets/setting.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    const onClickMap = () => {
        navigate("/map");
    }

    const onClickMyPage = () => {
        navigate("/mypage");
    }

    return (
        <footer className={classes.footer}>
            <div className={classes.pointSection}>
                <img src={point} alt="푸터이미지입니다." className={classes.point} />
            </div>
            <div className={classes.mapSection} onClick={onClickMap}>
                <img src={map} alt="푸터이미지입니다." className={classes.map} />
            </div>
            <div className={classes.qrSection}>
                <div className={classes.qrImgSection}>
                    <img src={QR} alt="푸터이미지입니다." className={classes.QR} />
                </div>
            </div>
            <div className={classes.mypageSection} onClick={onClickMyPage}>
                <img src={mypage} alt="푸터이미지입니다." className={classes.mypage} />
            </div>
            <div className={classes.settingSection}>
                <img src={setting} alt="푸터이미지입니다." className={classes.setting} />
            </div>
        </footer>
    )
}

export default Footer;