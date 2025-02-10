import React, { useState, useEffect } from 'react';
import './App.css'
import conf from './conf/config';
import { useDispatch } from 'react-redux';
import authService from './appwrite/authService';
import {login, logout} from "./store/authSlice";
import { Footer, Header } from './components';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch =  useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error.message);
        dispatch(logout()); // Ensure app is in logged-out state
      })
      .finally(() => setLoading(false));
  }, []);
  
  

 return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
      {/* Todo:<Outlet/> // dont forget to add this. */}
      </main>
      <Footer />
    </div>
  </div>
 ): null
}

export default App
