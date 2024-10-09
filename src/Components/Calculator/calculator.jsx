import React, { useState } from "react";
import './calculator.css';
import backspace_icon from '../Assets/backspace_icon_48.png';

function Calculator() {
    const [display, setDisplay] = useState('');
    // const [result, setResult] = useState('');

    function handleClick(e) {
        const value = e.target.name;
        setDisplay(display + value);
    }

    function handleEqual() {
        console.log(display);
    }

    function handleBackspace() {
        setDisplay(display.slice(0, -1));
    }

    function handleAC() {
        setDisplay("");
    }

    return(
        <div className="container">
            <div className="display-container">
                <div className="display-box">{display}</div>
                <button className="backspace-button" name="backspace" onClick={handleBackspace}>
                    <img src={backspace_icon} alt="" width="25" height="25" onClick={handleBackspace}/>
                </button>
            </div>
            <div className="result-container">
                <div className="result-box">Result</div>
                <button className="AC-button" name="AC" onClick={handleAC}>AC</button>
            </div>
            <div className="button-container">
                <button className="Number7" name="7" onClick={handleClick}>7</button>
                <button className="Number8" name="8" onClick={handleClick}>8</button>
                <button className="Number9" name="9" onClick={handleClick}>9</button>
                <button className="DivisionOperator" name="/" onClick={handleClick}>/</button>
            </div>
            <div className="button-container">
                <button className="Number4" name="4" onClick={handleClick}>4</button>
                <button className="Number5" name="5" onClick={handleClick}>5</button>
                <button className="Number6" name="6" onClick={handleClick}>6</button>
                <button className="MultiplicationOperator" name="*" onClick={handleClick}>*</button>
            </div>
            <div className="button-container">
                <button className="Number1" name="1" onClick={handleClick}>1</button>
                <button className="Number2" name="2" onClick={handleClick}>2</button>
                <button className="Number3" name="3" onClick={handleClick}>3</button>
                <button className="SubtractionOperator" name="-" onClick={handleClick}>-</button>
            </div>
            <div className="button-container">
                <button className="Number0" name="0" onClick={handleClick}>0</button>
                <button className="Dot" name=".">.</button>
                <button className="EqualSign" name="=" onClick={handleEqual}>=</button>
                <button className="AdditionOperator" name="+" onClick={handleClick}>+</button>
            </div>
        </div>
    );
}

export default Calculator;