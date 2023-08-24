import React, { useRef, useEffect } from "react";
import classes from "./TrashCamera.module.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
    0: "cardboard",
    1: "glass",
    2: "metal",
    3: "paper",
    4: "plastic",
    5: "trash",
  };
  const loadModel = async () => {
    net = await tf.loadLayersModel("../../../public/tfjs_model/model.json");
  };

  const run = async () => {
    await loadModel();
    const webcam = await tf.data.webcam(camera.current, {
      resizeWidth: 224,
      resizeHeight: 224,
    });

    const frameInterval = 500; // 프레임 해제 간격 (밀리초)
    let lastFrameTime = performance.now();

    while (true) {
      const currentTime = performance.now();
      if (currentTime - lastFrameTime >= frameInterval) {
        const img = await webcam.capture();
        const resizedImage = preprocessImage(img);

        const result = await net.predict(resizedImage);

        const index = result.argMax(1).dataSync();

        const resultLabel = label_dict[index];

        if (figures.current) {
          figures.current.innerText = `쓰레기 측정 결과: ${resultLabel}`;
          if (resultLabel === "metal") {
            alert("확인되었습니다.");
            navigate("/home");
          }
        }

        img.dispose();
        resizedImage.dispose();

        lastFrameTime = currentTime; // 마지막 프레임 시간 갱신
      }
      await tf.nextFrame();
    }
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