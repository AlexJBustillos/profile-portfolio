import { BrowserRouter, Route } from 'react-router-dom'

import Profile from './components/Profile'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import ProfileDetails from './components/ProfileDetails'
import './App.css';


function App() {
  const projects = [
    {
      name: 'Keep Up',
      id: 1,
      description: 'Game developed using vanilla JS',
      link: 'https://alexjbustillos.github.io'
    },
    {
      name: 'Loud and Green',
      id: 2,
      description: 'App developed using Node, Express, PostgreSQL',
      link: 'https://loud-and-green.herokuapp.com'
    }
  ]
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />

      <Route 
        path="/" 
        exact 
        render={() => { return <Profile
        projects={projects}/>
        }}
      />
      <Route
        path="/:id"
        render={(routeInfo) => {
          const id = routeInfo.match.params.id
          console.log(id);
          const targetProfile = projects.find((p) => p.id === parseInt(id))
          return <ProfileDetails project={targetProfile} />
        }}
      />
      <Route path="/about" exact component=
      {About} />
      <Route path="/contact"  exact component=
      {Contact} />
    </div>
    </BrowserRouter>
  );
}

export default App;
