import React, { useState } from 'react'

export default function ExerciseOne() {
    // states
    const [str1Val, setStr1Val] = useState("ABC")
    const [str2Val, setStr2Val] = useState("BC")
    const [finalValue, setFinalValue] = useState("")

    // on str 1 value change
    const handleStr1Change = ev => {
        const val = ev.target.value
        setStr1Val(val) // setting value
    }

    // on str 2 value change
    const handleStr2Change = ev => {
        const val = ev.target.value
        setStr2Val(val) // setting value
    }


    // result clicked
    const handleGetResult = ev => {
        ev.preventDefault()

        if (str1Val?.length && str2Val?.length) {
            let str1 = str1Val.replaceAll(" ", "").split("")
            let str2 = str2Val.replaceAll(" ", "").split("")

            const str1Result = str1.filter(item => !str2.includes(item))?.join("")
            const str2Result = str2.filter(item => !str1.includes(item))?.join("")

            const finalData = `op1: ${str1Result.toUpperCase() || "<null>"} op2: ${str2Result.toUpperCase() || "<null>"}`

            setFinalValue(finalData) // setting final result
        }
    }


    return (
        <div className='exercise-container one'>
            <h1 className='head'>Exercise One</h1>

            <div className='inputs'>
                {/* item */}
                <div className="item input-item">
                    <input
                        type="text"
                        className='input'
                        placeholder='str1'
                        value={str1Val}
                        onChange={handleStr1Change} />
                </div>

                {/* item */}
                <div className="item input-item">
                    <input
                        type="text"
                        className='input'
                        placeholder='str2'
                        value={str2Val}
                        onChange={handleStr2Change} />
                </div>

                <div className="item btn-item">
                    <button className={`btn`} onClick={handleGetResult}>
                        Get Result
                    </button>
                </div>
            </div>

            {
                finalValue?.length ? (
                    <div className="exercise-one-result">
                        <p>
                            <span>Result:</span> &nbsp; &nbsp;
                            <span>{finalValue}</span>
                        </p>
                    </div>
                ) : null
            }
        </div>
    )
}
