import classes from "./StoreSearching.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const StoreSearching = () => {
  const msrl = 1;
  const [userName, setUserName] = useState("");
  const [rewardPoint, setRewardPoint] = useState("");
  useEffect(() => {
    axios
      .get(`${BASE_URL}/members/${msrl}`) // GET 요청 보내기
      .then((response) => {
        setUserName(response.data.data.username);
        setRewardPoint(response.data.data.rewardPoints);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  }, []);

  return (
    <>
      <div className={classes.searching}>
        <div className={classes.searchingTitle}>
          <input
            type="text"
            placeholder="검색하실 제품을 입력해주세요"
            className={classes.searchEngine}
          />
        </div>
        <div className={classes.searchingBar}>
          추천 인기 제품
          <IoIosArrowDown size="14" color="#ffffff" />
          1. PICKTRE SPRING NOTE
        </div>
      </div>
      <div className={classes.currentPoint}>
        {userName}님의
        <br />
        현재 보유포인트
        <br />
        <p>{rewardPoint}P</p>
      </div>
    </>
  );
};

export default StoreSearching;
