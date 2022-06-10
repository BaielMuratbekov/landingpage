import classes from "./Servis.module.css";
import card1 from "../../assets/card-1.jpeg";
import card2 from "../../assets/card-2.jpeg";
import card3 from "../../assets/card-3.jpeg";
import card4 from "../../assets/card-4.jpeg";
import card5 from "../../assets/card-5.jpeg";
import card6 from "../../assets/card-6.jpeg";
import CardItem from "../CardItem/CardItem";
const cards = [
  {
    image: card1,
    title: "Срочные работы",
    description: "Все виды мелко-срочных работ, оперативный выезд",
    urlTitle: "ЗАКАЗАТЬ +",
    id: 1,
  },
  {
    image: card2,
    title: "Прочистка",
    description: "Прочистка канализации любой сложности",
    urlTitle: "ЗАКАЗАТЬ +",
    id: 2,
  },
  {
    image: card3,
    title: "Отопление",
    description: "Замена радиаторов, установка печей отопления",
    urlTitle: "ЗАКАЗАТЬ +",
    id: 3,
  },
  {
    image: card4,
    title: "Монтаж",
    description:
      "Установка ванн, душевых кабин, поддонов, стиральных машин, посудомоечных машин",
    urlTitle: "ЗАКАЗАТЬ +",
    id: 4,
  },
  {
    image: card5,
    title: "Унитазы",
    description: "Монтаж и демонтаж унитазов",
    urlTitle: "ЗАКАЗАТЬ +",
    id: 5,
  },
  {
    image: card6,
    title: "Смесители",
    description: "Установка, замена всех типов смесителей",
    urlTitle: "ЗАКАЗАТЬ +",
    id: 6,
  },
];
function Servis() {
  return (
    <div className="container">
      <section className={classes.Services} id="services">
        <h2 className={classes.Services__title}>Услиги</h2>
        <p>
          Оперативное решение всех проблем и устранение поломок. Компания
          Podpitka.kg . и её специалисты оказывают широкий спектр услуг,
          связанных с сантехническими работами. Наш слесарь сантехник в Алмате
          работает круглые сутки и без выходных и решает любые проблемы,
          касающиеся канализации, водоснабжения и отопления.
        </p>

        <p className={classes.Services__left}>
          Рано или поздно в квартире начинает предательски выходить из строя
          водопровод или канализация. Человеку, ни разу не сталкивающемуся с
          подобными проблемами, сложно разобраться во всем самостоятельно. По
          этому появилась помощь вызов круглосуточно мастера на дом.
        </p>
        <p className={classes.Services__left}>
          Рано или поздно в квартире начинает предательски выходить из строя
          водопровод или канализация. Человеку, ни разу не сталкивающемуся с
          подобными проблемами, сложно разобраться во всем самостоятельно. По
          этому появилась помощь вызов круглосуточно мастера на дом.
        </p>
        <div className={classes.CardList}>
          {cards.map((card) => (
            <CardItem card={card} key={card.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Servis;
