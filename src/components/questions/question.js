export default function Question({ labelText, handleChange, inputName }) {
    return (
        <div className="question">
            <label>{labelText}</label>
            <br />
            <label>
                <input type="radio" name={inputName} value="yes" onChange={handleChange} />
                Yes
            </label>
            <br />
            <label>
                <input type="radio" name={inputName} value="no" onChange={handleChange} />
                No
            </label>
        </div>
    )
}