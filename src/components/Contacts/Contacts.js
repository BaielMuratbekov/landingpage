import classes from "./Contacts.module.css";
import svgb from "../../assets/svg-b.svg";
function Contacts() {
  const svg = (
    <svg
      viewBox="0 0 16 16"
      class="bi bi-check"
      fill="currentColor"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>{" "}
    </svg>
  );
  const svgcheck = (
    <svg
      aria-hidden="true"
      role="img"
      height="1em"
      width="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
      ></path>
    </svg>
  );
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
                <li>
                  {svg}
                  <p>Сантехники любой сложности, сварочные работы</p>
                </li>
                <li>
                  {svg}
                  <p>Отопительного оборудования, устранения протечек</p>
                </li>
                <li>
                  {svg}
                  <p>И замена радиаторов</p>
                </li>
                <li>
                  {svg}
                  <p>Ремонт полотенце сушителей</p>
                </li>
                <li>
                  {svg}
                  <p>Душевых кабин, поддонов</p>
                </li>
                <li>
                  {svg}
                  <p>Водоснабжения, перепланировка</p>
                </li>
              </ul>
              <a href='/'>Заказать </a>
            </div>
            <div className={classes.ContactList}>
              <h3>УСТРАНЕНИЕ</h3>
              <ul>
                <li>
                  {svg}
                  <p>Засора унитаза, раковины, ванны, канализации</p>
                </li>
                <li>
                  {svg}
                  <p>Течи</p>
                </li>
                <li>
                  {svg}
                  <p>Разводка труб</p>
                </li>
                <li>
                  {svg}
                  <p>Герметизация душевой кабин</p>
                </li>
                <li>
                  {svg}
                  <p>Протечки раковины, ванны, смесителя, унитаза, батареи</p>
                </li>
              </ul>
              <a href='/'>Заказать </a>
            </div>
            <div className={classes.ContactList}>
              <h3>СМЕСИТЕЛИ</h3>
              <ul>
                <li>
                  {svg}
                  <p>На раковину или мойку</p>
                </li>
                <li>
                  {svg}
                  <p>На ванну (с душем)</p>
                </li>
                <li>
                  {svg}
                  <p>На душевую кабину</p>
                </li>
                <li>
                  {svg}
                  <p>Сборка смесителя</p>
                </li>
                <li>
                  {svg}
                  <p>Демонтаж смесителя</p>
                </li>
              </ul>
              <a href='/'>Заказать </a>
            </div>
          </div>
        </div>

        <div className={classes.Contacts__help}>
        <div className={classes.Contacts__help__title}>
              <h2>Нужна Помощь?</h2>
              <p>Несколько простых шагов для начала работы:</p>
            </div>
          <div className={classes.Contacts__help__item}>
            
            <div className={classes.Contacts__left}>
              <img src={svgb} alt="svg" />
            </div>
            <div className={classes.Contacts__right}>
              <ul>
                <li>
                  {svgcheck}
                  <p>Свяжитесь с нами</p>
                </li>
                <li>
                  Позвоните на номер +7 771 408 53 07 или
                  напишите нам на WhatsApp
                </li>
                <li>
                  {svgcheck}
                  <p>Расскажите что вам необходимо</p>
                </li>
                <li>Опишите вашу проблему или объем необходимх услуг</li>
                <li>
                  {svgcheck}
                  <p>Получите предложение</p>
                </li>
                <li>
                  Мы озвучим сразу или подготовим для вас предложение по нашим
                  услугам
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.ContactList}>
            <a href='/'>НАПИСАТЬ НА WHATSAPP</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
