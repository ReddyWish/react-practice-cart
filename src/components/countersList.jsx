import React, {useState} from "react";
import Counter from "./counter";


const CountersList = () => {
  let initialState = [
    {id: 0, value: 0, name: 'ненужная вещь'},
    {id: 1, value: 0, name: 'ложка'},
    {id: 2, value: 0, name: 'вилка'},
    {id: 3, value: 0, name: 'тарелка'},
    {id: 4, value: 0, name: 'набор минималиста'}
  ]
  let [counters, setCounters] = useState(initialState)



  const handleDelete = (id) => {
    setCounters(initialState)
    setCounters(counters.filter(item => item.id !== id))
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (val, id) => {
    setCounters(counters.map(prevState => (
      {
        ...prevState,
        value: prevState.id === id ? prevState.value + 1 : prevState.value,
      }
    )))
  }

  const handleDecrement = (val, id) => {
    setCounters(counters.map((prevState) => (
      {
        ...prevState,
        value: prevState.id === id ? prevState.value - 1 : prevState.value,
      }
    )))
  }

  return (
    <>
      {counters.map(item => <Counter key={item.id}
        {
        ...item
        }
          onDelete={() => handleDelete(item.id)}
          onIncrement={() => handleIncrement(item.value, item.id)}
          onDecrement={() => handleDecrement(item.value, item.id)}
      />)}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
    </>
  )
}


export default CountersList