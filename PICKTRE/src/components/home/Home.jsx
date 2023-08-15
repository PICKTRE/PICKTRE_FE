import classes from "./Home.module.css";
import HomeHeader from "./HomeHeader";
import HomeReward from "./HomeReward";
import HomeLevel from "./HomeLevel";
import HomeButton from "./HomeButton";
import HomeMainPostText from "./HomeMainPostText";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <HomeHeader />

        <main className={classes.main}>
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
              </div>
            </div>
          </section>
        </main>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
