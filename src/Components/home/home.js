import React from 'react';
import './home.css';
import Main from "../main/main"
import Header from '../header/header';
import Footer from '../footer/footer';


function Home() {
  return (
    <div className="home-body">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default Home;
