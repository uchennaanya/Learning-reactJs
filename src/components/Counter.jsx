import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter( counter+1)
    }
    return (
        <>
        <p>Counter : {counter} <button onClick={increase}>Count</button></p>
        </>
    )
}

export default Counter