import React, { useEffect, useState } from 'react'

const Syntax = () => {

    const [checkBox, setCheckBox] = useState()

    useEffect(() => {
        console.log('in UseEffect')
        return () => {
            console.log('in useEffect Cleanup')
        }

    }, [checkBox])
    return (
        <div>

        </div>
    )
}

export default Syntax
