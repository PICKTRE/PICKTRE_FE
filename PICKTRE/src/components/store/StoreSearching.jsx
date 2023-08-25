import classes from "./StoreSearching.module.css";
import { IoIosArrowDown } from "react-icons/io";

const StoreSearching = () => {
  return (
    <>
      <div className={classes.searching}>
        <div className={classes.searchingTitle}>
          <input type="text" placeholder="검색하실 제품을 입력해주세요" className={classes.searchEngine} />
        </div>
        <div className={classes.searchingBar}>
          추천 인기 제품
          <IoIosArrowDown size="14" color="#ffffff" />
          1. PICKTRE SPRING NOTE
        </div>
      </div>
      <div className={classes.currentPoint}>
        픽트리님,
        <br />
        현재 보유포인트
        <br />
        <p>8,900P</p>
      </div>
    </>
  );
};

export default StoreSearching;
