import classes from "./MyUseReport.module.css";
import MyUseReportHeader from "./MyUseReportHeader";
import Footer from "../common/Footer";
import { motion } from "framer-motion";

const ActivityReport = () => {
  const contentVariants = {
    hidden: {
      opacity: 0.3,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  return (
    <>
      <MyUseReportHeader />
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <div></div>
      </motion.main>
      <Footer />
    </>
  );
};

export default ActivityReport;
