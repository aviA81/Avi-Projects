import './styles/App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Authentication from './Authentication';
import Message from './Message';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState();
  const [username, setUsername] = useState();
  return (
    <>
      <Header />
      <Message message={message} setMessage={setMessage}/>
      <Authentication message={message} setMessage={setMessage} username={username} setUsername={setUsername}/>
      <Outlet context={[username, setMessage]}/>
    </>
  );
}

export default App
