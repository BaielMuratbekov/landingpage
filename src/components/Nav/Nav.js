import classes from "./Nav.module.css";
function Nav() {
  return (
    <nav className={classes.Nav}>
      <div>example</div>
      <ul>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/">Услуги</a>
        </li>
        <li>
          <a href="/">О нас</a>
        </li>
        <li>
          <a href="/">Контакты</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
