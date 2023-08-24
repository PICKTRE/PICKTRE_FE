import classes from "./badgeTitle.module.css";
import { IoIosArrowForward } from "react-icons/io";

const badgeTitle = () => {
  return (
    <>
      <div className={classes.badgeTitle}>
        <p>
          픽트리님,
          <br />
          획득한 뱃지 현황입니다.
        </p>
        <div className={classes.badgeSection}>
          <div className={classes.badgeImgSection}></div>
          <div className={classes.badgeImgSection}></div>
          <div className={classes.badgeImgSection}></div>
        </div>
        <button className={classes.btn}>
          다른 뱃지 더보기 <IoIosArrowForward size="14" color="#008163" />
        </button>
      </div>
    </>
  );
};

export default badgeTitle;
