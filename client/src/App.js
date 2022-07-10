import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Login } from './components';
import Home from './components/Home';
import { useState } from 'react';
import { useEffect } from 'react';
import { app } from './config/firebase.config';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function App() {
  
  const firebaseAuth =getAuth(app);
  
  const navigate = useNavigate();

  
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth")==="true");

  useEffect(()=>{
    firebaseAuth.onAuthStateChanged((userCred)=>{
      if(userCred){
        userCred.getIdToken().then((token)=>{
          console.log(token)
        })
      }else{
        setAuth(false);
        window.localStorage.setItem("auth","false");
        navigate('/login')
      }
    })
  },[])
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-primary ">
    <Routes>
      <Route path="/login" element={<Login setAuth={setAuth}/>} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
