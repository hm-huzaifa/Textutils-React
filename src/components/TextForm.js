import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpper = () => {
    // console.log("'Convert to UpperCase' clicked on " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  // Capitalizing the Text
  const handleCap = () => {
    const textArr = text.toLowerCase().split(". ");
    for (var i = 0; i < textArr.length; i++) {
      textArr[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1);
    }
    const newText = textArr.join(". ");
    setText(newText);
    props.showAlert("Text has been Capitalized...!", "success");
  };

  // Coping Text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard...!", "success");
  };

  // Handling extra spaces
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces has been Removed...!!", "success");
  };

  // Clearing Text
  const handleClear = () => {
    setText("");
    props.showAlert("TEXT CLEARED...!!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "Changing Text"; // Wrong way to change the state
  //   setText("Changing Text"); // Correct way to cha ge the state

  const btnStyleEven = {
    color:
      props.darkMode === "dark" || props.moonlitMode === "dark"
        ? "#141E30"
        : "#d7d2cc",
    backgroundColor:
      props.darkMode === "dark" || props.moonlitMode === "dark"
        ? "#d7d2cc"
        : "#304352",
    border: "none",
  };
  const btnStyleOdd = {
    color:
      props.darkMode === "dark" || props.moonlitMode === "dark"
        ? "#d7d2cc"
        : "#141E30",
    backgroundColor:
      props.darkMode === "dark" || props.moonlitMode === "dark"
        ? "#141E30"
        : "#d7d2cc",
    border: "none",
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color:
            props.darkMode === "dark" || props.moonlitMode === "dark"
              ? "white"
              : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor:
                props.darkMode === "dark" || props.moonlitMode === "dark"
                  ? "#414345"
                  : "white",
              color: props.darkMode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-dark mx-2"
          style={btnStyleOdd}
          onClick={handleUpper}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-secondary mx-2"
          style={btnStyleEven}
          onClick={handleLower}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-dark mx-2"
          style={btnStyleOdd}
          onClick={handleCap}
        >
          Capitalize Text
        </button>
        <button
          className="btn btn-secondary mx-2"
          style={btnStyleEven}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-dark mx-2"
          style={btnStyleOdd}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-danger mx-2"
          style={btnStyleEven}
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color:
            props.darkMode === "dark" || props.moonlitMode === "dark"
              ? "white"
              : "black",
        }}
      >
        <h1>Your Text Summary</h1>
        <b>
          <p>
            {text.split(" ").length} Words and {text.length} characters.
          </p>
          <p>{0.008 * text.split(" ").length} Minutes are reqired to read.</p>
        </b>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
