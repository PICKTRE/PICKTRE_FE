import classes from "./PointHeader.module.css";
import Header from "../common/Header";

const PointHeader = () => {
  return (
    <header className={classes.header}>
      <Header />
      <section className={classes.subHeader}>
        <article className={classes.pageHeader}>Point</article>
      </section>
    </header>
  );
};

export default PointHeader;
