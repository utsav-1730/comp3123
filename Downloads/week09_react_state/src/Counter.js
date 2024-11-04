import { useState } from 'react';

function Counter(){
    var [a, setA] = useState(0)
    
    var addClick = (e) => {
        setA(a+1)
        console.log(`A: ${a}`)
    }
    return(
        <div>
   <p>A: {a}</p>
   <button onClick={addClick}>Add</button>
   </div>
    )
}
export default Counter;