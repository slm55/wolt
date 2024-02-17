import { useState } from "react";
function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [operator, setOperator] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const calculate = () => {
        if (operator === "+") {
            setResult(parseFloat(num1) + parseFloat(num2));
        } else if (operator === "-") {
            setResult(parseFloat(num1) - parseFloat(num2));
        } else if (operator === "*") {
            setResult(parseFloat(num1) * parseFloat(num2));
        } else if (operator === "/") {
            setResult(parseFloat(num1) / parseFloat(num2));
        }
    }

    const checkInputs = () => {
        if (num1 !== "" && num2 !== "" && operator !== "") {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }

  return (
    <div className="calculator">
      <input type="number" 
      value={num1} 
      onChange={(event) => {
        setNum1(event.target.value)
        }}
    onInput={checkInputs}
      />
      <input type="text" 
      value={operator}
      onChange={(event) => {
        setOperator(event.target.value)
        }}
        onInput={checkInputs}
      />
      <input type="number" 
      value={num2} 
      onChange={(event) => {
        setNum2(event.target.value)
        }}
        onInput={checkInputs}
      />
      <button disabled={buttonDisabled} onClick={calculate}>Calculate</button>
      <input type="number" value={result} />
    </div>
  );
}

export default Calculator;
