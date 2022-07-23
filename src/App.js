import React, {useState} from "react";
const App =()=> {
  const[fullName,setFullName] = useState({ 
fname: "", // passing 2 objects
lname: "",
email: "",
phone: "",


  });
 
  
 
  const inputEvent = (event) => {

const {name,value}=(event.target); 

setFullName((preValue)=> 
{ 
  return {
    ...preValue,
    [name]:value,
  };

// if(name=== 'fName')
// {
//   return { 
//   fname: value,
//   lname: preValue.lname,
//   email:preValue.email,
//   phone:preValue.phone,

// }; }
// else if (name=== 'lName')
// {
//   return { 
//   lname: value,
//   fname: preValue.fname,
//   phone:preValue.phone,
//   email:preValue.email,


// };
// }
// else if (name=== 'email')
// {
//   return { 
//   lname: preValue.lname,
//   fname: preValue.fname,
//   email:value,
//   phone:preValue.phone,
  


// };
// }
// else if (name=== 'phone')
// {
//   return { 
//   lname: preValue.lname,
//   fname: preValue.fname,
//   phone:value,
//   email:preValue.email,


// };
// }
} ); 
};
  


  
  const onSubmit=(event)=>{
    event.preventDefault();
   
  }
return (
<> 
<form onSubmit={onSubmit}> 
<div> 
<h1> Heyo {fullName.fname} {fullName.lname} </h1>
<p> {fullName.email}</p>
<p> {fullName.phone}</p>


<input type='text' 
placeholder="enter your name" 
name='fname'
onChange={inputEvent} 
value={fullName.fname}/>   
<br/>
<input type='text' 
placeholder="enter your last name" 
name='lname'
onChange={inputEvent} 
value={fullName.lname}/>
<br/>
<input type='email' 
placeholder="enter your email" 
name='email'
onChange={inputEvent} 
value={fullName.email}
  autoComplete="off"
/>
<br/>
<input type='number' 
placeholder="enter your phone no" 
name='phone'
onChange={inputEvent} 
value={fullName.phone}/>
<button type="submit" > SUBMIT </button>







</div>
</form>




</>



)



};
export default App;