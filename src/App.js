import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import resumeData from './resumeData'

// import '../public/css/default.css'


class App extends Component {
  render() {
  
  // const projects = [
  //   {
  //     name: 'Keep Up',
  //     id: 1,
  //     description: 'Game developed using vanilla JS',
  //     link: 'https://alexjbustillos.github.io'
  //   },
  //   {
  //     name: 'Loud and Green',
  //     id: 2,
  //     description: 'App developed using Node, Express, PostgreSQL',
  //     link: 'https://loud-and-green.herokuapp.com'
  //   }
  // ]
    return (
      
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>

      </div>
      
    );
  }
}
export default App; 
