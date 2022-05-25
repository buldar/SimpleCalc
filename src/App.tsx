import React, {useState} from 'react';
import './App.css';

export const App = () => {

    let [display, setDisplay] = useState('0')


    return (
        <div className="App">
            <div className='Tittle'><h1>I AM SIMPLE CALCULATOR</h1></div>
            <div className='Calc'>
                <div className='Display'>
                    <span>{display}</span>
                </div>
                <div className='Sets'>
                    <div className='RoundAndDoz'>
                        <div className='Indicators'>
                            <div>↓</div>
                            <div>4/5</div>
                            <div>↑</div>
                        </div>
                        <div>
                            <button/>
                            <button/>
                            <button/>
                        </div>
                    </div>
                    <div className='OnOff'><button>ON</button></div>
                    <div className='RoundAndDoz'>
                        <div className='Indicators'>
                            <div>A</div>
                            <div>0</div>
                            <div>2</div>
                            <div>3</div>
                            <div>F</div>
                        </div>
                        <div>
                            <button/>
                            <button/>
                            <button/>
                            <button/>
                            <button/>
                        </div>
                    </div>
                </div>
                <div className='Functional'>
                    <div><button>MC</button></div>
                    <div><button>+/-</button></div>
                    <div><button>→</button></div>
                    <div><button>C</button></div>
                    <div><button>CE</button></div>
                    <div><button>MR</button></div>
                    <div><button>7</button></div>
                    <div><button>4</button></div>
                    <div><button>1</button></div>
                    <div><button>0</button></div>
                    <div><button>M-</button></div>
                    <div><button>8</button></div>
                    <div><button>5</button></div>
                    <div><button>2</button></div>
                    <div><button>00</button></div>
                    <div><button>M+</button></div>
                    <div><button>9</button></div>
                    <div><button>6</button></div>
                    <div><button>3</button></div>
                    <div><button>.</button></div>
                    <div><button>√</button></div>
                    <div><button>÷</button></div>
                    <div><button>x</button></div>
                    <div className='PlusAndEqual'><button>+</button></div>
                    <div><button>x<sup>y</sup></button></div>
                    <div><button>%</button></div>
                    <div><button>-</button></div>
                    <div className='PlusAndEqual'><button>=</button></div>
                </div>
            </div>

        </div>
    );
}

