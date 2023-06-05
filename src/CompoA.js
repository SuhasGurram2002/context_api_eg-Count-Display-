import React , {useContext} from 'react'
import { store } from './App'

const CompoA = () => {  
    const [data, setdata] = useContext(store);
    return (
    <div className= "card">
        <div className="card-body">
            Compo A {data}
        </div>
    </div>
  )
}

export default CompoA