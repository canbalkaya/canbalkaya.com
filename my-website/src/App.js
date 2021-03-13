import React from "react";
import { BrowserRouter as Router, /* Route, Link */ } from "react-router-dom";
import Container from "react-bootstrap/Container";
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
        <Container fluid = { true }>
          <p>Hellow, World!</p>
        </Container>
      </Router>
    );
  }
}

export default App;
