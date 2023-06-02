import React from 'react';
import Note from '../../components/Note';
import styles from './Main.module.css';
import { useAppDispatch } from '../../redux/store';
import { fetchNote, selectNote } from '../../redux/slices/noteSlice';
import { useSelector } from 'react-redux';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const noteItems = useSelector(selectNote);

  React.useEffect(() => {
    dispatch(fetchNote());
  }, []);

  return (
    <section className="note">
      <div className="container">
        <div className={styles.note__container}>
          {noteItems?.map((note) => (
            <Note key={note.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
