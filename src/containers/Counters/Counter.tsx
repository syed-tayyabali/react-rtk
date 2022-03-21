import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { subtractAmmount, addAmmount } from '../../features/counter/actions'

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value)

    const dispatch = useAppDispatch()
    const [addValue, setAddValue] = useState(Number)
    const [subtractValue, setSubtractValue] = useState(Number)

    return (
        <>
            <p>
                <input type='number' value={addValue} onChange={(e) => setAddValue(parseInt(e.target.value))} />
                <button onClick={() => dispatch(addAmmount(addValue))}>Add Amount</button>
            </p>
            <p>
                <input type='number' value={subtractValue} onChange={(e) => setSubtractValue(parseInt(e.target.value))} />
                <button onClick={() => dispatch(subtractAmmount(subtractValue))}>subreact Amount</button>
            </p>
            <p>value is {count}</p>
        </>
    );
}

export default Counter;