import InformServiceHeader from "./InformServiceHeader";
import Footer from "../common/Footer";
import classes from "./InformService.module.css";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: {
    opacity: 0.3,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

const InformService = () => {
  return (
    <>
      <div>
        <InformServiceHeader />
        <motion.main
          className={classes.main}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={classes.informServiceSection}></div>
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default InformService;
