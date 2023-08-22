import classes from "./MyProfile.module.css";
import { useEffect, useState } from "react";
import showProfile from "../../service/showProfile";

const MyProfile = () => {
  const [name, setName] = useState("");
  const [point, setPoint] = useState(0);
  const [todayPoint, setTodayPoint] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [mail, setMail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    showProfile()
      .then((data) => {
        setName(data.data.username);
        setTodayPoint(data.data.todayReward);
        setPoint(data.data.rewardPoints);
        setImage(data.data.picture);
        setMail(data.data.mail);
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
      {/* {console.log("Data loaded:", point, name, image, todayPoint)} */}
      {isLoading ? (
        <div className={classes.profileImg} />
      ) : (
        <img src={image} alt="profile" className={classes.profileImg} />
      )}
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
              {isLoading ? (
                <div className={classes.todayReward} />
              ) : (
                <div className={classes.todayRewards}>{todayPoint}P</div>
              )}
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
        {isLoading ? (
          <button className={classes.verify}>이메일을 인증해주세요</button>
        ) : (
          <button className={classes.verify}>{mail}</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
