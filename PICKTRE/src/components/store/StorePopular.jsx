import classes from "./StorePopular.module.css";
import StoreGoods from "./StoreGoods";
import StoreDividingLine from "./StoreDividingLine";

const StorePopular = ({ products }) => {
  return (
    <>
      <div>
        <div className={classes.popularDividingSection}>
          <StoreDividingLine text="Popular" />
        </div>
        <div className={classes.popularGoods}>
          {products.map((product, index) => (
            <StoreGoods
              key={index}
              isRank={1}
              productRank={index + 1}
              imagePath={product.imagePath}
              price={product.price}
              productName={product.productName}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StorePopular;
