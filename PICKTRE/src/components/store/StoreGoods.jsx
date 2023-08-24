import classes from "./StoreGoods.module.css";
// import photo from "../../assets/storeSpringNote.png";

const StoreGoods = ({ isRank, productRank, imagePath, productName, price }) => {
  return (
    <>
      <div className={classes.cardComponentWrapper}>
        {isRank && <div className={classes.cardBadge}>{productRank}</div>}
        <div className={classes.card}>
          <div
            className={classes.cardPhoto}
            style={{
              backgroundImage: `url(${imagePath})`,
              top: !price ? "5px" : null,
            }}
          />
          <div
            className={classes.cardMainText}
            style={!price ? { margin: 0, top: 0 } : null}
          >
            {productName}
          </div>
          {price && (
            <div className={classes.cardSubText}>{price.toLocaleString()}P</div>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreGoods;
