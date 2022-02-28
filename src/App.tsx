import React from "react";
import Header from "./components/Header";
import Hello from "./components/Hello"
import Info from "./components/Info";
import Skills from "./components/Skills";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Project from './components/Project';
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <Hello />
      {/* info */}
      <Info />
      {/* skills */}
      <Skills />
      {/* project */}
      <Project />
      {/* work experience */}
      <Experience />
      {/* contact */}
      <Contact />
    </div>
  );
}

export default App;
