import styles from "./Components.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <span className={styles.header__logo}><Link to={"/"}>movie</Link></span>
          <ul className={styles.header__menu}>
            <li className={styles.header__item}>
              <Link to={"/movies"}>Фильмы</Link>
            </li>
            <li className={styles.header__item}>
              <Link to={"/series"}>Сериалы</Link>
            </li>
            <li className={styles.header__item}>
              <Link to={"/caroons"}>Мультфильмы</Link>
            </li>
          </ul>
          <div className={styles.header__search}>
            <input type="text" placeholder="Поиск..." />
            <div className={styles.header__btn}>Найти</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
