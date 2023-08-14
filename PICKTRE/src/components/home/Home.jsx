import classes from "./Home.module.css";
import HomeHeader from "./HomeHeader";
import HomeReward from "./HomeReward";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <HomeHeader />

        <main className={classes.main}>
          <section className={classes.profileSection}>
            <HomeReward />
          </section>
          <section className={classes.mainPostSection}>
            <div className={classes.mainPost}>
              <div className={classes.mainPostContent}>포스트 섹션입니다.</div>
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
