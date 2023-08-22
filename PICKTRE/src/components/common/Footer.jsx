import classes from "./Footer.module.css"
import point from "../../assets/point.png";
import map from "../../assets/map.png";
import QR from "../../assets/camera.png";
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

    const onClickQRcameraPage = () => {
        navigate("/QRcamera");
    }

    return (
        <footer className={classes.footer}>
            <div className={classes.LeftSection}>
                <img src={point} alt="푸터이미지입니다." className={classes.point} />
                <p>포인트</p>
            </div>
            <div className={classes.RightSection} onClick={onClickMap}>
                <img src={map} alt="푸터이미지입니다." className={classes.map} />
                <p>지도</p>            
            </div>
            <div className={classes.qrSection}>
                <div className={classes.qrImgSection}>
                    <img src={QR} alt="푸터이미지입니다." className={classes.QR} onClick={onClickQRcameraPage}/>
                </div>
            </div>
            <div className={classes.LeftSection} onClick={onClickMyPage}>
                <img src={mypage} alt="푸터이미지입니다." className={classes.mypage} />
                <p>마이페이지</p>
            </div>
            <div className={classes.RightSection}>
                <img src={setting} alt="푸터이미지입니다." className={classes.setting} />
                <p>설정</p>
            </div>
        </footer>
    )
}

export default Footer;