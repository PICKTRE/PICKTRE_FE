import classes from "./HomeButton.module.css";

const HomeButton = () => {
  return (
    <>
      <div className={classes.subButton}>
        <div className={classes.currentReward}>보유 리워드</div>
        <div className={classes.myActivityReport}>내 활동 리포트</div>
      </div>
    </>
  );
};

export default HomeButton;
