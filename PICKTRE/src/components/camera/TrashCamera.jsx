import Header from "../common/Header";
import Footer from "../common/Footer";
import classes from "./TrashCamera.module.css";
import Webcam from "react-webcam";
import { useRef, useState } from "react";
import { motion } from "framer-motion";


const Trashcamera = () => {
    const webCamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    const captureImage = () => {
        const imagesrc = webCamRef.current.getScreenshot();
        setCapturedImage(imagesrc);
    }

    const videoConstraints = {
        width: 390,
        height: 668.5,
        facingMode: "user"
    }

    const contentVariants = {
        hidden: {
            opacity: 0.3,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.3, duration: 0.3 },
        },
    };

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
                    ref={webCamRef}
                    videoConstraints={videoConstraints}
                />
                <button onClick={captureImage} className={classes.captureButton} />
                {capturedImage && <img src={capturedImage} alt="Captured" />}
            </motion.main>
            <Footer />
        </>
    )
}

export default Trashcamera;