import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
    const [count, setConut] = useState(0);
    function increment() {
        setConut(count + 1);
    }
    function decrement() {
        setConut(count - 1);
    }
    function reset() {
        setConut(0);
    }
    return (
        <>
            <div id="center">
                <h1>Counter App</h1>
                <p className="counter">Count : {count}</p>
                <div className="buttons">
                    <Button name=" ➕" func={increment} />
                    <Button name=" ➖" func={decrement} />
                    <Button name="🔄" func={reset} />
                </div>
            </div>
        </>
    );
}

export default App;
