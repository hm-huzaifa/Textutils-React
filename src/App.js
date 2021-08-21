import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const toggleDarkMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#232526";
      showAlert("Dark Mode Enabled...", "success");
      // setInterval(() => {
      //   document.title = "TextUtile - Dark Mode";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install TextUtile now";
      // }, 1500);
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled...", "success");
    }
  };
  const toggleMoonlitMode = () => {
    if (moonlitMode === "light") {
      setMoonlitMode("dark");
      document.body.style.backgroundColor = "#203A43";
      showAlert("Moonlit Astroid Mode Enabled...", "success");
    } else {
      setMoonlitMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Moonlit Astroid Mode Disabled...", "success");
    }
  };

  const [darkMode, setDarkMode] = useState("light");
  const [moonlitMode, setMoonlitMode] = useState("light");
  const [alert, setAert] = useState(null);
  const showAlert = (message, type) => {
    setAert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAert(null);
    }, 3000);
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        darkMode={darkMode}
        moonlitMode={moonlitMode}
        toggleDarkMode={toggleDarkMode}
        toggleMoonlitMode={toggleMoonlitMode}
      />
      <Alert alert={alert} />
      {/* 
        Exact/Partial Matching 
        /user --> component 1
        /user/home --> component 2
         */}
      {/* <Switch> */}
      {/* <Route exact path="/"> */}
      <TextForm
        heading="Enter Text to Analysis"
        darkMode={darkMode}
        moonlitMode={moonlitMode}
        showAlert={showAlert}
      />
      {/* </Route> */}
      {/* // <Route exact path="/about"> */}
      {/* // <About darkMode={darkMode} moonlitMode={moonlitMode} /> */}
      {/* // </Route> */}
      {/* // </Switch> */}
      {/* // </Router> */}
    </>
  );
}

export default App;
