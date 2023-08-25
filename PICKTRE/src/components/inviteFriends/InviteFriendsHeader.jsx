import classes from "./InviteFriendsHeader.module.css";
import Header from "../common/Header";

const MyHeader = () => {
  return (
    <header className={classes.header}>
      <Header />
      <section className={classes.subHeader}>
        <article className={classes.pageHeader}>Invite Friends</article>
      </section>
    </header>
  );
};

export default MyHeader;
