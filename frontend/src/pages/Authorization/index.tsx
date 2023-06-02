import React from 'react';
import styles from './Authorization.module.css';
import infoSvg from '../../assets/img/info.svg';
import AuthorizationForm from '../../components/AuthenticationForm/AuthorizationForm';

const Authorization: React.FC = () => {
  return (
    <section className="note">
      <div className="container">
        <div className={styles.root}>
          <img src={infoSvg} alt="logo" />
          <div className={styles.root__container}>
            <h3 className={styles.title}>Авторизация</h3>
            <AuthorizationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authorization;
