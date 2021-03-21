import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './components/users/users'
import Assets from './components/assets'
import Navigation from './components/navigation'  
import { Container } from 'react-bootstrap'
import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui/dist/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Home() {
  return <h2>Welcome</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
  <Router>
    <Navigation />
    <Container fluid="md">
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/assets">
            <Assets />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Container>

  </Router>
  );
}


// function Users() {
//   return <h2>Users</h2>;
// }

// export default App;
export default withAuthenticator(App, 
  { includeGreetings: true });