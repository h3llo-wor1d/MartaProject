import React, {useEffect, useState} from "react";
import { Line } from "../core/types";
import Column from "./Column";
import TrainObject from "./TrainObject";

export default function TrainContainer(props) {
    const [trains, setTrains] = useState([]);
    const [hasSet, setHasSet] = useState(false);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        if (!hasSet) {
            fetch("/marta")
            .then(response => response.json())
            .then(data => {
                var out = [[], [], [], []]
                setTimeout(() => {
                    for (var index in data) {
                        let d = data[index];
                        out.push(
                            <TrainObject
                                data={d}
                                key={index}
                            />
                        )
                    }
                })
                setTrains(out);
                setHasSet(true);  
            })
        } 
    })

    return (
        <div>
            <h1 style={{textAlign: "center", color: "white"}}>
                All Train Data For The Fucking State Of Georgia, Realtime
            </h1>
            {trains}
        </div>
    )
}