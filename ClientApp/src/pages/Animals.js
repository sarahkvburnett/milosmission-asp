import axios from "axios";
import React, { useEffect, useState } from "react";
import Animal from "../components/Animal";

export default function Animals() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get('api/animals').then(res => setAnimals(res.data));
    }, [])
   
    return (
        <div className="pods-width-350">
            {
                animals.map(animal => <Animal data={animal}/>)
            }
        </div>
        )
}