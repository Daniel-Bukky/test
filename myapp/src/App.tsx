import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { InfoCard } from './Components/InfoCard';
import { IInfoCard } from './types';

function App() {
    const [search, setSearch] = useState<string>("")
    const [infoCards, setInfoCards] = useState<IInfoCard[]>([
        {
            name: 'Daniel',
            age: 26,
            hobbies: "Computer Science",
            location: "Petah Tikva",
            occupation: "Student"
        },
        {
            name: 'aaaa',
            age: 26,
            hobbies: "cccc",
            location: "eeee",
            occupation: "gggg"
        },
        {
            name: 'bbbb',
            age: 26,
            hobbies: "dddd",
            location: "ffff",
            occupation: "hhhh"
        }
    ])
    function onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }
    const filteredInfoCards = infoCards.filter((info: IInfoCard) => info.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="App">
            <input type="text" id="txtSearch" onChange={onSearchChange} />
            {
                filteredInfoCards.map((info: IInfoCard) => <InfoCard key = {info.name}
                    name = {info.name}
                    age = {info.age}
                    hobbies = {info.hobbies}
                    location = {info.location}
                    occupation = {info.occupation} />)
            }
        </div>
    );
}

export default App;
