import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Dashboard, Login } from './components';
import Home from './components/Home';
import { useState } from 'react';
import { useEffect } from 'react';
import { app } from './config/firebase.config';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import { validateUser } from './api';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';


function App() {
  
  const firebaseAuth =getAuth(app);
  
  const navigate = useNavigate();

  const [{user}, dispatch] = useStateValue();
  

  
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth")==="true");

  useEffect(()=>{
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          // console.log(token);
          window.localStorage.setItem("auth", "true");
          validateUser(token).then((data) => {
            dispatch({
              type: actionType.SET_USER,
              user: data,
            });
            // console.log(data)
          });
        });
      }
      else{
        setAuth(false);
        window.localStorage.setItem("auth","false");
        dispatch({
          type:actionType.SET_USER,
          user:null
        })
        navigate('/login')
      }
    })
  },[])
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="flex items-center justify-center h-auto min-w-[680px] bg-primary ">
    <Routes>
      <Route path="/login" element={<Login setAuth={setAuth}/>} />
      <Route path="/*" element={<Home />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
    </div>
    </AnimatePresence>
  );
}

export default App;
