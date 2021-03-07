import './App.css';
import About from './About'
import Contact from './Contact';
import {useState} from 'react'
import Users from './Users'
import CreateUser from './Createuser';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'


function App() {
  const [name,setName]= useState('Pranshu')
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"><Link to="/about">About</Link></Nav.Link>
          <Nav.Link href="#features"><Link to="/contact">Contact</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link to="/user-list">Users</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link to="/create-user">Create User</Link></Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/user-list">
            <Users />
          </Route>
          <Route path="/create-user">
            <CreateUser />
          </Route>
      </Switch>
        
        
        
        
        {/* <About name={name} /> */}
        {/* <Contact name={name}  /> */}
        {/* <button onClick={()=>{setName("Pranshu Sharma")}}>Update Name</button> */}
        {/* <Users /> */}
        {/* <CreateUser /> */}
      </Router>
    </div>
  );
}

export default App;
