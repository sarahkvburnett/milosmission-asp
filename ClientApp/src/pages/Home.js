import React, { useEffect, useState } from "react";
import Result from "../components/form/Result";
import Animal from "../components/Animal";
import { animalFinderJson } from "../animalFinderJson";
import Form from "../components/form/Form";
import axios from "axios";

export default function Home() {
    const [formFields, setFormFields] = useState(false);
    const [formResult, setFormResult] = useState(false);

    useEffect(() => setFormFields(animalFinderJson), []);

    const onSubmit = values => {
        console.log(values);
        axios.get('/api/animals').then(res => setFormResult(res.data))
    };

    if (formFields) {
        return (
            <>
                {
                    formResult
                        ? <Result result={formResult} Component={Animal} />
                        : <Form onSubmit={onSubmit} formFields={formFields} />
                }
            </>
        )
    } else {
        return (
            <div className="form-white-bg">Form is loading....</div>
            )
    }

}



