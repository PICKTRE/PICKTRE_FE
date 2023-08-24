import StoreHeader from "./StoreHeader";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import classes from "./Store.module.css";
import StoreSearching from "./StoreSearching";
import StorePopular from "./StorePopular";
import StoreOther from "./StoreOther";

const Store = () => {
  const contentVariants = {
    hidden: {
      opacity: 0.3,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.1 },
    },
  };

  return (
    <>
      <StoreHeader />
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <section className={classes.searchingSection}>
          <StoreSearching />
        </section>
        <section className={classes.popularSection}>
          <StorePopular />
        </section>
        <section className={classes.otherSection}>
          <StoreOther />
        </section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Store;
