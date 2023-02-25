import React,{useState} from 'react';
import './test.css';

let symptoms = [""]

function Test() {
  const [value1,setValue1]=useState();
  const [value2,setValue2]=useState();
  const [value3,setValue3]=useState();
  const [value4,setValue4]=useState();
  const [value5,setValue5]=useState();

  const options = ["Rash","cough","Fever","Acidity","Stomach Pain"];
  const  op= options.map((item) =>
           <option value={item}>{item}</option>);
  const handleOnChange1=(event)=>{
    setValue1(event.target.value);
    symptoms.push(event.target.value);
  }
  const handleOnChange2=(event)=>{
    setValue2(event.target.value);
    symptoms.push(event.target.value);
  }
  const handleOnChange3=(event)=>{
    setValue3(event.target.value);
    symptoms.push(event.target.value);
  }
  const handleOnChange4=(event)=>{
    setValue4(event.target.value);
    symptoms.push(event.target.value);
  }
  const handleOnChange5=(event)=>{
    setValue5(event.target.value);
    symptoms.push(event.target.value);
    console.log(symptoms)

  }

  return (
    <>
      <div className="container3">
      <div className="container4">
        <div className="inside">
       <select value={value1} onChange={handleOnChange1}>
       {op};
       </select>
       </div>

       <div className="inside">
       <select value={value2} onChange={handleOnChange2}>
       {op};

       </select>
       </div>

       <div className="inside">
       <select value={value3} onChange={handleOnChange3}>
       {op};
       </select>
       </div>

       <div className="inside">
       <select value={value4} onChange={handleOnChange4}>
       {op};
       </select>
       </div>

       <div className="inside">
       <select value={value5} onChange={handleOnChange5}>
       {op};
       </select>
      </div>
       </div>
       </div>
    </>
  )
}




export default Test;

