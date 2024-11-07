import React, { useState } from 'react'
import css from "./Counter.module.css"
export function Counter(): React.JSX.Element{
    const [num, setNum] = useState<number>(0)    
    let name:string = "Daniel"

    function increment(){
        // num++;
        setNum(num + 1)
        // alert(num)
    }
    return(
        <div className={css.container}>
            <h1 className={css.title}>My Counter</h1>
            <p className={css.name}>my name is {name} </p>
            <button className={css.btn} onClick={increment}>+</button>
            <p className={css.num}>{num}</p>
        </div>
    )


}