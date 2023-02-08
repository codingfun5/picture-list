import { useState } from 'react';
import { data } from './data';
import FirstName from './FirstName';
import './App.css';

function App() {

  const [person, setPerson] = useState(data);
  
  
  return (
   <FirstName anyWordYouWant={person}/>
              
  
  )} 
export default App;
