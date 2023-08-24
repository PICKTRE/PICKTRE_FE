import classes from "./StoreGoods.module.css";
import PropTypes from "prop-types";
// import photo from "../../assets/storeSpringNote.png";

const StoreGoods = ({ rank, photo, cardMainText, price }) => {
  return (
    <>
      <div className={classes.cardComponentWrapper}>
        {rank && <div className={classes.cardBadge}>{rank}</div>}
        <div className={classes.card}>
          <div
            className={classes.cardPhoto}
            style={{
              backgroundImage: `url(${photo})`,
              top: !price ? "5px" : null,
            }}
          />
          <div
            className={classes.cardMainText}
            style={!price ? { margin: 0, top: 0 } : null}
          >
            {cardMainText}
          </div>
          {price && (
            <div className={classes.cardSubText}>{price.toLocaleString()}P</div>
          )}
        </div>
      </div>
    </>
  );
};

StoreGoods.propsTypes = {
  rank: PropTypes.node.isRequired,
  photo: PropTypes.node.isRequired,
  cardMainText: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
};

export default StoreGoods;
