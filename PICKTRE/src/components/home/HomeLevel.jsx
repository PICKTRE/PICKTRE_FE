import classes from "./HomeLevel.module.css";

const HomeLevel = () => {
  const currentLevelPercentage = 50;

  return (
    <>
      <div className={classes.levelSectionWrapper}>
        <span className={classes.levelCharacter}>LEVEL</span>
        <div className={classes.levelSection}>
          <div className={classes.levelColorSection}>
            <div
              className={classes.levelGradationColorSection}
              style={{ width: `${currentLevelPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLevel;
