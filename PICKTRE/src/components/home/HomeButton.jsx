import classes from "./HomeButton.module.css";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();
  const onClickActivityReport = () => {
    navigate("/activity-report");
  };

  return (
    <>
      <div className={classes.subButton}>
        <div className={classes.currentReward}>보유 리워드</div>
        <div
          className={classes.myActivityReport}
          onClick={onClickActivityReport}
        >
          내 활동 리포트
        </div>
      </div>
    </>
  );
};

export default HomeButton;
