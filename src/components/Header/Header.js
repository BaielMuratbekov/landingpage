import classes from "./Header.module.css";
import headerImage from "../../assets/san-1.png";
function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.Header__item}>
        <img src={headerImage} alt="HEDER" className={classes.Header__img} />
        <div className={classes.Header__info}>
          <h1>САНТЕХНИК 24/7 В БИШКЕК</h1>
          <p>Все виды сантехнических услуг — недорого</p>
            <a href='https://www.google.com/' className={classes.Header__button}>
                +996123456789
            </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
