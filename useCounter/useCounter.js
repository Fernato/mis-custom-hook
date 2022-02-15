import {useState} from 'react';

// se puede decir que se comporta como una clase

export const useCounter = (inicialState = 10 ) => {
  const [counter, setCounter] = useState(inicialState);

  const increment = () => {
      setCounter( counter + 1);

  }

  const decrement = () =>{
      setCounter( counter - 1 );
  }

  const reset = () =>{
    setCounter( inicialState );
}


  return {
    counter,
    increment,
    decrement,
    reset
  };
}
