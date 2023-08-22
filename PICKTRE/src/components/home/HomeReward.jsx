import classes from "./HomeReward.module.css";
import { useState, useEffect } from "react";
import showProfile from "../../service/showProfile";

const HomeReward = () => {
  const [name, setName] = useState("");
  const [todayReward, setTodayReward] = useState(0);

  useEffect(() => {
    showProfile()
      .then((data) => {
        setName(data.data.username);
        setTodayReward(data.data.todayReward);
        // console.log("Data loaded:", data.data.rewardPoints, data.data.username);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);


  return (
    <div className={classes.rewardSection}>
      <div className={classes.rewardInfoSection}>
        <ul className={classes.rewardInfo}>
          <li className={classes.rewardInfoText}>
            안녕하세요 <br />
            {name}님, 반갑습니다. <br /> <br />
          </li>
          <li>
            오늘 하루동안 <br />
            <b>리워드 {todayReward}점</b> 모았어요!
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
