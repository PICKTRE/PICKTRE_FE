import classes from "./NoticeHeader.module.css";
import Header from "../common/Header";

const NoticeHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <Header />
        <section className={classes.subHeader}>
          <article className={classes.pageHeader}>Notice</article>
        </section>
      </header>
    </>
  );
};

export default NoticeHeader;
