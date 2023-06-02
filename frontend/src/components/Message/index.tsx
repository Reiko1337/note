import React from 'react';
import styles from './Message.module.css';
import deleteBtnSvg from '../../assets/img/delete_btn.svg';
import { useAppDispatch } from '../../redux/store';
import { clearIsMessage } from '../../redux/slices/messageSlice';

type MessageProps = {
  typeMessage: string;
  message: string;
};

const Message: React.FC<MessageProps> = ({ typeMessage, message }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(clearIsMessage());
    }, 5000);
  }, []);

  return (
    <div className={styles.message}>
      <div className="container">
        <div className={`${styles.message__container} ${styles[typeMessage]}`}>
          <p className={styles.text}>{message}</p>
          <img
            className={styles.delete__btn}
            src={deleteBtnSvg}
            onClick={() => dispatch(clearIsMessage())}
            alt="delete-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
