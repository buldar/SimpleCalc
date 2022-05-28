import React, {useState} from 'react';
import './App.css';

type RoundingType = 'mathematical' | 'down' | 'up'
type DecimalType = '0' | '1' | '2' | '3' | 'F'
type MemoryType = 'increase' | 'decrease' | 'clear' | 'use'

let currentVal: number = 0
let lastNumber: any = undefined //any...
let currentMath: string = ''
let operationIsDone: boolean = true
let toZero: boolean = true
let lastPressedKey: string = ''
let memoryValue: number = 0


export const App = () => {

    let [displayValue, setDisplayValue] = useState<string>('0')
    let [power, setPower] = useState<boolean>(true)
    let [roundingMode, setRoundingMode] = useState<RoundingType>('mathematical')
    let [decimalPlace, setDecimalPlace] = useState<DecimalType>('2')
    // let [memoryMod, setMemoryMod] = useState<boolean>(false)


    const onOff = () => {
        setPower(!power)
        setDisplayValue('0')
        toZero = true
        currentVal = 0
        lastNumber = null
        currentMath = ''
        operationIsDone = true
        lastPressedKey = ''
    }
    const changeRounding = (value: RoundingType) => {
        setRoundingMode(value)
    }
    const changeDecimalPlace = (value: DecimalType) => {
        setDecimalPlace(value)
    }
    const addValue = (value: string) => {
        if (lastPressedKey === 'equal') {
            currentVal = 0
            lastNumber = null
            operationIsDone = true
        }
        if (displayValue.length < 10) {
            if (toZero || lastPressedKey === 'equal') {
                setDisplayValue(displayValue = value)
                toZero = false
            } else {
                setDisplayValue(displayValue = displayValue + value)
            }
        }
        lastNumber = Number(displayValue)
        lastPressedKey = 'number'
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

    // const memoryOperations = (set: MemoryType) => {
    //     switch (set) {
    //         case 'use':
    //             break
    //         case 'increase':
    //             break
    //         case "decrease":
    //             break
    //         case "clear":
    //             break
    //         default:
    //             alert('i dont know how, but u are here')
    //     }
    // }
    const calculate = (mathType: string, value: number) => {
        switch (mathType) {
            case 'plus':
                currentVal = currentVal + value
                break
            case 'minus':
                currentVal = currentVal - value
                break
            case 'multiply':
                currentVal = currentVal * value
                break
            case 'divide':
                currentVal = currentVal / value
                break
            case 'radical':
                currentVal = Math.pow(currentVal, 1 / value)
                break
            case 'degree':
                currentVal = Math.pow(currentVal, value)
                break
            default:
                alert('omg! u rly did a mistake here? pfffff...')

        }
        setDisplayValue(currentVal.toString())
    }
    const mathButtonsFunc = (mathType: string) => {
        lastNumber = Number(displayValue) //logic to save display value as value for next operation. need test
        if (operationIsDone) {
            currentVal = Number(displayValue)
        } else {
            if (lastPressedKey !== 'math' && lastPressedKey !== 'equal') {
                lastNumber = Number(displayValue)
                let value = Number(displayValue)
                calculate(currentMath, value)
            }
        }
        operationIsDone = false
        toZero = true
        lastPressedKey = 'math'
        currentMath = mathType
    }
    const equalButtonPress = () => {
        if (!operationIsDone) {
            calculate(currentMath, lastNumber)
        } else {
            setDisplayValue(currentVal.toString())
        }
        lastPressedKey = 'equal'
    }

    const clearButtons = (set:string) => {
        setDisplayValue('0')
        currentMath=''
        toZero=true
        lastPressedKey=''
        switch (set) {
            case 'CE':
                break
            case 'C':
                operationIsDone=true
                currentVal=0
                break
            case 'OnOff':
                currentVal=0
                operationIsDone=true
                setPower(!power)
                break
            default:
                alert('u make a mistake here')
        }
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
                        <button onClick={()=>clearButtons('OnOff')}>ON</button>
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
                        <button onClick={()=>clearButtons('C')}>C</button>
                    </div>
                    <div>
                        <button onClick={()=>clearButtons('CE')}>CE</button>
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
                        <button onClick={() => mathButtonsFunc('radical')}>√<sup>y</sup></button>
                    </div>
                    <div>
                        <button onClick={() => mathButtonsFunc('divide')}>÷</button>
                    </div>
                    <div>
                        <button onClick={() => mathButtonsFunc('multiply')}>x</button>
                    </div>
                    <div className='PlusAndEqual'>
                        <button onClick={() => mathButtonsFunc('plus')}>+</button>
                    </div>
                    <div>
                        <button onClick={()=>mathButtonsFunc('degree')}>x<sup>y</sup></button>
                    </div>
                    <div>
                        <button>%</button>
                    </div>
                    <div>
                        <button onClick={() => mathButtonsFunc('minus')}>-</button>
                    </div>
                    <div className='PlusAndEqual'>
                        <button onClick={equalButtonPress}>=</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

