import React from "react";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import Field from "./FormField";

export default function Form({onSubmit, formFields}) {

    const initialValues = () => {
        const initialValues = {};
        formFields.form_groups.forEach(step => {
            step.questions.forEach(q => {
                initialValues[q.name] = '';
                if (q.hasOwnProperty('options')) {
                    initialValues[q.name] = [];
                }
            })
        })
        return initialValues;
    }

    return (
        <MultiStepForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            title={formFields.label}
        >
            {
                formFields.form_groups.map(step => (
                    <FormStep key={step.name}>
                        {
                            step.questions.map(question => {
                                return (
                                    <div key={question.name}>
                                        <p>{question.label}</p>
                                        <Field field={question} key={question.name} />
                                    </div>
                                )
                            })
                        }

                    </FormStep>
                ))
            }

        </MultiStepForm>
    )
}