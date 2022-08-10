import React, {useState} from 'react';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!username || !email || !password) {
            setErrorMessage('Please fill out all fields');
        } else {
            alert(`Welcome ${username}!`);
            // Makes error disappear after submission
            setErrorMessage('');
        }
    }

    function handleInputChange(event) {
        const inputValue = event.target.value;
        const inputType = event.target.name;

        if (inputType === 'email') {
            setEmail(inputValue)
        } else if  (inputType === 'username') {
            setUsername(inputValue)
        } else {
            setPassword(inputValue)
        }
    }

    return (
        <div>
        <form className="form">
            <input name="email" type="email" placeholder="email" onChange={handleInputChange}></input>
            <input name="username" type="text" placeholder="username" onChange={handleInputChange}></input>
            <input name="password" type="password" placeholder="password" onChange={handleInputChange}></input>
            <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
        )}
        </div>
    )
}