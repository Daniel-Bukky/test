
import React, { useState } from "react"
import css from "./InfoCard.module.css"
import { IInfoCard } from "../types"

export function InfoCard(props:IInfoCard): React.JSX.Element{

    const [name/*, setName*/] = useState<string>(props.name)  
    const [age, setAge] = useState<number>(props.age)  
    const [hobbies, setHobbies] = useState<string>(props.hobbies)
    const [isVisible, setVisible] = useState<boolean>(false)
    const [isExtra, setExtra] = useState<boolean>(false)
    const [location, setLocation] = useState<string>(props.location)
    const [occupation, setOccupation] = useState<string>(props.occupation)
    const [items/*, setItems*/] = useState(['select', 'hobbies', 'age','location','occupation'])
    const [selectedValue, setSelected] = useState<string>("select")

    function btnClick(){
        setVisible(!isVisible)
    }
    function chkClick(event: React.ChangeEvent<HTMLInputElement>){
        setExtra(event.target.checked)
    }
    function btnChangeClick(){
        let txtChange = document.getElementById('txtChange') as HTMLInputElement;
        let value = txtChange.value;
        switch(selectedValue){
            case 'select': break;
            case 'hobbies': {
                if (value.trim() !== '') setHobbies(value)
                break;}
            case 'age': {
                if (value.trim() !== '') setAge(+value)
                break;}
            case 'location': {
                if (value.trim() !== '') setLocation(value)
                break;}
            case 'occupation': {
                if (value.trim() !== '') setOccupation(value)
                break;}
        }
        
    }
    function listValueChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    };
    return(
        <div className={css.container}>
            <p style={{color: isVisible? 'green':'red'}}>My name is {name}</p>
            <button onClick={btnClick}> {isVisible? "Hide Info": "Show Info"}</button>
            <input id='chkExtra' type='checkbox' onChange={chkClick}/><label htmlFor='chkExtra'>Extra info</label>
            {
                <div hidden={!isVisible} className={css.cont}>
                <p>Hobbies: {hobbies}</p>
                <p>age: {age}</p>
                <p hidden={!isExtra}>Location: {location}</p>
                <p hidden={!isExtra}>Occupation: {occupation}</p>

                <select id="lstChange" onChange={listValueChange}>
                    {
                        items.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
                <input type='text' id="txtChange"/>
                <button id="btnChange" onClick={btnChangeClick}>Change</button>
                </div>
            }

        </div>
    )
}