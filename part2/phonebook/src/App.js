import React, { useState } from 'react'

const Person = ({findUser})=> {
  return (
   <div>{findUser.map((item)=>(
        <ul key={item.name}>{item.name} {item.number}</ul>
      ))}</div>)
}

const PersonForm = ({submitForm,handleName,handleNumber,newName,newNumber}) =>{
  return (
  <form onSubmit={submitForm}>
    <div>name: <input placeholder='Type your name' value={newName} onChange={handleName} /></div>
    <div>number: <input placeholder='Phone number' value={newNumber} onChange={handleNumber}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}
const Filter = ({handleFind,findUserInput}) =>{
  return (
    <div>
       <div>find user</div>
      <input placeholder='Username' onChange={handleFind} value={findUserInput}/>
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [findUserInput, setFindUserInput] = useState('');

  const handleName = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumber = (event) =>{
    setNewNumber(event.target.value)
  }
  const handleFind =(event)=>{
    setFindUserInput(event.target.value);
  }

  const findUser = persons.filter((item)=> {return item.name.toLowerCase().includes(findUserInput.toLowerCase())})

  const submitForm = (event) => {
    event.preventDefault();
    const duplicate = persons.filter((item)=>item.name===newName);
    if(duplicate.length>0){
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('')}
    else {
      const newPerson= {
        name: newName,
        number: newNumber
      } 
      setPersons(persons.concat(newPerson)); 
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFind={handleFind} findUserInput={findUserInput} />
      <h3>Add a new</h3>
      <PersonForm submitForm={submitForm} handleName={handleName} handleNumber={handleNumber} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Person persons={persons} findUser={findUser}/>
     
    </div>
  )
}

export default App
