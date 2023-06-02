import React from 'react';
import styles from './Registration.module.css';
import infoSvg from '../../assets/img/info.svg';
import RegistrationForm from '../../components/AuthenticationForm/RegistrationForm';
import { useNavigate } from 'react-router-dom';
import { selectUser, clearIsRedirect } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { setMessage } from '../../redux/slices/messageSlice';

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useSelector(selectUser);

  React.useEffect(() => {
    if (userInfo.is_redirect.status) {
      dispatch(
        setMessage({
          isMessage: true,
          typeMessage: 'success',
          message: 'Вы успешно зарегистрировались.',
        }),
      );
      dispatch(clearIsRedirect());

      return navigate('/sign-in');
    }
  }, [userInfo]);

  return (
    <section className="note">
      <div className="container">
        <div className={styles.root}>
          <img src={infoSvg} alt="logo" />
          <div className={styles.root__container}>
            <h3 className={styles.title}>Регистрация</h3>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
