import React from 'react';
import { Button } from './components';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button text={'测试按钮'} />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
