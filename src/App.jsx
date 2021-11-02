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

        <FormRegister
          toSend={methods.imprimirDados}
          validadeCPF={methods.cpfValidation}
        />
      </div>
    </Container>
  );
}

const methods = {
  imprimirDados(dados) {
    console.log(dados);
  },
  cpfValidation(cpf) {
    if (cpf.length !== 11) {
        return { validation: false, text: "Formato de CPF inválido" }
      } else { return { validation: true, text: "" } };
    }
}

export default App;
