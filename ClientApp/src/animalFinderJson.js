export const animalFinderJson = {
    "name": "AnimalFinder",
    "label": "Find Your New Pet",
    "form_groups": [
        {
            "name": "type",
            "label": "Animal",
            "questions": [
                {
                    "name": "type",
                    "label": "What animal are you looking for?",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Dog",
                            "value": "dog"
                        },
                        {
                            "label": "Cat",
                            "value": "cat"
                        }
                    ]
                }
            ]
        },
        {
            "name": "preferences",
            "label": "Preferences",
            "questions": [
                {
                    "name": "gender",
                    "label": "What is your preferred gender?",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Male",
                            "value": "male"
                        },
                        {
                            "label": "Female",
                            "value": "female"
                        }
                    ]
                },
                {
                    "name": "age",
                    "label": "What is your preferred age?",
                    "type": "radio",
                    "options": [
                        {
                            "label": "0-1yrs (puppy)",
                            "value": "0-1"
                        },
                        {
                            "label": "1-2yrs",
                            "value": "1-2"
                        },
                        {
                            "label": "3-5yrs",
                            "value": "3-5"
                        },
                        {
                            "label": "6+ (older dog)",
                            "value": "6+"
                        }
                    ]
                }
            ]
        },
        {
            "name": "suitability",
            "label": "Suitability",
            "questions": [
                {
                    "name": "suitability",
                    "label": "What requirements do you have?",
                    "type": "checkbox",
                    "options": [
                        {
                            "label": "Cat Friendly",
                            "value": "suitable-with-cats"
                        },
                        {
                            "label": "Dog Friendly",
                            "value": "suitable-with-dogs"
                        },
                        {
                            "label": "Children Friendly",
                            "value": "suitable-with-children"
                        }
                    ]
                },
            ]
        },
        {
            "name": "character",
            "label": "Character",
            "questions": [
                {
                    "name": "character",
                    "label": "Select the ideal character of your future pet",
                    "type": "checkbox",
                    "options": [
                        {
                            "label": "Active",
                            "value": "active"
                        },
                        {
                            "label": "Lazy",
                            "value": "lazy"
                        },
                        {
                            "label": "Cuddly",
                            "value": "cuddly"
                        },
                        {
                            "label": "Sociable",
                            "value": "sociable"
                        },
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "Well Trained",
                            "value": "well trained"
                        }
                    ]
                }
            ]
        },
        {
            "name": "location",
            "label": "Location",
            "questions": [
                {
                    "name": "location",
                    "label": "Where are you looking?",
                    "type": "address"
                }
            ]
        }
    ]
};
