import React from "react";
import Field from "./Field";

export default function Group({ group, values }) {
    return (
        <div>
            {
                group.questions.map(question => {
                    return (
                        <div key={question.name}>
                            <p>{question.label}</p>
                            <Field field={question} key={question.name} values={values} />
                        </div>
                        )
                })
            }
        </div>
        )
}