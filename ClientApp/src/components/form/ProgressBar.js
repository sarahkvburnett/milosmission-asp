import React from "react";

export default function ProgressBar({ progress }) {
    return <progress value={ progress } max="100"/>
}