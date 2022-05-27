import React, {useState} from 'react';
import './App.css';

type RoundingType = 'mathematical' | 'down' | 'up'
type DecimalType = '0' | '1' | '2' | '3' | 'F'

let currentVal: number = 0
let lastNumber: any = undefined //any...

let currentMath = ''
let mathDone: boolean = true

let toZero = true
let lastKey = ''

export const App = () => {

    let [displayValue, setDisplayValue] = useState<string>('0')
    let [power, setPower] = useState<boolean>(true)
    let [roundingMode, setRoundingMode] = useState<RoundingType>('mathematical')
    let [decimalPlace, setDecimalPlace] = useState<DecimalType>('2')
    // let [memoryMod, setMemoryMod] = useState<boolean>(false)
    // let [memoryValue, setMemoryValue] = useState<number | null>(null)


    const onOff = () => {
        setPower(!power)
        setDisplayValue('0')
        toZero = true
    }
    const changeRounding = (value: RoundingType) => {
        setRoundingMode(value)
    }
    const changeDecimalPlace = (value: DecimalType) => {
        setDecimalPlace(value)
    }
    const addValue = (value: string) => {
        if (displayValue.length < 10) {
            if (toZero) {
                setDisplayValue(displayValue = value)
                toZero = false
            } else {
                setDisplayValue(displayValue = displayValue + value)
            }
        }
        lastNumber = Number(displayValue)
        lastKey = 'number'
    }
    const dot = () => {
        if (displayValue.length > 10) {

        } else if (displayValue.indexOf('.') === -1) {
            setDisplayValue(displayValue + '.')
        }
    }
    const clearDisplay = () => {
        setDisplayValue('0')
        currentVal = 0
        toZero = true
    }

    const calculate = (mathType: string, value: number) => {
        debugger
        if (mathType === 'plus') {
            currentVal = currentVal + value
            setDisplayValue(currentVal.toString())
        } else if (mathType === 'minus') {
            currentVal = currentVal - value
            setDisplayValue(currentVal.toString())
        }
    }


    // const plusButtonPress = () => {
    //     if (mathDone) {
    //         currentVal = Number(displayValue)
    //     } else {
    //         if (lastKey !== 'math' && lastKey !== 'equal') {
    //             lastNumber = Number(displayValue)
    //             let value = Number(displayValue)
    //             calculate(currentMath, value)
    //         }
    //     }
    //     mathDone = false
    //     toZero = true
    //     lastKey = 'math'
    //     currentMath = 'plus'
    //     // lastNumber=Number(displayValue) // this logic like many others i dont like
    // }
    // const minusButtonPress = () => {
    //     if (mathDone) {
    //         currentVal = Number(displayValue)
    //     } else {
    //         if (lastKey !== 'math' && lastKey !== 'equal') {
    //             lastNumber = Number(displayValue)
    //             let value = Number(displayValue)
    //             calculate(currentMath, value)
    //         }
    //     }
    //     mathDone = false
    //     toZero = true
    //     lastKey = 'math'
    //     currentMath = 'minus'
    // }

    const mathButtonsFunc = (mathType:string)=> {
        if (mathDone) {
            currentVal = Number(displayValue)
        } else {
            if (lastKey !== 'math' && lastKey !== 'equal') {
                lastNumber = Number(displayValue)
                let value = Number(displayValue)
                calculate(currentMath, value)
            }
        }
        mathDone = false
        toZero = true
        lastKey = 'math'
        currentMath = mathType
    }



    const equalButtonPress = () => {
        if (!mathDone) {
            calculate(currentMath, lastNumber)
        }
        lastKey = 'equal'
    }

    return (
        <div className="App">
            <div className='Tittle'><h1>I AM SIMPLE CALCULATOR</h1></div>
            <div className='Calc'>
                {power
                    ? <div className='Display'>
                        <span>{displayValue}</span>
                    </div>
                    : <div className='Hello'>Hello! Press 'ON' to start.</div>
                }
                <div className='Sets'>
                    <div className='RoundAndDoz'>
                        <div className='Indicators'>
                            <div>↓</div>
                            <div>4/5</div>
                            <div>↑</div>
                        </div>
                        <div>
                            <button className={roundingMode === 'down' ? 'Chosen' : ''}
                                    onClick={() => changeRounding('down')}
                            />
                            <button className={roundingMode === 'mathematical' ? 'Chosen' : ''}
                                    onClick={() => changeRounding('mathematical')}
                            />
                            <button className={roundingMode === 'up' ? 'Chosen' : ''}
                                    onClick={() => changeRounding('up')}
                            />
                        </div>
                    </div>
                    <div className='OnOff'>
                        <button onClick={onOff}>ON</button>
                    </div>
                    <div className='RoundAndDoz'>
                        <div className='Indicators'>
                            <div>0</div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>F</div>
                        </div>
                        <div>
                            <button className={decimalPlace === '0' ? 'Chosen' : ''}
                                    onClick={() => changeDecimalPlace('0')}
                            />
                            <button className={decimalPlace === '1' ? 'Chosen' : ''}
                                    onClick={() => changeDecimalPlace('1')}
                            />
                            <button className={decimalPlace === '2' ? 'Chosen' : ''}
                                    onClick={() => changeDecimalPlace('2')}
                            />
                            <button className={decimalPlace === '3' ? 'Chosen' : ''}
                                    onClick={() => changeDecimalPlace('3')}
                            />
                            <button className={decimalPlace === 'F' ? 'Chosen' : ''}
                                    onClick={() => changeDecimalPlace('F')}
                            />
                        </div>
                    </div>
                </div>
                <div className='Functional'>
                    <div>
                        <button>MC</button>
                    </div>
                    <div>
                        <button>+/-</button>
                    </div>
                    <div>
                        <button>→</button>
                    </div>
                    <div>
                        <button onClick={clearDisplay}>C</button>
                    </div>
                    <div>
                        <button>CE</button>
                    </div>
                    <div>
                        <button>MR</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('7')}>7</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('4')}>4</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('1')}>1</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('0')}>0</button>
                    </div>
                    <div>
                        <button>M-</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('8')}>8</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('5')}>5</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('2')}>2</button>
                    </div>
                    <div>
                        <button>00</button>
                    </div>
                    <div>
                        <button>M+</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('9')}>9</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('6')}>6</button>
                    </div>
                    <div>
                        <button onClick={() => addValue('3')}>3</button>
                    </div>
                    <div>
                        <button onClick={dot}>.</button>
                    </div>
                    <div>
                        <button>√</button>
                    </div>
                    <div>
                        <button>÷</button>
                    </div>
                    <div>
                        <button>x</button>
                    </div>
                    <div className='PlusAndEqual'>
                        <button onClick={()=>mathButtonsFunc('plus')}>+</button>
                    </div>
                    <div>
                        <button>x<sup>y</sup></button>
                    </div>
                    <div>
                        <button>%</button>
                    </div>
                    <div>
                        <button onClick={()=>mathButtonsFunc('minus')}>-</button>
                    </div>
                    <div className='PlusAndEqual'>
                        <button onClick={equalButtonPress}>=</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

