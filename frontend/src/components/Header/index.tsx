import React from 'react';
import logoSvg from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link to="/">
            <img src={logoSvg} alt="logo" />
          </Link>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <Link to="/sign-up" className={styles.nav__btn}>
                Регисрация
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to="/sign-in" className={styles.nav__btn}>
                Вход
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
