import React, {useState} from 'react'

export default function TextFrom(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState(' ');
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading} </h1>

<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="5"></textarea>
</div>
<button className="buttonbtn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
<button className="buttonbtn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase </button>

    </div>
    <div className="container  my-3" >
    
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
