import classes from "./PointProfile.module.css";
// import profileData from "./dummy/profileData.json";
import mascot from "../../assets/mascot.png";
import { useState, useEffect } from "react";
import axios from "axios";

const msrl = 4;

const PointProfile = () => {
  // const [profileData, setProfileData] = useState();
  const [userName, setUserName] = useState("");
  const [rewardPoint, setRewardPoint] = useState("");
  const [trashCount, setTrashCount] = useState(0);
  const [todayReward, setTodayReward] = useState(0);

  useEffect(() => {
    axios
      .get(`http://118.67.131.231:8080/api/members/${msrl}`) // GET 요청 보내기
      .then((response) => {
        // API 요청이 성공한 경우
        console.log(response.data.data);
        setUserName(response.data.data.username);
        setTrashCount(response.data.data.trashCount);
        setRewardPoint(response.data.data.rewardPoints);
        setTodayReward(response.data.data.todayReward);
        // setTrashCount(response.data.data.trashCount);
      })
      .catch((error) => {
        // API 요청이 실패한 경우
        console.error("API 요청 실패:", error);
      });
  }, []);

  return (
    <>
      <div className={classes.profileBox}>
        <div className={classes.profileTopSection}>
          <div className={classes.textSection}>
            <span>
              <strong className={classes.boldText}>{userName}</strong>
              님,
              <br />
            </span>
            <span>
              <strong className={classes.boldText}>{trashCount}개</strong>
              의 쓰레기를 반납했어요.
              <br />
            </span>
            <span>
              <strong className={classes.boldText}>
                오늘 총 {todayReward.toLocaleString()}포인트
              </strong>
              의
            </span>
            <span>변동이 있어요.</span>
          </div>
          <div className={classes.mascotSection}>
            <img src={mascot} alt="mascot" className={classes.mascot} />
          </div>
        </div>
        <div className={classes.profileBottomSection}>
          <div className={classes.currentPoint}>
            보유 포인트: {rewardPoint.toLocaleString()}P
          </div>
          <div className={classes.myActivityReport}>내 활동 리포트</div>
        </div>
      </div>
    </>
  );
};

export default PointProfile;
