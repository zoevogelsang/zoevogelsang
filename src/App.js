import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {section: "home"};

    // This binding is necessary to make `this` work in the callback
    this.changeSection = this.changeSection.bind(this);
  }

  changeSection(newSection){
    if (this.state.section != newSection){
      this.setState(state => ({
        section: newSection
      }));
    }
  }

  render(){
    return (
      <div className="App">

        <div>
          <div id="sidebar">
                  <div id="header" onClick={() => this.changeSection("home")} > <Header/> </div>
                  <div id="navbar">
                    <div class="button" onClick={() => this.changeSection("about")}>  about  </div>
                    <div class="button" onClick={() => this.changeSection("cs")}>  projects  </div>
                    {/* <div class="button" onClick={() => this.changeSection("design")}>  design  </div>
                    <div class="button" onClick={() => this.changeSection("art")}>  fine art  </div> */}
                  </div>
            </div>
        </div>
        <div>
          <div id="content"><div class="container">
            {this.state.section=="home" ? <Homepage/> : ""}
            {this.state.section=="about" ? <AboutPage/> : ""}
            {this.state.section=="cs" ? <CSPage/> : ""}
            {this.state.section=="design" ? <DesignPage/> : ""}
            {this.state.section=="art" ? <ArtPage/> : ""}
          </div></div>
        </div>
      </div>
    );
  }
}

export default App;


class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {font: "Modak"};

    // This binding is necessary to make `this` work in the callback
    this.changeFont = this.changeFont.bind(this);
  }

  changeFont(){
    if (this.state.font != "Modak"){
      this.setState(state => ({
        font: "Modak"
      }));
    }
    else {
      this.setState(state => ({
        font: "Futura"
      }));
    }
  }

  render(){
    return(
      <span onMouseEnter={this.changeFont} style={{fontFamily: this.state.font}}> <img id="name" src='/img/name.png'/> </span>
    );
  }
}


class Homepage extends Component{
  render(){
    return (
      <div id="home">
      <img id="homeimg" src='/img/home_img.jpg'/>
      </div>
    );
  }
}


class AboutPage extends Component{
  render(){
    return (
      <div>
        Zoe Vogelsang is from New York City. She is studying computer science, and is currently transferring from the University of Southern California to Barnard College of Columbia University. 
      </div>
    );
  }
}
class CSPage extends Component{
  render(){
    return (
      <div>
        <h1>Projects:</h1>
        <ul>
          <li> <h2> <a href="https://github.com/zoevogelsang/ViterbiSchedulePlanner" target="_blank">USC Viterbi Course Planner</a> </h2>
            <div> A Java-based web application with login functionality that allows Viterbi students to view 
              course requirements and create a four-year course plan. Uses a 
              drag and drop front-end which saves course plan to MongoDB 
              database.</div> <div> A Group project for CS201: Principles of Software Design -- 
                I primarily led the front-end design, implemented drag
                and drop front-end using DragulaJS, and designed the
                  JSON format for saving course plan data to MongoDB.
            </div> 
          </li>

          <li> <h2> Bookwork - Book Search Site  </h2>
            <div> A Java based web application using MySQL database with login functionality that
            allows users to search for books using Google Books API (by author, title, ISBN and publisher), “favorite” books
              and access favorites list on user profile.</div> <div>Individual class project for CS201: Principles of Software Design. </div> </li>
          
          <li> <h2><a href="https://zoevogelsang.github.io/" target="_blank">Art Portfolio Website</a> </h2>
            <div>A personal art portfolio website -- created as a means to self-teach HTML, CSS, and JavaScript </div>
          </li>

          <li> <h2><a href="https://github.com/zoevogelsang/social-network" target="_blank">Twitter-like Social Network</a> </h2>
            <div>A C++ implementation of the data structures for Twitter-like social network. Uses a command line interface and saves data locally to text files.</div>
          </li>

        </ul>

        <h1>Related Coursework: </h1>
        <ul>
          <li>Data Structures and Object Oriented Design </li>
          <li>Discrete Mathematics</li>
          <li>Introduction to Software Engineering</li>
          <li>Introduction to Algorithms and the Theory of Computing</li>
          <li>Introduction to Computer and Network Security</li>
        </ul>

        {/* <h1>Work Experience: </h1>
        <ul>
          <li> <a href="https://github.com/zoevogelsang/ViterbiSchedulePlanner">USC Viterbi Course Planner</a></li>

        </ul> */}
      </div>
    );
  }
}

class DesignPage extends Component{
  render(){
    return (
      <div>
        - Bunker zine
        - Design For change assignment
      </div>
    );
  }
}

class ArtPage extends Component{
  render(){
    return (
      <div>
        <img src='/img/art/1.jpg'></img>
      </div>
    );
  }
}





