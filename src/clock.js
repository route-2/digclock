const App=() => {
    let time = new Date().toLocaleTimeString();
    const UpdateTime=()=> {
  
      let time = new Date().toLocaleTimeString();
      setCtime(time);
    
    
    };
    setInterval(UpdateTime,1000)
    const [ ctime, setCtime] = useState(time);
  return (
  <>
  
  <h1> {ctime} </h1>
  {/* <button onClick={UpdateTime}> get time </button> */}
  
  
  
  </>
  
  
  
  
  );
  
  
  
  }
  export default App;