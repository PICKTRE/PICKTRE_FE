import classes from "./HomeReward.module.css";

const HomeReward = () => {
  return (
    <div className={classes.rewardSection}>
      <div className={classes.rewardInfoSection}>
        <ul className={classes.rewardInfo}>
          <li className={classes.rewardInfoText}>
            안녕하세요 <br />
            픽트리님, 반갑습니다. <br /> <br />
          </li>
          <li>
            오늘 하루동안 <br />
            <b>리워드 134점</b> 모았어요!
          </li>
        </ul>
        <div className={classes.rewardTier}>
          <div className={classes.rewardTierImg}></div>
          <div className={classes.rewardTierContent}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeReward;
