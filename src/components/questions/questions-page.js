import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Question from './question';

const QUESTIONS = [
    {
        question: 'Do you have enough time to care for a kitten?',
        key: 'time',
    },
    {
        question: 'Do you have enough space in your home for a kitten?',
        key: 'space',
    },
    {
        question: "Do you have enough money to provide for a kitten's needs?",
        key: 'money',
    },
];

const Header = () => (
    <>
        <h2>Are you ready for a kitten?</h2>
        <p>Please answer the following questions to find out:</p>
    </>
);

const Buttons = () => (
    <div>
        <Link to="/ready-for-kitten/">
            <button type="button">Back</button>
        </Link>
        <button type="submit">Submit</button>
    </div>
);

const QuestionsPage = () => {
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        setAnswers({
            ...answers,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (answers.time === 'no' || answers.space === 'no' || answers.money === 'no') {
            navigate('/ready-for-kitten/results?show=bad');
        } else {
            navigate('/ready-for-kitten/results?show=good');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Header />
            {QUESTIONS.map((q) => (
                <Question labelText={q.question} handleChange={handleChange} inputName={q.key} />
            ))}
            <Buttons />
        </form>
    );
};

export default QuestionsPage;
