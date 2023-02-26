import * as React from 'react';
import './test.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
let symptoms = [];


export default function SelectOtherProps() {
  
  const [age1,setAge1]=React.useState('');
  const [age2,setAge2]=React.useState('');
  const [age3,setAge3]=React.useState('');
  const [age4,setAge4]=React.useState('');
  const [age5,setAge5]=React.useState('');

  const handleChange1=(event)=>{
    setAge1(event.target.value);
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    symptoms.push(event.target.value);
    }
  }
  }

  const handleChange2=(event)=>{
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    setAge2(event.target.value);
    symptoms.push(event.target.value);
  }
}
}
  const handleChange3=(event)=>{
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    setAge3(event.target.value);
    symptoms.push(event.target.value);
  }
}
  }

  const handleChange4=(event)=>{
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    setAge4(event.target.value);
    symptoms.push(event.target.value);
  }
}
  }

  const handleChange5=(event)=>{
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    setAge5(event.target.value);
    symptoms.push(event.target.value);
    // console.log(symptoms)
  }
}
  }

  const submitClick=()=>{
    let SubmitArr=[...new Set(symptoms)];//...= Spread Operator    new Set(arr) is a new array containing the values of the initial array but duplicates removed . Spread Operator then converts it back to array
    symptoms=SubmitArr;
    console.log(symptoms);
  }



  const options = ["Rash","cough","Fever","Acidity","Stomach Pain"];
  const  op= options.map((item) =>
           <option value={item}>{item}</option>);

  return (
    <>
    
      <div className="message">
        <h1>Enter your Symtoms : </h1>
      </div>

    <div className="container123">

      <div className="container21">
      <div className="inside">
      {/* <FormControl sx={{ m: 1, minWidth: 220 }} size="small"> */}
      <FormControl sx={{ m: 1, minWidth: 320,backgroundColor:'white'}}> 
      <InputLabel id="demo-select-small">Symptom_1</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age1}
        label="Symptom_1"
        onClick={handleChange1}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {op}
      </Select>
    </FormControl>
    </div>

    <div className="inside">
    <FormControl sx={{ m: 1, minWidth: 320,backgroundColor:'white' }}> 
      <InputLabel id="demo-select-small">Symptom_2</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age2}
        label="Symptom_2"
        onClick={handleChange2}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {op}
      </Select>
    </FormControl>
    </div>

    <div className="inside">
    <FormControl sx={{ m: 1, minWidth: 320,backgroundColor:'white' }}> 
      <InputLabel id="demo-select-small">Symptom_3</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age3}
        label="Symptom_3"
        onClick={handleChange3}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {op}
      </Select>
    </FormControl>
    </div>

    <div className="inside">
    <FormControl sx={{ m: 1, minWidth: 320 ,backgroundColor:'white'}}> 
      <InputLabel id="demo-select-small">Symptom_4</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age4}
        label="Symtom_4"
        onClick={handleChange4}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {op}
      </Select>
    </FormControl>
    </div>

    <div className="inside">
    <FormControl sx={{ m: 1, minWidth: 320,backgroundColor:'white' }}> 
      <InputLabel id="demo-select-small">Symptom_5</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age5}
        label="Symptom_5"
        onClick={handleChange5}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {op}
      </Select>
    </FormControl>
    </div>

   </div>

      <div className="submit">
      <button type="button" id="b1" onClick={submitClick}>Submit</button>
      </div>

    </div>
    
    </>
  );
}