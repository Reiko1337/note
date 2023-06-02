import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Authorization from './pages/Authorization';
import Registration from './pages/Registration';
import Message from './components/Message';
import { useAppDispatch } from './redux/store';
import { useSelector } from 'react-redux';
import { selectMessage, clearIsMessage } from './redux/slices/messageSlice';

function App() {
  const messageInfo = useSelector(selectMessage);

  return (
    <>
      <Header />
      {messageInfo.isMessage ? (
        <Message typeMessage={messageInfo.typeMessage} message={messageInfo.message} />
      ) : null}
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-in" element={<Authorization />} />
          {/* <Route path="/sign-up" element={<Registration />} /> */}
          <Route path="/sign-up" element={<h1>dasdad</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
