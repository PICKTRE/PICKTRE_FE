import classes from "./StorePopular.module.css";
import StoreGoods from "./StoreGoods";
import StoreDividingLine from "./StoreDividingLine";
import photo1 from "../../assets/storeSpringNote.png";
import photo2 from "../../assets/storeClothes.png";
import photo3 from "../../assets/storeCup.png";

const StorePopular = () => {
  return (
    <>
      <div>
        <div className={classes.popularDividingSection}>
          <StoreDividingLine text="Popular" />
        </div>
        <div className={classes.popularGoods}>
          <StoreGoods
            rank="1"
            photo={photo1}
            cardMainText="PICKTRE SpringNote"
            price={4500}
          />
          <StoreGoods
            rank="2"
            photo={photo2}
            cardMainText="PICKTRE Gray T-Shirt"
            price={7500}
          />
          <StoreGoods
            rank="3"
            photo={photo3}
            cardMainText="PICKTRE One Cup"
            price={6500}
          />
        </div>
      </div>
    </>
  );
};

export default StorePopular;
