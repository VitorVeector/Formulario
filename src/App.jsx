import "./App.css";
import FormRegister from "./components/formRegister/FormRegister.jsx";

/* --- MATERIAL UI ---*/
import { Container } from "@material-ui/core";
import { Typography } from "@mui/material";

/* --- FONTS GOOGLE---*/
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

/* MODELS */
import {cpfValidation, passValidation} from './components/formRegister/models/register'

/* CONTEXT */
import RegisterValidate from './contexts/RegisterValidate'

function App() {
  return (
    <Container
      className="container"
      component="article" // Article para deixar mais semântico
      maxWidth="sm"
    >
      <div className="container-app">
        <Typography
          component="h1" // O componente e um H1, porém com estilo do H3
          variant="h3"
          align="center"
          color="textPrimary">
          Formulário de cadastro
        </Typography>

        <RegisterValidate.Provider value={{cpf: cpfValidation, pass: passValidation}}>
          <FormRegister
            toSend={methods.imprimirDados}/>
        </RegisterValidate.Provider>
      </div>
    </Container>
  );
}

const methods = {
  imprimirDados(dados) {
    console.log(dados);
  },
  
}

export default App;
