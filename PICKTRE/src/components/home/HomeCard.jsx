import classes from "./HomeCard.module.css";

const HomeCard = () => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.cardContentWrapper}></div>
        <div className={classes.cardPhoto} />
        <div className={classes.cardMainText}>
          업사이클링 인테리어 팁과 방법
        </div>
        <div className={classes.cardSubText}>
          재활용품으로 일상에서 잘 활용하는 방법
        </div>
        <div className={classes.cardFooterWrapper}>
          <div className={classes.cardFooter}>
            <div className={classes.cardHeart}>❤️&nbsp;</div>
            <div className={classes.cardLikeCount}>1.1K</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
