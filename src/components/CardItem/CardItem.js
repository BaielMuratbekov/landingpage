
import classes from "./CardItem.module.css";
function CardItem({ card }) {
  return (
    <div className="container">
      <div className={classes.CardItem}>
        <img src={card.image} alt={card.title} />
        <div className={classes.CardItem__ditalis}>
          <h4 className={classes.CardItem__title}>{card.title}</h4>
          <p>{card.description}</p>
          <a href='tel:0708507590' className={classes.CardItem__link}>
            <span>{card.urlTitle}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
