import classes from "./Home.module.css";
import HomeHeader from "./HomeHeader";
import HomeReward from "./HomeReward";
import HomeLevel from "./HomeLevel";
import HomeButton from "./HomeButton";
import HomeMainPostText from "./HomeMainPostText";
import HomeCard from "./HomeCard";
import Footer from "../common/Footer";
import cardData from "./dummy/cardData.json";
import { motion } from "framer-motion";

const Home = () => {

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
      <div className={classes.container}>
        <HomeHeader />

        <motion.main
          className={classes.main}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <section className={classes.rewardSection}>
            <HomeReward />
          </section>
          <section className={classes.levelSection}>
            <HomeLevel />
          </section>
          <section className={classes.buttonSection}>
            <HomeButton />
          </section>
          <section className={classes.mainPostSection}>
            <div className={classes.mainPost}>
              <div className={classes.mainPostContent}>
                <HomeMainPostText />
                <div className={classes.mainCardSection}>
                  {cardData.map((data, index) => (
                    <HomeCard
                      key={index}
                      cardMainText={data.cardMainText}
                      cardSubText={data.cardSubText}
                      cardHeartCount={data.cardHeartCount}
                      cardRank={index + 1}
                      cardPhoto={data.cardPhotoURL}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </motion.main>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
