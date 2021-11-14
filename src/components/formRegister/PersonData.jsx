import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import RegisterValidate from '../../contexts/RegisterValidate'

function PersonData({toSend}) {
  const [name, setName] = useState("")
  const [surName, setSurname] = useState("")
  const [cpf, setCpf] = useState("")
  const [promotion, setPromotion] = useState(true)
  const [news, setNews] = useState(true)
  const [error, setError] = useState({cpf: {validation: true,text: ""}})

  const validate = useContext(RegisterValidate)

  function validateField(e){
      const {name, value} = e.target 
      const newState = {...error}
      newState[name] = validate[name](value)
      setError(newState)
  }

  function canSend(){
    for(let field in error){
      if(!error[field].validation){
        return false
      }
    }
    return true
  }

  return (
    <div className="formulario">
      <form 
        className="formulario-cadastro"
        onSubmit={ e => {
          e.preventDefault();
          if(canSend()){
            toSend({name, surName, cpf, promotion, news})
          }
        }
        }>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          id="form-name"
          label="Nome"
          name="name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          value={surName}
          onChange={e => setSurname(e.target.value)}
          id="form-surname"
          name="surname"
          label="Sobrenome"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
        onBlur={validateField}
          value={cpf}
          name="cpf"
          onChange={e => setCpf(e.target.value)}
          id="form-cpf"
          label="CPF"
          variant="outlined"
          margin="normal"
          required
          error={!error.cpf.validation}
          helperText={error.cpf.text}
          fullWidth
            />
        <FormControlLabel
          label="Promoções"
          control={
            <Switch 
              checked={promotion}
              onChange={e => setPromotion(e.target.checked)}
              name="promocoes" 
              size="small" />
          }
        />
        <FormControlLabel
          label="Novidades"
          control={
            <Switch 
              checked={news}
              onChange={e => setNews(e.target.checked)}
              name="novidades" 
              size="small"  />
          }
        />
        <Button
          variant="contained"
          color="primary"
          type="submit">Próximo</Button>
      </form>
    </div>
  );
}

export default PersonData;
