import React, {useState} from 'react';

/* MATERIAL UI */
import { Button, TextField } from '@material-ui/core';

function DataSent({toSend}){
    const [cep, setCep] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState()
    const [addAddress, setAddAdress] = useState('')

    return(
        <form
            onSubmit={e => {
                e.preventDefault()
                toSend({cep, state, city, district, street, number, addAddress})
                }}>
             <TextField 
                id="cep"
                label="CEP"
                type="text"
                variant="outlined"
                margin="normal"
                value={cep}
                required
                onChange={e => {
                    setCep(e.target.value)
                }}
                />
                <TextField 
                id="address-state"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                required
                value={state}
                onChange={e => {
                    setState(e.target.value)
                }}
                />
                <TextField 
                id="address-city"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                required
                value={city}
                onChange={e => {
                    setCity(e.target.value)
                }}
                />
                <TextField 
                id="address-district"
                label="Bairro"
                type="text"
                variant="outlined"
                margin="normal"
                required
                value={district}
                onChange={e => {
                    setDistrict(e.target.value)
                }}
                fullWidth/>
                <TextField 
                id="address-street"
                label="Rua"
                type="text"
                variant="outlined"
                margin="normal"
                required
                value={street}
                onChange={e => {
                    setStreet(e.target.value)
                }}
                fullWidth/>
                <TextField 
                id="address-number"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
                required
                value={number}
                onChange={e => {
                    setNumber(e.target.value)
                }}
                />
                <TextField 
                id="cep"
                label="Complemento"
                type="text"
                variant="outlined"
                margin="normal"
                required
                value={addAddress}
                onChange={e => {
                    setAddAdress(e.target.value)
                }}
                fullWidth/>
                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth>Cadastrar</Button>
        </form>
    )
}

export default DataSent