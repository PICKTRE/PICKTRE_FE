import classes from "./MyUseReportHeader.module.css";
import Header from "../common/Header";

const MyUseReportHeader = () => {
  return (
    <header className={classes.header}>
      <Header />
      <section className={classes.subHeader}>
        <article className={classes.pageHeader}>My Use Report</article>
      </section>
    </header>
  );
};

export default MyUseReportHeader;
