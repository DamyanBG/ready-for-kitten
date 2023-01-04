import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
            <h2>Are you ready for a kitten?</h2>
            <p>Please answer the following questions to find out:</p>
            <div>
                <label>Do you have enough time to care for a kitten?</label>
                <br />
                <label>
                    <input type="radio" name="time" value="yes" onChange={handleChange} />
                    Yes
                </label>
                <br />
                <label>
                    <input type="radio" name="time" value="no" onChange={handleChange} />
                    No
                </label>
            </div>
            <div>
                <label>
                    Do you have enough space in your home for a kitten?
                </label>
                <br />
                <label>
                    <input type="radio" name="space" value="yes" onChange={handleChange} />
                    Yes
                </label>
                <br />
                <label>
                    <input type="radio" name="space" value="no" onChange={handleChange} />
                    No
                </label>
            </div>
            <div>
                <label>
                    Do you have enough money to provide for a kitten's needs?
                </label>
                <br />
                <label>
                    <input type="radio" name="money" value="yes" onChange={handleChange} />
                    Yes
                </label>
                <br />
                <label>
                    <input type="radio" name="money" value="no" onChange={handleChange} />
                    No
                </label>
            </div>
            <div>
                <Link to="/ready-for-kitten/">
                    <button type="button">Back</button>
                </Link>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default QuestionsPage;
