import React, {useState} from 'react';

function NumberCounter() {
const [number, setNumber] = useState(0)

function addNumber() {
  const newNumber = number + 1
  setNumber(newNumber)
}

return (
  <>
   <h1>Vezes Clicadas: {number}</h1>
   <button type="button" onClick={addNumber}>Clique aqui para adicionar um numero</button>
  </>
)
}
export default NumberCounter;