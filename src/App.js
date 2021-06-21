import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { AuthContext, FirebaseContext } from './store/Context'
import Post from './store/PostContext'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import LoginPage from './Pages/Login';
import Home from './Pages/Home';
import Signuppage from './Pages/Signup';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Myads from './Pages/Myads';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signuppage/>
        </Route>
        <Route path='/Login'>
          <LoginPage/>
        </Route>
        <Route path='/Create'>
          <Create/>
        </Route>
        <Route path='/Post'>
          <ViewPost/>
        </Route>
        <Route path='/myads'>
          <Myads/>
        </Route>
        
      </Router>
      </Post>
    </div>
  );
}

export default App;
