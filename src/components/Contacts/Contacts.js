
import classes from "./Contacts.module.css";

function Contacts() {
  return (
    <section id="contacts">
      <div className={classes.Contacts}>
        <div className={classes.Contacts__title}>
          <p>Приедем с нужным материалом, цены ниже рыночных.</p>
          <p>Постоянным клиентам скидка.</p>
        </div>
        <div className={classes.Contacts__item}>
          <div className={classes.Contacts__info}>
            <div className={classes.ContactList}>
              <h3>устоновка</h3>
              <ul>
                <li>Сантехники любой сложности, сварочные работы</li>
                <li>Отопительного оборудования, устранения протечек</li>
                <li>И замена радиаторов</li>
                <li>Ремонт полотенце сушителей</li>
                <li>Душевых кабин, поддонов</li>
                <li>Водоснабжения, перепланировка</li>
              </ul>
              <a href="#">Заказать </a>
            </div>
            <div className={classes.ContactList}>
              <h3>устоновка</h3>
              <ul>
                <li>Сантехники любой сложности, сварочные работы</li>
                <li>Отопительного оборудования, устранения протечек</li>
                <li>И замена радиаторов</li>
                <li>Ремонт полотенце сушителей</li>
                <li>Душевых кабин, поддонов</li>
                <li>Водоснабжения, перепланировка</li>
              </ul>
              <a href="#">Заказать </a>
            </div>
            <div className={classes.ContactList}>
              <h3>устоновка</h3>
              <ul>
                <li>Сантехники любой сложности, сварочные работы</li>
                <li>Отопительного оборудования, устранения протечек</li>
                <li>И замена радиаторов</li>
                <li>Ремонт полотенце сушителей</li>
                <li>Душевых кабин, поддонов</li>
                <li>Водоснабжения, перепланировка</li>
              </ul>
              <a href="#">Заказать </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
