import { useState } from "react"

const Order = () => {
    const [Count, setCount] = useState(0) 

    console.log(Count)
    return (
        <>
        <h1>INI HALAMAN ORDER</h1>

        <button
            onClick = {() => {
                console.log('test')
            }}
            >
            Count : {Count}
        </button>
        </>
    )
}

export default Order