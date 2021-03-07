import React from "react";

export default function Radio({ field, values }) {
    return field.options.map(option => {
        return (
            <label className="form-option-label" id={option.label} key={option.label}>
                {option.label}
                <input type="radio"
                    name={field.name}
                    id={option.label}
                    value={option.value}
                />
            </label>
        )
    })
}