
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if(authUser){
        //user was logged in/ user just logged in  
        dispatch({
          type: 'SET_USER',
          user: authUser

        })
      }
      else{
        //user was logged out
        dispatch({
          type: 'SET_USER',
          user: null

        })
      }

    })

  }, [])
  return (
    <Router>
      <div className="app">
        
        <Routes>
        
        <Route path='/checkout' element = {[ <Header />,<Checkout /> ]} />
        <Route path='/login' element = {<Login />} />
        <Route path='/payment' element = {[<Header />, <Payment />]} />
        <Route path='/' element={[<Header /> ,<Home /> ]} />
       

        </Routes>
      
      
      {/*Home */}
       </div>
    </Router>
  );
}

export default App;
