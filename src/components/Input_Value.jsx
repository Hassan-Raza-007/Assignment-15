import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { database } from '../config/firebase-config'

const Input_Value = (props) => {
    const [user_Value, setuser_Value] = useState('')

    const onchange_handle = (e) => {
        setuser_Value(e.target.value)
    }
    const onclick_handle = () => {

const new_message_key = push(child(ref(database, "messages")).key;
set(ref(database,`messages/${new_message_key}`))

)


        //console.log(user_Value)
        setuser_Value('')
    }

    // useEffect(() => {
    //     console.log(user_Value)


    // }, [])



    return (
        <>
            <input {...props} onChange={onchange_handle} value={user_Value} />
            <Button onClick={onclick_handle} variant="contained">Contained</Button>
        </>
    )
}

export default Input_Value