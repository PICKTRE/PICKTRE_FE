import classes from "./HomeLevel.module.css";

const HomeLevel = () => {
  return (
    <>
      <div className={classes.levelSectionWrapper}>
        <span className={classes.levelCharacter}>LEVEL</span>
        <div className={classes.levelSection}>
          <div className={classes.levelColorSection}></div>
        </div>
      </div>
    </>
  );
};

export default HomeLevel;
