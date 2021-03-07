import React, { useState } from "react";
import Form from "../components/form/Form";
import Result from "../components/form/Result";
import Animal from "../components/Animal";
import { animalFinderJson } from "../animalFinderJson";

export default function Home() {
    const [formFields, setFormFields] = useState(animalFinderJson);
    const [formResult, setFormResult] = useState(false);
   
    return (
        <>
            { formResult
                ? <Result result={formResult} Component={Animal}/>
                : <Form form={formFields} setFormResult={setFormResult}/>
            }
        </>
        )
}