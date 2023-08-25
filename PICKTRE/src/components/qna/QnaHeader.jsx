import classes from "./QnaHeader.module.css";
import Header from "../common/Header";

const QnaHeader = () => {
  return (
    <header className={classes.header}>
      <Header />
      <section className={classes.subHeader}>
        <article className={classes.pageHeader}>QnA</article>
      </section>
    </header>
  );
};

export default QnaHeader;
