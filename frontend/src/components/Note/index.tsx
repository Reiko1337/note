import React from 'react';
import styles from './Note.module.css';
import deleteBtnSvg from '../../assets/img/delete_btn.svg';
import { Link } from 'react-router-dom';

const Note: React.FC = () => {
  return (
    <div className={styles.note}>
      <div className={styles.btn_delete__container}>
        <img className={styles.delete__btn} src={deleteBtnSvg} alt="delete-btn" />
      </div>
      <div className={styles.noted__container}>
        <div className={styles.title_container}>
          <Link to="." className={styles.title}>
            Lorem ipsum dolor sit amet consectetu
          </Link>
          <p className={styles.date}>12/04/2021</p>
        </div>
        <div className={styles.tasks}>
          <div className={styles.tasks__container}>
            <input className={styles.checkbox} type="checkbox" />
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt fugit voluptatem id
              illum nobis dolorum.
            </p>
          </div>
          <div className={styles.tasks__container}>
            <input className={styles.checkbox} type="checkbox" />
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt fugit voluptatem id
              illum nobis dolorum.
            </p>
          </div>
        </div>
        <div className={styles.link__container}>
          <p className={styles.statys_count}>3/10</p>
          <Link className={styles.link_detail} to="/">
            Детально...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Note;
