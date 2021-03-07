import React, { useEffect, useState } from "react";
import axios from "axios";
import Group from "./Group";
import ProgressBar from "./ProgressBar";

export default function Form({ form, setFormResult }) {

    const [currentGroup, setCurrentGroup] = useState(form.form_groups[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [values, setValues] = useState();

    const [isFirstQuestion, setIsFirstQuestion] = useState(true);
    const [isLastQuestion, setIsLastQuestion] = useState(false);

    const formLength = form.form_groups.length;

    const nextFormGroup = () => {
        setIsFirstQuestion(false);
        if (currentIndex < formLength - 1) {
            const newIndex = currentIndex + 1;
            const newGroup = form.form_groups[newIndex];
            setCurrentGroup(newGroup);
            setCurrentIndex(newIndex);
            updateProgress(newIndex);
            addValue(newGroup);
            if (newIndex === formLength - 1) {
                setIsLastQuestion(true)
            }
        }
    }

    const addValue = (newGroup) => {
        if (values && values.hasOwnProperty(newGroup.questions[0].name)) return;
        const newValues = { ...values };
        newGroup.questions.forEach(q => {
            newValues[q.name] = '';
            console.log(newValues);
            if (q.hasOwnProperty('options')) {
                newValues[q.name] = {};
                q.options.forEach(o => {
                    newValues[q.name][o.value] = false;
                })
            }
        })
        setValues(newValues); 
    }

    const prevFormGroup = () => {
        setIsLastQuestion(false);
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentGroup(form.form_groups[newIndex]);
            setCurrentIndex(newIndex);
            updateProgress(newIndex);
            if (newIndex === 0) setIsFirstQuestion(true);
        }
    }

    const updateProgress = (index) => {
        const newProgress = Math.ceil(index / ( formLength -1 ) * 100);
        setProgress(newProgress);
    }

    const submitForm = (e) => {
        e.preventDefault();
        // change this to actually post to db and then use result to retrive the response - use prop of submitUrl
        axios.get('/api/animals').then(res => setFormResult(res.data));
    }

    useEffect(() => {
        addValue(form.form_groups[0])
     }, [])

    return (
        <form className="form-white-bg" onSubmit={submitForm}>
            <ProgressBar progress={progress} />
            <h1 className="m-auto p-2 text-center">{form.label}</h1>
            <Group group={currentGroup} values={values}/>
            <div className="flex-row-between">
                <button onClick={prevFormGroup}className="btn btn-secondary" type="button">Back</button>
                {!isLastQuestion ?
                    <button onClick={nextFormGroup} className="btn btn-primary" type="button">Next</button> :
                    <input type="submit" className="btn btn-primary" value="Submit"/>
                }
            </div>
        </form>
    )
}