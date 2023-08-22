import classes from "./MyProfile.module.css";
import { useEffect, useState } from "react";
import showProfile from "../../service/showProfile";

const MyProfile = () => {
  const [name, setName] = useState("");
  const [point, setPoint] = useState(0);
  // const [totalPoint, setTotalPoint] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    showProfile()
      .then((data) => {
        setName(data.data.username);
        setPoint(data.data.rewardPoints);
        setIsLoading(false);
        // console.log("Data loaded:", data.data.rewardPoints, data.data.username);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classes.profileSection}>
      {console.log("Data loaded:", point, name)}
      <div className={classes.profileImg}></div>
      <div className={classes.profileInfoSection}>
        <div className={classes.profile}>
          <ul className={classes.profileInfo}>
            <li>
              {isLoading ? (
                <div className={classes.name} />
              ) : (
                <div className={classes.names}>{name}</div>
              )}
            </li>
            <li>
              TODAY 리워드
              <div className={classes.todayReward} />
            </li>
            <li>
              보유리워드{" "}
              {isLoading ? (
                <div className={classes.totalReward} />
              ) : (
                <div className={classes.totalRewardS}>{point}P</div>
              )}
            </li>
          </ul>
          <div className={classes.profileTier}>
            <div className={classes.profileTierImg}></div>
          </div>
        </div>
        <button className={classes.verify}>이메일을 인증해주세요</button>
      </div>
    </div>
  );
};

export default MyProfile;
