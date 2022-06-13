import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={classes.Footer}>
      <ul>
        <li>
          <a href="https://www.instagram.com/accounts/login/?next=/tv/CeggPPYjhM1/">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://wa.me/message/47EN5KTX3B2HM1">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </li>{" "}
      </ul>
    </footer>
  );
}

export default Footer;
