import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({toSend, validadeCPF}) {
  const [name, setName] = useState("")
  const [surName, setSurname] = useState("")
  const [cpf, setCpf] = useState("")
  const [promotion, setPromotion] = useState(true)
  const [news, setNews] = useState(true)
  const[error, setError] = useState({cpf: {validation: true,text: ""}})

  return (
    <div className="formulario">
      <form 
        className="formulario-cadastro"
        onSubmit={ e => {
          e.preventDefault();
          toSend({name, surName, cpf, promotion, news})
        }
        }>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          id="form-name"
          label="Nome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={surName}
          onChange={e => setSurname(e.target.value)}
          id="form-surname"
          label="Sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
        onBlur={(e) => {
          const isVld = validadeCPF(cpf)
          setError({cpf: isVld})
        }}
          value={cpf}
          onChange={e => setCpf(e.target.value)}
          id="form-cpf"
          label="CPF"
          variant="outlined"
          margin="normal"
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
          type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}

export default FormularioCadastro;
