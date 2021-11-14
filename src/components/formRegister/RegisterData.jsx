import React, { useState, useContext } from 'react';

/* MATERIAL UI */
import { Button, TextField } from '@material-ui/core';

import RegisterValidate from '../../contexts/RegisterValidate'

function RegisterData({toSend}){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState({pass: {validation: true,text: ""}})

    const validate = useContext(RegisterValidate)

    function validateField(e){
        const {name, value} = e.target 
        const newState = {...error}
        newState[name] = validate[name](value)
        setError(newState)
    }

    function canSend(){
        for(let field in error){
            console.log(error)
            if(!error[field].validation){
                return false
            }
        }
        return true
    }
    return(
        <form
            onSubmit={(e) => {
                e.preventDefault()
                if(canSend()){
                    toSend({email, pass})
                }  
            }}>
            <TextField 
                id="email"
                label="e-mail"
                type="email"
                name="email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={e => {
                    setEmail(e.target.value)
                }}
                required
                fullWidth/>
            <TextField 
                id="pass"
                label="Senha"
                name="pass"
                helperText={error.pass.text}
                error={!error.pass.validation}
                onBlur={validateField}
                type="password"
                variant="outlined"
                margin="normal"
                value={pass}
                onChange={e => {
                    setPass(e.target.value)
                }}
                required
                fullWidth/>
            <Button 
                type="submit"
                variant="contained"
                color="primary"
                >Próximo</Button>
        </form>
    )
}

export default RegisterData;