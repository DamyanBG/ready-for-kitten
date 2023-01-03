import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QuestionsPage = () => {
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate()

    const handleChange = (event) => {
        setAnswers({
            ...answers,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (answers.time === 'no' || answers.space === 'no' || answers.money === 'no') {
            navigate("/results?show=bad")
        } else {
            navigate("/results?show=good")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Are you ready for a kitten?</h2>
            <p>Please answer the following questions to find out:</p>
            <div>
                <label>
                    Do you have enough time to care for a kitten?
                    <select name="time" onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Do you have enough space in your home for a kitten?
                    <select name="space" onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Do you have enough money to provide for a kitten's needs?
                    <select name="money" onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>
            </div>
            <div>
                <Link to="/">
                    <button type="button">Back</button>
                </Link>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default QuestionsPage;
