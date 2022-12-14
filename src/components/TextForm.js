import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Button Clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("Button Clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text,setText] = useState("")

  return (
    <>
        <div className="container">
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">
            <h1>{props.heading}</h1>
            </label>
            <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
            ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary:</h2>
            <p>Character: {text.length}</p>
            <p>Words: {text.split(" ").length}</p>
            <p>Reading Time: {0.008 * text.split(" ").length} Minutes</p>
        </div>
    </>
  );
}
