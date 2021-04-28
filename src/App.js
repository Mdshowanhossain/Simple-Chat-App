import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.config';
import ChatRoom from './Components/ChatRoom/ChatRoom';
import LogIn from './Components/LogIn/LogIn';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Spinner from './Components/Spinner/Spinner';

const App = () => {
  const [currentRoom, setCurrentRoom] = useState("General")
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);

  }, []);

  return (
    <div className="app">
      {loading && <Spinner />}
      <Navbar
        user={user}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />

      <div className="content"> {user ? <ChatRoom currentRoom={currentRoom} /> : <LogIn />}  </div>

    </div>
  );
}

export default App;
