import { useRef, useEffect } from "react";
import classes from "./TrashCamera.module.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { VITE_MODEL_URL } from "../../constants/OAuth";
import cameraReward from "../../service/cameraReward";
import * as tf from "@tensorflow/tfjs";

const Trashcamera = () => {
  const navigate = useNavigate();
  const contentVariants = {
    hidden: {
      opacity: 0.3,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.3 },
    },
  };
  let net;
  const camera = useRef();
  const figures = useRef();
  const label_dict = {
    0: 'cardboard',
    1: 'e-waste',
    2: 'glass',
    3: 'medical',
    4: 'metal',
    5: 'paper',
    6: 'plastic'
  };
  const loadModel = async () => {
    net = await tf.loadLayersModel(`${VITE_MODEL_URL}`);
  };

  const run = async () => {
    await loadModel();
    const webcam = await tf.data.webcam(camera.current, {
      resizeWidth: 224,
      resizeHeight: 224,
      facingMode: 'environment',
    });
  
    const frameInterval = 500; // 프레임 해제 간격 (밀리초)
    let lastFrameTime = performance.now();
    let isRunning = true; // 추가: 무한 루프를 제어하는 변수
  
    const loop = async () => {
      if (!isRunning) return;
  
      const currentTime = performance.now();
      if (currentTime - lastFrameTime >= frameInterval) {
        const img = await webcam.capture();
        const resizedImage = preprocessImage(img);
  
        const result = await net.predict(resizedImage);
  
        const index = result.argMax(1).dataSync();
  
        const resultLabel = label_dict[index];
  
        if (figures.current) {
          figures.current.innerText = `쓰레기 측정 결과: ${resultLabel}`;
          if (resultLabel === "medical") {
            try {
              const createResponse = await cameraReward(2, "medical", 500);
              console.log(createResponse);
              alert("확인되었습니다.");
              navigate("/home");
              return () => {
                isRunning = false;
              };
              // Handle createResponse if needed
            } catch (error) {
              console.error("Camera reward creation error:", error);
            }
          }
        }
  
        img.dispose();
        resizedImage.dispose();
  
        lastFrameTime = currentTime; // 마지막 프레임 시간 갱신
      }
      await tf.nextFrame();
      loop(); // 재귀 호출로 무한 루프 실행
    };
  
    loop(); // 무한 루프 시작
  
    // 컴포넌트가 언마운트될 때 무한 루프 종료
    return () => {
      isRunning = false;
    };
  };
  

  const preprocessImage = (image) => {
    const img = image.toFloat();
    const resized = tf.image.resizeBilinear(img, [224, 224]);
    const offset = tf.scalar(127.5);
    const normalized = resized.sub(offset).div(offset);
    const batchedImage = normalized.expandDims(0);
    return batchedImage;
  };

  useEffect(() => {
    run();
  }, []);

  return (
    <>
      <Header />
      <motion.main
        className={classes.container}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <section className={classes.camera}>
          <div ref={figures} />
          <video
            autoPlay
            playsInline
            muted={true}
            ref={camera}
            width="390"
            height="668.5"
          />
        </section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Trashcamera;
