import React from "react";
import { BrowserRouter as Router, /* Route, Link */ } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './App.css';
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

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
          <Navbar> 
            <Navbar.Brand>Can Balkaya</Navbar.Brand>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
