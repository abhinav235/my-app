import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpcase = () => {
    let newvar = text.toUpperCase();
    setText(newvar);
    props.alertSetmeth("Converted to Uppercase!","Success");
  };
  const handleLowcase = () => {
    let newvar = text.toLowerCase();
    setText(newvar);
    props.alertSetmeth("Converted to Lowercase!","Success");
  };
  const onchangemethod = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color :props.mode==='dark'?'white':'black' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onchangemethod}
            id="myBox"
            rows="8"
            style={{backgroundColor :props.mode==='dark'?'grey':'white',color :props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpcase}>
          Convert to upper
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowcase}>
          Convert to lower
        </button>
      </div>
      <div className="container" style={{color :props.mode==='dark'?'white':'black'}} >
        <h1>your text sumary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08* text.split(" ").length}Minutes read</p>
        <h1>Preview</h1>
        <p>{text.length>0? text:'Enter text for preview...'}</p>
      </div>
  
    </>
  );
}
