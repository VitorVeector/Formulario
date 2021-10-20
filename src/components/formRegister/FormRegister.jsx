import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <div className="formulario">
      <form action="" className="formulario-cadastro">
        <TextField
          id="form-name"
          label="Nome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          id="form-surname"
          label="Sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          id="form-cpf"
          label="CPF"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControlLabel
          label="Promoções"
          control={
            <Switch name="promocoes" size="small" defaultChecked={true} />
          }
        />
        <FormControlLabel
          label="Novidades"
          control={
            <Switch name="novidades" size="small" defaultChecked={true} />
          }
        />
        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default FormularioCadastro;
