import classes from "./MyPage.module.css";
import MyList from "./MyList";
import Footer from "../common/Footer";
import MyHeader from "./MyHeader";
import MySubPost from "./MySubPost";
import MyProfile from "./MyProfile";

const MyPage = () => {
  return (
    <div className={classes.container}>
      <MyHeader />
      <main className={classes.main}>
        <section className={classes.profileSection}>
          <MyProfile />
        </section>
        <section className={classes.mainSubPost}>
          <MySubPost />
        </section>
        <MyList />
      </main>
      <Footer />
    </div>
  );
};

export default MyPage;
