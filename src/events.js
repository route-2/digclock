import React, {useState} from "react";


const App=()=> {


  const purple = "pink";
  const [bg, setBg] = useState(purple);
 
  const [name, setName] = useState('click me');
  const bgBack= () => {
    setBg(purple);
    setName("nop");
   } ;


  

  const bgChange = () => {
    let newBg = '#34495e';
    setBg(newBg);
    setName("lol@u");
    
    
    
  }

return (
<>
<div style={{backgroundColor: bg}}> 
<button onClick={bgChange} onDoubleClick={bgBack}>  {name} </button>



</div>





</>




);




}
export default App;




