import React from "react";

export default function Text({ field, values }) {
    return (
        <div>
            <input type={field.type} name={field.name} id={field.name} value={values[field.name]}/>
        </div>
         )
}