import classes from "./StoreHeader.module.css";
import Header from "../common/Header";

const StoreHeader = () => {
  return (
    <header className={classes.header}>
      <Header />
      <section className={classes.subHeader}>
        <article className={classes.pageHeader}>Store</article>
      </section>
    </header>
  );
};

export default StoreHeader;
