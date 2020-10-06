import React from 'react'; 

const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Total = ({ parts }) => {
    const sum = parts.reduce((acc,item)=>acc + item.exercises,0)
    return(
      <strong><p>Number of exercises {sum}</p></strong>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
      return (
          <div>
          {
            parts.map((item)=>
             <Part key={item.id} name={item.name} exercises={item.exercises}/>
            )  
          }
          </div>
      )
  }

  const Course = ({course}) => {
    return (
    <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>)
   
  }
  

  export default Course;