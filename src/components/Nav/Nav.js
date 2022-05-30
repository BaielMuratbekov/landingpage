import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
function Nav() {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Главная</NavItem>
      <NavItem url="/services">Услуги</NavItem>
      <NavItem url="/about">О нас</NavItem>
      <NavItem url="/contacts">Контакты</NavItem>
    </ul>
  );
}

export default Nav;
