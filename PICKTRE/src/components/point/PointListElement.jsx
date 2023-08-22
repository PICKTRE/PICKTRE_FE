import classes from "./PointListElement.module.css";
import PropTypes from "prop-types";
import pointData from "./dummy/pointData.json";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const msrl = 4;

const PointListElement = () => {
  // const [pointData, setPointData] = useState();
  // useEffect(() => {
  //   axios
  //     .get(`http://118.67.131.231:8080/api/reward-transactions/${msrl}`) // GET 요청 보내기
  //     .then((response) => {
  //       console.log(response.data.list);
  //       setPointData(response.data.list);
  //     })
  //     .catch((error) => {
  //       // API 요청이 실패한 경우
  //       console.error("API 요청 실패:", error);
  //     });
  // }, []);

  return (
    <>
      {pointData.map((data, index) => (
        <div key={index} className={classes.pointListElement}>
          <div className={classes.date}>
            {data.date.substring(1, 2)}.{data.date.substring(2, 4)}
          </div>
          <div className={classes.textSection}>
            <div className={classes.mainText}>
              {data.type} {data.count}개 반납
            </div>
            <div className={classes.subText}>{data.place} 수거함</div>
          </div>
          <div className={classes.point}>{data.point}P</div>
        </div>
      ))}
    </>
  );
};

PointListElement.propsTypes = {
  pointData: PropTypes.node.isRequired,
};

export default PointListElement;
