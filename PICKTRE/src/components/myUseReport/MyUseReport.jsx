import classes from "./MyUseReport.module.css";
import MyUseReportHeader from "./MyUseReportHeader";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import ActivityGraph from "./activityGraph";
import BadgeTitle from "./badgeTitle";

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
        <section className={classes.badgeSection}>
          <BadgeTitle />
        </section>
        <section className={classes.activitySection}>
          <p>
            픽트리님의
            <br />
            쓰레기수거 활동 분석입니다.
          </p>
          <ActivityGraph />
        </section>
      </motion.main>
      <Footer />
    </>
  );
};

export default ActivityReport;