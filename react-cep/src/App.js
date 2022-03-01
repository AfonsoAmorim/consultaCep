import React, {useState} from 'react';
import './App.css';
import TrackerCep from './TrackerCep';
import './styles/main.css';


function App() {

  const [events, setEvents] = useState([]);

  const convertToArray = (obj) => {
    const arr = [obj];
    return arr;
    
  }
  
  const submitHandler = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);


    fetch(`http://localhost:3001/?tracking=${data.tracking}`)
    .then(response => response.json())
    .then(data => {
      const array = convertToArray(data);
      setEvents(array);
    })
    .then(console.log)
    .catch(error => console.error);

  }
  
  
  
  
  return(

    <div className="body">
    <div className='container'>
      <form onSubmit={submitHandler}>
      <center>
    <h1>CEP Desejado</h1>
   
    <div className='form-goup'> 
      <input type='text' name='tracking' className='form-control'/>
    </div>
    <button type='submit' name='trackCEP' className='btn btn-primary'>Encontrar CEP</button>
    <TrackerCep events={events}/>
    </center>
    </form>
   
    </div>
    </div>
   


  );
  
}

export default App;
