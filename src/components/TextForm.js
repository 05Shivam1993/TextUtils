import React, { useState }  from  'react'
import ReactTooltip from "react-tooltip";

export default function TextForm(props) {
   const [text, setText] = useState("")
   const onChangeHandle = (event)=>{
        setText(event.target.value)
   }
   const convertToUpper = ()=>{
       props.showAlert("Converted to UpperCase","success");
       let newText = text.toUpperCase();
       setText(newText);
   }
   const convertToLower = ()=>{
    props.showAlert("Converted to LowerCase","success");
    let newText = text.toLowerCase();
    setText(newText);
}
    const convertToCapitalize = ()=>{
        props.showAlert("Text has been Capitalize","success");
        let newText = text.split(" ");
        let cap_text= "";
        for (let i = 0; i < newText.length; i++) {
            const lower = newText[i].toLowerCase();
            cap_text += newText[i].charAt(0).toUpperCase() + lower.slice(1) + " ";
          }
        setText(cap_text);
    }
    const clearText = ()=>{
        props.showAlert("Text has been removed","success");
        let newText = "";
        setText(newText);
    }
    const copyText = ()=>{
        props.showAlert("Text has been copied","success");
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleSpace = ()=>{
        props.showAlert("Extra spaces has been removed","success");
        let new_text = text.replace(/\s+/g,' ');;
        setText(new_text);
    }
    
    return (
        <>
        <div className="container my-4" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>Text Analyzer</h1>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={onChangeHandle}  style={{color:props.mode === 'dark'?'white':'#042743',backgroundColor:props.mode === 'dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" data-tip data-for="upper" onClick={convertToUpper}>Upper</button>
        <ReactTooltip id="upper" place="top" effect="solid" id="upper">Convert into uppercase</ReactTooltip>
        <button className="btn btn-success mx-1" data-tip data-for="lower" onClick={convertToLower}>Lower</button>
        <ReactTooltip id="upper" place="top" effect="solid" id="lower"> Convert into lowercase</ReactTooltip>
        <button className="btn btn-warning mx-1 my-2" data-tip data-for="title" onClick={convertToCapitalize}>Capitalize</button>
        <ReactTooltip id="upper" place="top" effect="solid" id="title">Convert into titlecase</ReactTooltip>
        <button className="btn btn-danger mx-1 my-2" data-tip data-for="clear" onClick={clearText}>Clear</button>
        <ReactTooltip id="upper" place="top" effect="solid" id="clear">Clear all text</ReactTooltip>
        <button className="btn btn-secondary mx-1 my-2" data-tip data-for="copy" onClick={copyText}>Copy</button>
        <ReactTooltip id="upper" place="top" effect="solid" id="copy"> Copy the whole text</ReactTooltip>
        <button className="btn btn-info mx-1 my-2" data-tip data-for="space" onClick={handleSpace}>Spaces</button>
        <ReactTooltip id="upper" place="top" effect="solid" id="space">Remove extra spaces</ReactTooltip>
        </div>
        <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
            <h3>Text Summary</h3>
            <p>Total Number of words is {text.split(" ").length - 1} and characters is {text.length}</p>
            <p>{0.008 * text.split(" ").length} minutes required to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text:"Enter text in the box to preview it here" }</p>
        </div>
        </>
    )
}
