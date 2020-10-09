import React, { useState,useEffect } from 'react';
import axios from 'axios';
import phoneService from './services/phones';
import './App.css';

import {Person,PersonForm,Filter,Notification}  from './components/component' 

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [findUserInput, setFindUserInput] = useState('');
  const [findUser, setFindUser] = useState(null)
  const [message,setMessage] = useState('');
  const [success,setSuccess] = useState(null);

  useEffect(() => {
    phoneService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  const handleName = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumber = (event) =>{
    setNewNumber(event.target.value)
  }
  const handleFind =(event)=>{
    setFindUserInput(event.target.value);
    const find = persons.filter((item)=> item.name.toLowerCase().includes(event.target.value.toLowerCase()))
    console.log(find)
    setFindUser(find);
  }



  const submitForm = (event) => {
    event.preventDefault();
    const duplicate = persons.find((item)=>item.name===newName);
    if(duplicate){
      let id = duplicate.id;
      const confirm = window.confirm(`${duplicate.name} is already added to phonebook, replace the old number with new one?`)
      if (confirm){
        const newDuplicateNumber = {...duplicate,number:newNumber};
        phoneService.update(id,newDuplicateNumber).then((response)=>{
          setPersons(persons.map((item)=> item.id!== id? item : response.data ))
        }).then(response => {
          setSuccess(true);
          setMessage('Phone number of ' + duplicate.name+' is updated')
          setTimeout(() => {
            setMessage('');
            setSuccess(null)
          }, 4000)
        } 
        ).catch((error)=>{
          setSuccess(false);
          setMessage('Error occur, '+duplicate.name + 'is already removed from server')
        })        
      }
      setNewName('');
      setNewNumber('')}
    else {
      const newPerson= {
        name: newName,
        number: newNumber
      }
      phoneService.create(newPerson).then((response)=>{
        setPersons(persons.concat(response.data)); 
        setNewName('');
        setNewNumber('');
      }).then(response => {
        setSuccess(true);
        setMessage('Phone number of ' + newName+' is added')
        setTimeout(() => {
          setMessage('');
          setSuccess(null)
        }, 4000)
      } 
      ).catch((error)=>{
        setSuccess(false);
        setMessage('Error occur, can not update user phone number')
      }) 
      
    }
  }

  const handleDelete=(id)=>{
    const person = persons.find((item)=> item.id === id);
    const confirm = window.confirm(`Delete ${person.name}?`)
    if(confirm){
      const filterPerson = persons.filter((item)=> item.id !==id)
      phoneService.deleteItem(id).then(
      setPersons(filterPerson)
    ).catch((error)=>{
      setSuccess(false);
      setMessage('Error occur,'+person.name + ' is already removed from server')
    });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification success={success} message={message} />
      <Filter handleFind={handleFind} findUserInput={findUserInput} />
      <h3>Add a new</h3>
      <PersonForm  submitForm={submitForm} handleName={handleName} handleNumber={handleNumber} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Person handleDelete={handleDelete} persons={persons} findUserInput={findUserInput} findUser={findUser}/>
     
    </div>
  )
}

export default App
