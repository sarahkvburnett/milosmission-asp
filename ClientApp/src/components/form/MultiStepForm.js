import React, { useState } from "react";
import { Form, Formik } from 'formik';
import ProgressBar from "../ProgressBar";

export default function MultiStepForm({ children, initialValues, onSubmit, title }) {
    const [stepNumber, setStepNumber] = useState(0);
    const [snapshot, setSnapshot] = useState(initialValues);
    const [progress, setProgress] = useState(0);

    const steps = React.Children.toArray(children);
    const step = steps[stepNumber];
    const totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;

    const next = values => {
        const newStep = Math.min(stepNumber + 1, totalSteps - 1);
        setSnapshot(values);
        setStepNumber(newStep);
        updateProgress(newStep);
    };

    const previous = values => {
        const newStep = Math.max(stepNumber - 1, 0);
        setSnapshot(values);
        setStepNumber(newStep);
        updateProgress(newStep);
    };

    const updateProgress = (newStep) => {
        const newProgress = Math.ceil(newStep / (totalSteps -1) * 100);
        setProgress(newProgress);
    }

    const handleSubmit = async (values, bag) => {
        if (step.props.onSubmit) {
            await step.props.onSubmit(values, bag);
        }
        if (isLastStep) {
            return onSubmit(values, bag);
        } else {
            bag.setTouched({});
            next(values);
        }
    };

    return (
        <Formik
            initialValues={snapshot}
            onSubmit={handleSubmit}
        >
            {formik => (
                <Form className="form-white-bg">
                    <ProgressBar progress={progress} />
                    <main>
                        <h1 className="m-auto p-2 text-center">{title}</h1>
                        {step}
                        {stepNumber === 0 && <img src="/images/dog-cat-outline.png" className="mx-auto" width="200" />}
                        <div className="flex-row-between">
                            <button className="btn main-btn" onClick={() => previous(formik.values)} type="button" disabled={stepNumber === 0}>
                                Back
                            </button>
                            <button className={isLastStep ? 'btn btn-dark' : 'btn main-btn' } disabled={formik.isSubmitting} type="submit">
                                {isLastStep ? 'Submit' : 'Next'}
                            </button>
                        </div>
                    </main>
                </Form>
            )}
        </Formik>
    );
};

export const FormStep = ({ children }) => children;
