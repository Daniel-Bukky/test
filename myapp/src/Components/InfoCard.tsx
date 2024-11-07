
import React, { useState } from "react"

export function InfoCard(): React.JSX.Element{

    const [name, setName] = useState<string>("Daniel")  
    const [age, setAge] = useState<number>(26)  
    const [hobbies, setHobbies] = useState<string>("Computer Science")  
    const [btnText, setBtnText] = useState<string>("Hide Info")
    const [isVisible, setVisible] = useState<boolean>(false)

    function btnClick(){
        setVisible(!isVisible)
    }
    return(
        <div>
            <button onClick={btnClick}> {isVisible? "Hide Info": "Show Info"}</button>
            {
                isVisible && <div>
            <p>My name is {name}</p>
            <p>Hobbies: {hobbies}</p>
            <p>age: {age}</p>
            </div>
            }

        </div>
    )
}