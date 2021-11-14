function cpfValidation(cpf){
    if (cpf.length !== 11) {
        return { validation: false, text: "Formato de CPF inválido" }
      } else { return { validation: true, text: "" } };
}
 
function passValidation(pass){
    if (pass.length < 4 || pass.length > 72) {
        return { validation: false, text: "Senha deve ser de 4 à 72 dígitos." }
      } else { return { validation: true, text: "" } };
}

export {cpfValidation, passValidation}
 
 