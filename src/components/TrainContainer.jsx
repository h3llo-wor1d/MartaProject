import React, {useEffect, useState} from "react";
import TrainObject from "./TrainObject";

export default function TrainContainer(props) {
    const [trains, setTrains] = useState([]);
    const [hasSet, setHasSet] = useState(false);

    useEffect(() => {
        if (!hasSet) {
            fetch("/marta")
            .then(response => response.json())
            .then(data => {
                var out = []
                setTimeout(() => {
                    for (var index in data) {
                        out.push(
                            <TrainObject
                                data={data[index]}
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