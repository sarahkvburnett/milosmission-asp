import React from "react";
import Select from "./fields/Select";
import Input from "./fields/Input";
import Checkbox from "./fields/Checkbox";
import Radio from "./fields/Radio";

export default function Field({ field, values }) {
    const type = field.type;
    return (
        <div className="form-field">
            {
                type === "checkbox" ? <Checkbox field={field} values={values}/> :
                    type === "select" ? <Select field={field} values={values} /> :
                        type === "radio" ? <Radio field={field} values={values} /> :
                            <Input field={field} values={values} />
            }
        </div>
        )
}