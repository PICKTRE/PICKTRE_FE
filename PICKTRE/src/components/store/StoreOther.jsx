import classes from "./StoreOther.module.css";
import StoreDividingLine from "./StoreDividingLine";
import StoreGoods from "./StoreGoods";
import photo1 from "../../assets/storeBand.png";
import photo2 from "../../assets/storePencil.png";
import photo3 from "../../assets/storeBag.png";
import photo4 from "../../assets/storeRing.png";

const StoreOther = () => {
  return (
    <>
      <div>
        <div className={classes.otherDividingSection}>
          <StoreDividingLine text="Other" />
        </div>
        <div className={classes.otherGoods}>
          <StoreGoods photo={photo1} cardMainText="PICKTRE Bracelet" />
          <StoreGoods photo={photo2} cardMainText="PICKTRE Pen" />
          <StoreGoods photo={photo3} cardMainText="PICKTRE Bag" />
          <StoreGoods photo={photo4} cardMainText="PICKTRE Keyring" />
        </div>
      </div>
    </>
  );
};

export default StoreOther;
