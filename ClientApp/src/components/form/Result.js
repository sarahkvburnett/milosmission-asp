import React from "react";

export default function Result({ result, Component }) {
    return (
        <div className="form-white-bg">
            <h3>Your Result:</h3>
            <div className="pods-width-150">
                { result.map(data => <Component data={data}/>)}
            </div>
        </div>
        )
}