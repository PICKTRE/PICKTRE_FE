import classes from "./InformServiceHeader.module.css";
import Header from "../common/Header";

const QnaHeader = () => {
  return (
    <header className={classes.header}>
      <Header />
      <section className={classes.subHeader}>
        <article className={classes.pageHeader}>Inform Service</article>
      </section>
    </header>
  );
};

export default QnaHeader;
