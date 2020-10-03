import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const {good,bad,neutral}= props;

  var total = good + neutral + bad;
  var average = ((good * 1) + (neutral * 0) + (bad * -1)) / total;
  var positive = (good/total)*100;

  if(total===0){
    return <div>No feedback given</div>
  }else{
    return (
    
      <table>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{positive}%</td>
          </tr>
      </table>
    )
  }
 
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
       <button onClick={()=>setGood(good+1)}>Good</button>
        <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
        <button onClick={()=>setBad(bad+1)}>Bad</button>
      </div>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)