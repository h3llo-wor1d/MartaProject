import React from 'react';

export default function TrainObject(props) {
    return  (
        <div style={{
            backgroundColor: "black",
            color: "white",
            margin: "10px 10px 10px 10px",
            borderRadius: "15px"
        }}>
            <div style={{
                padding: "10px 10px 10px 10px"
            }}>
                Train Object<br/><br/>
                Destination: {props.data.destination}<br/>
                Direction: {props.data.direction}<br/>
                Arrival Time: {props.data.nextArr}<br/>
                Line: {props.data.line}<br/>
                Seconds To Arrival (?): {props.data.seconds}<br/>
                <p>Internal ID: {props.data.internalId}</p>
            </div>
        </div>
        
    )
}