import React from "react";

export default function Animal({data}) {
    const image = data.image ? data.image : 'no-image.png';
    return (
        <div className="pod">
            <h4>{data.name}</h4>
            <img src={`images/${image}`} alt=""/>
            <p>{data.breed}</p>
            <a href="/" class="btn main-btn">View more</a>
        </div>
        )
}