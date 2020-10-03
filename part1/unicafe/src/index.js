import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return (
    <table>
        <tr>
          <td>Good</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>0.6666</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>66.888%</td>
        </tr>
        {/* <p>Neutral 6</p>
        <p>Bad 6</p>
        <p>All 6</p>
        <p>Average 0.555555</p>
        <p>Positive 66.777%</p> */}
    </table>
  )
}

const Button = (props) => {
  return (
    <div>
       <button>good</button>
        <button>neutral</button>
        <button>bad</button>
    </div>
  )

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button/>
      <h1>Statistics</h1>
      <Statistics/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)