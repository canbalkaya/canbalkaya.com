import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Can Balkaya",

      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Blog", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],

      home: {
        title: "Can Balkaya",
        description: "This is my website.",
        text: "This is my website."
      },

      blog: {
        title: "About Me",
      },

      contact: {
        title: "Contact",
      }
    }
  }

  render() {
    return(
      <Router>
        <Container className = "p-0" fluid = { true }>
          <Navbar className = "border-bottom"  bg = "transparent" expand = "lg"> 
            <Navbar.Brand>Can Balkaya</Navbar.Brand>
            <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle"/>
            <Navbar.Collapse id = "navbar-toggle">
              <Nav className = "ml-auto">
                <Link className = "nav-link" to = "/">Home</Link>
                <Link className = "nav-link" to = "/blog">Blog</Link>
                <Link className = "nav-link" to = "/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
