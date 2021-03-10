import React from "react";
import { Field } from "formik";

export default function FormField({ field }) {
    const type = field.type;

    return (
        <div className="form-field">
            {
                type === "checkbox" || type === "radio"
                    ? field.options.map(option => {
                        return (
                            <label className="form-option-label" id={option.label} key={option.label}>
                                {option.label}
                                <Field
                                    type={type}
                                    name={field.name}
                                    id={option.label}
                                    value={option.value}
                                />
                            </label>
                        )
                        })
                    : type === "address"
                        ? <Field type="text" name={field.name} id={field.name} />
                        : <Field type={field.type} name={field.name} id={field.name} />
            }
        </div>
    )

   
}