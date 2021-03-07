import React from "react";

export default function Select({ field, values }) {
    return (
        <select name={field.name} id={field.name}>
            {field.options.map(option => <option value={option.value}>{option.label}</option>)}
        </select>
    )

}