import React from 'react';

export const Person = ({findUserInput,findUser,persons,handleDelete})=> {
    return (
     <div>
      {findUserInput==''?
      (<div>
        {persons?.map((item)=>(
        <ul key={item.id}>
          {item.name} {item.number}
          <button onClick={()=> handleDelete(item.id)}>delete</button>
        </ul>))}
      </div>)
        :
      (<div>
          {findUser?.map((item)=>(
        <ul key={item.id}>
          {item.name} {item.number}
          <button onClick={()=> handleDelete(item.id)}>delete</button>
        </ul>))}
      </div>)
      }
       
        </div>)
  }
  
export const PersonForm = ({submitForm,handleName,handleNumber,newName,newNumber}) =>{
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
export  const Filter = ({handleFind,findUserInput}) =>{
    return (
      <div>
         <div>find user</div>
        <input placeholder='Username' onChange={handleFind} value={findUserInput}/>
      </div>
    )
  }
  
export  const Notification = ({success,message})=>{
    return(
      <div className='message'>
        {success==null?(<></>)
        :success==true?(
          <h3 className='success'>{message}</h3>
        ):(
          <h3 className='fail'>{message}</h3>
        )}
      </div>
    )
  }