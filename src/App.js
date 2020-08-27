import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Course from './components/Course/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div>
       <Header></Header>
        <Banner></Banner>
       <Course></Course>
   
    </div>
  );
}

export default App;
