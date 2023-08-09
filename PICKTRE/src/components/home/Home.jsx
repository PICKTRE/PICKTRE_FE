import classes from "./Home.module.css";
import { BiBell } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>
          <section className={classes.mainHeader}>
            <div className={classes.mainHeaderContent}>
              <h1>PICKTRE</h1>
              <BiBell size="27" />
            </div>
          </section>
          <section className={classes.subHeader}>
            <article className={classes.pageHeader}>Home</article>
          </section>
        </header>
        <main className={classes.main}>
          <section className={classes.profileSection}>
            프로필 섹션입니다.
          </section>
          <section className={classes.mainPostSection}>
            <div className={classes.mainPost}>
              <div className={classes.mainPostContent}>포스트 섹션입니다.</div>
            </div>
          </section>
        </main>

        {/* footer section */}
        <footer className={classes.footer}>푸터 섹션입니다.</footer>
      </div>
    </>
  );
};

export default Home;
