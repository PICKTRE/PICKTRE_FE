import Ranker from "./Ranker";
import dummyData from "./dummy/rankData.json";

const RankingList = () => {
  return (
    <>
      {dummyData.map((data, index) => (
        <Ranker
          key={index}
          rank={index + 1}
          name={data.name}
          count={data.count}
        />
      ))}
    </>
  );
};

export default RankingList;
