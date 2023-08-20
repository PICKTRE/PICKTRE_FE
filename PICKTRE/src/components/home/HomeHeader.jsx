import classes from "./HomeHeader.module.css";
import Header from "../common/Header";

const HomeHeader = () => {
  return (
    <header className={classes.header}>
      <Header />
      <section className={classes.subHeader}>
        <article className={classes.pageHeader}>Home</article>
      </section>
    </header>
  );
};

export default HomeHeader;
