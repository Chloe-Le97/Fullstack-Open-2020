import ReactDOM from 'react-dom';
import React, { useState } from 'react'

const Most = (props) => {
  const {voteAmount,anecdotes} = props;
  const max = voteAmount.reduce(function(a, b) {
        return Math.max(a, b);
    })
  const index = voteAmount.indexOf(max)  
  return (
    <strong><q>{anecdotes[index]}</q></strong>
  )
}

const App = (props) => {
  const {anecdotes} = props;
  const [selected, setSelected] = useState(0);
  const length = anecdotes.length-1;
  const [voteAmount,setVote] = useState(new Uint8Array(length))

  const handleClick = () =>{
    const number = Math.round(Math.random()*length);
    setSelected(number);
  }

  const vote = (selected) => {
    var arr = [...voteAmount];
    arr[selected]= arr[selected]+1;
    setVote(arr);
  }



  return (
    <div>
      <h1>Anecdote of the day</h1>
      <strong><q>{anecdotes[selected]}</q></strong>
      <div>This quote has {voteAmount[selected]} vote(s)</div>
      <button onClick={()=>vote(selected)}>Vote</button>
      <button onClick={()=>handleClick()}>Next anecdotes</button>
      <h1>Anecdote with most vote</h1>
      <Most voteAmount={voteAmount} anecdotes={anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)