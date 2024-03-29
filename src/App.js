
import "./App.css"
import { useEffect, useState } from 'react';
import UpcomingIcon from '@mui/icons-material/Upcoming';

function App() {
  // const [valueOne , setValueOne] =useState(undefined);
  // const [valueTwo , setValueTwo] =useState(undefined);
  // const [valueThree , setValueThree] =useState(undefined);
  // const [valueFour , setValueFour] =useState(undefined);

  const [values , setValues] = useState({
    input1 : "",
    input2 : "",
    input3 : "",
    input4 : "",
    
  })
  const [cursor , setCursor] = useState(1);
  const[number , setNumber] =useState();

  useEffect(()=>{
    const temp = Math.floor(Math.random() * 10000);
    setNumber(temp);
    console.log(temp);
  },[])

  const handleInput=(e,index)=>{
    const {maxLength , value , name} = e.target ;
    console.log(value)
    const [fieldName, fieldIndex] = name.split("-");
    if(value.length!==0){
    if(value.length>maxLength){
   
    if(parseInt(fieldIndex)<4)
  
    {
     const nextSibling=document.querySelector(
        `input[name=input-${parseInt(fieldIndex)+1}]`
    );
      if(nextSibling)
        {     
        nextSibling.focus();
        }  
      }
    }
    
  }
  else{
    if(parseInt(fieldIndex)>1)
    {
     const prevSibling=document.querySelector(
        `input[name=input-${parseInt(fieldIndex)-1}]`
    );
      if(prevSibling)
        {
        setCursor(parseInt(fieldIndex));
        prevSibling.focus();
        }
   
      }
   
  }

    setValues({
      ...values,
      [`input${fieldIndex}`]: value
    }); 
  }

  useEffect(()=>{
    if(values.input1!=="" && values.input2!=="" && values.input3!=="" && values.input4!=="" ){
      const otp=values.input1+values.input2+values.input3+values.input4;
      console.log(parseInt(otp))
      console.log(number)
      if(number===parseInt(otp)){
        setTimeout(()=>{
          alert("success")
        },200)
       
      }
      else{
        setTimeout(()=>{
        alert("Wrong OTP , Please try again !")
        },200)
      }
      
    }
  },[values])
   
  return (
    <div className="App">     
       <div className="container">
        <div className="card">
          <UpcomingIcon />
            <h3>Please enter the OTP</h3>
            <div className="input_box">
            <input type="number" autoFocus name="input-1" maxLength={0} value={values.input1} className='input'onChange={(e)=>handleInput(e,0)}></input>
            <input type="number" name="input-2"maxLength={0} value={values.input2} className='input'onChange={(e)=>handleInput(e,1)}></input>
            <input type="number" name="input-3"maxLength={0} value={values.input3} className='input'onChange={(e)=>handleInput(e,2)}></input>
            <input type="number" name="input-4"maxLength={0} value={values.input4}className='input' onChange={(e)=>handleInput(e,3)}></input>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;




function test =()=>{
  console.log("hello");
  setTimeout=(()=>{
    console.log("hi")
  },0)
}
"i am Arpita"
function reverse =(str)=>{
  let strArr = str.split(" ");
  for(let i=strArr.length ; i>0 ;i++){
    console.log(strArr.join(" "));
  }
}

