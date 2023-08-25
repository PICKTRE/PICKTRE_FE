import classes from "./StoreOther.module.css";
import StoreDividingLine from "./StoreDividingLine";
import StoreGoods from "./StoreGoods";

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
              isLoading={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreOther;
