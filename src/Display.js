import React, {useContext, useState} from 'react'
import { store } from './App';

const Display = () => {
    const [data, setdata] = useContext(store);
    const [name, setname] = useState(' ');
    const sub = (e) => {
        e.preventDefault();
        setdata([...data, {brand : name}]);
        setname("Enter the brand name");
    } 
  return (
    <div className='class'>
        <div className='class-body'>
            {data.map(item => <h3 className='card-title'> {item.brand} </h3>)} <br/>
            <form className='form' onSubmit={sub}>
                <input type="text" onChange = {(e) => setname(e.target.value)} placeholder='Enter the brand name : '></input>
                <input type='submit' value = "Add"/>
            </form>
        </div>
    </div>
  )
}

export default Display