import Header from "../common/Header";
import Footer from "../common/Footer";
import classes from "./QRcamera.module.css";
import Webcam from "react-webcam";
import guide from "../../assets/guide.png"
import { motion } from "framer-motion";


const QRcamera = () => {

    const contentVariants = {
        hidden: {
            opacity: 0.3,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.3, duration: 0.3 },
        },
    };

    const videoConstraints = {
        width: 390,
        height: 668.5,
        facingMode: "user"
    }

    return (
        <>
            <Header />
            <motion.main 
                className={classes.container} 
                variants={contentVariants}
                initial="hidden"
                animate="visible"
            >
                <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    mirrored={true}
                    videoConstraints={videoConstraints}
                />
                <img src={guide} alt="이미지" className={classes.guide} />
            </motion.main>
            <Footer />
        </>
    )
}

export default QRcamera;