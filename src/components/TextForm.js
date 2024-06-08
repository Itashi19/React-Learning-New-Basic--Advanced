import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  //this functions keeps the state of the changes we are doing

  //event is an object
  //text is my state variable
  const handleChange = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  return (
    <>
      <div class="container">
        <h1>{props.heading}</h1>
        <div className="form-group">
          <label for="mytext">Example textarea</label>
          <textarea
            className="form-control"
            value={text}
            id="mytext"
            onChange={handleChange}
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length}words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
