import classes from "./Product.module.css"
export const Product = ({ title, price, image, description }) => {
  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      <img className={classes.image} src={image} alt={title} />
      <p className={classes.description}>{description}</p>
      <span>{price}</span>
    </div>
  );
};
