import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import './App.css';

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Can Balkaya",

      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Blog", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],

      home: {
        title: "Can Balkaya",
        subTitle: "This is my website.",
        text: "This is my website."
      },

      blog: {
        title: "Blog",
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
            <Navbar.Brand> 
              <img className = "brandImage" src = "Logo.png" alt="logo" width = "70" height = "50"></img>
              <strong>Can Balkaya</strong>
            </Navbar.Brand>
            <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle"/>
            <Navbar.Collapse id = "navbar-toggle">
              <Nav className = "ml-auto">
                <Link className = "nav-link" to = "/">Home</Link>
                <Link className = "nav-link" to = "/blog">Blog</Link>
                <Link className = "nav-link" to = "/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path = "/" exact render = { () => <HomePage title = { this.state.home.title } subTitle = { this.state.home.subTitle } text = { this.state.home.text }/> }/>
          <Route path = "/blog" render = { () => <BlogPage title = { this.state.blog.title }/> }/>
          <Route path = "/contact" render = { () => <ContactPage title = { this.state.contact.title }/> }/>

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
