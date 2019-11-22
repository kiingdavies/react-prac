//Import React & ReactDom from libraries
import React from 'react';
import ReactDOM from 'react-dom';

// const getButtonText = () => {
//     return 'Click on Me!';
// };
const getTime = () => {
    return (new Date()).toLocaleTimeString()
}

// Creacte App component using function or class methods
const App = () => {
    const buttonText = { text: 'Click me!', run: 'run' };
    const style = { backgroundColor: 'blue', color: 'white' };
    const labelText = { lab1: 'Enter Name:', lab2: 'Whats your name?' };

    return (
        <div>
            <div>Current Time: </div>
            <h3>{getTime()}</h3>

            <label className="label" htmlFor="name">{labelText.lab1}</label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
};
// Render App on the browser
ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);