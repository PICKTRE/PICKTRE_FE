import classes from "./StoreOther.module.css";
import StoreDividingLine from "./StoreDividingLine";
import StoreGoods from "./StoreGoods";
import photo1 from "../../assets/storeBand.png";
import photo2 from "../../assets/storePencil.png";
import photo3 from "../../assets/storeBag.png";
import photo4 from "../../assets/storeRing.png";

const StoreOther = ({ products }) => {
  return (
    <>
      <div>
        <div className={classes.otherDividingSection}>
          <StoreDividingLine text="Other" />
        </div>
        <div className={classes.otherGoods}>
          {products.map((product, index) => (
            <StoreGoods
              key={index}
              imagePath={product.imagePath}
              productName={product.productName}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreOther;
