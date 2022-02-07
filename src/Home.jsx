import React from 'react';
import Navv from './Navv';
import video from "./v1.mp4";
import "./index.css";
import SignInForm from './SignInForm';
import AuthContextProvider, { useAuth } from './contexts/AuthContext';

function Home() {
  const {currentUser}=useAuth()
  return <AuthContextProvider><div>
  <Navv></Navv>
  <video src={video} className="vid" autoplay="true" loop="infinite" />
  <SignInForm></SignInForm>
  </div>
  </AuthContextProvider>
}

export default Home;
