import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText("You have clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to upper case!", "success");
  };

  const handleDownClick = () => {
    setText("You have clicked on handleDownClick");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lower case!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed", "success");
}

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to clipboard", "success");
}

const handleClearText = () => {

    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div className="container my-4" style={{ color: props.mode==='dark'? 'white': 'black'}}>
        <h2>
          <strong>{props.heading}</strong>
        </h2>
        <div className="mb-3">
          <label htmlFor="myBox"></label>
          <textarea
            className="form-control"
            style={{ backgroundColor: props.mode==='dark'? 'black': 'white',color: props.mode==='dark'? 'white': 'black',border: props.mode==='dark'?'1px solid white': '1px solid black' }}
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your text here"
            id="myBox"
            rows="8"
          ></textarea>
          <hr />
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            Upper case
          </button>
          <button
            className="btn btn-primary mx-2 my-2 "
            onClick={handleDownClick}
          >
            Lower case
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove spaces</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
        </div>
        <hr />
        <div className="container my-2">
            <h2><strong>Your text summary</strong></h2>
            <hr />
            <p>{text.split(" ").length - 1} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read per word</p>
            <h2><strong>Preview</strong></h2>
            <hr />
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>

        </div>
    </div>
    </>
  );
}
