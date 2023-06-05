import React, {useContext} from 'react'
import { store } from './App'

const CompoB = () => {
    const [data, setdata] = useContext(store);
    return (
    <div className='card'>
        <div className='card-body'>
        Compo B {data}
        </div>
    </div>
  )
}

export default CompoB