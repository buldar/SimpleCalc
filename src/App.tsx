import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className="App">
            <div className='Tittle'><h2>I AM CALCULATOR</h2></div>
            <div className='Calc'>
                <div className='Display'><span>123</span></div>
                <div className='Sets'>
                    <Button/>
                    <Button/>
                    <Button/>
                </div>
                <div className='Functional'>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <div>
                        <button style={{height: '130px'}}>+</button>
                    </div>
                    <Button/>
                    <Button/>
                    <Button/>
                    <div>
                        <button style={{height: '130px'}}>=</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export const Button = () => {
    return (
        <div>
            <button>1</button>
        </div>
    )
}

