import classes from "./RankingHeader.module.css";
import Header from "../common/Header";

const QnaHeader = () => {
  return (
    <header className={classes.header}>
      <Header />
      <section className={classes.subHeader}>
        <article className={classes.pageHeader}>Ranking</article>
      </section>
    </header>
  );
};

export default QnaHeader;
