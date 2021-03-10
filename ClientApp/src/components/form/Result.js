import React from "react";

export default function Result({ result, Component }) {
    return (
        <section className="form-white-bg">
            <main>
                <h3>Your Result:</h3>
                <div className="pods-width-150">
                    {result.map(data => <Component data={data} key={data.name}/>)}
                    </div>
            </main>
        </section>
        )
}