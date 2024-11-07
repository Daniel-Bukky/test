import React, { useState } from 'react'
export function Counter(): React.JSX.Element{
    const [num, setNum] = useState<number>(0)    
    let name:string = "Daniel"

    function increment(){
        // num++;
        setNum(num + 1)
        // alert(num)
    }
    return(
        <div>
            <p>my name is {name} </p>
            <button onClick={increment}>+</button>
            {num}
        </div>
    )


}