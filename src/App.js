import React, {createContext, useState} from 'react';
import Count from './Count';
import Display from './Display';

export const store = createContext(); 

const App = () => {
  const [data, setdata] = useState([
    {
      brand :"Samsung"
    },
    {
      brand :"Nothing"
    },
    {
      brand :"OnePlus"
    }
  ]);
  return (
    //store is like a normal store in real world and it contains provider to provide the things and here provider is providing the
    // items which r mentioned in values to the components
    <store.Provider value={[data, setdata]}>
      <center>
        <Count />
        <br/>
        <Display />
        <br/>
      </center>
    </store.Provider>
  );
}

export default App;
