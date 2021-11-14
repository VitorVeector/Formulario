import React, { useState, useEffect } from "react";

/* COMPONENTS */
import PersonData from './PersonData'
import RegisterData from './RegisterData.jsx'
import DataSent from './DataSent'
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";


function FormularioCadastro({toSend, validate}){ 
  const[currentStep, setCurrentStep] = useState(0)
  const[dataCached, setDataCached] = useState({})

  useEffect(() => {
    if(currentStep === forms.length){
      toSend(dataCached)
    }
  })

  const methods = {
    nextStep(){
      setCurrentStep(currentStep+1)
    },

    cache(data){
      setDataCached({...dataCached, ...data})
      methods.nextStep()
    }
  }

  const forms = [
    <PersonData toSend={methods.cache} validate={validate}/>,
    <RegisterData toSend={methods.cache} validate={validate}/>,
    <DataSent toSend={methods.cache} validate={validate}/>,
    <Typography variant="h5">Cadastro finalizado</Typography>
  ]

  return (
    <div>
      <Stepper activeStep={currentStep}>
        <Step><StepLabel>Dados Pessoais</StepLabel></Step>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Endereço</StepLabel></Step>
      </Stepper>

      {forms[currentStep]}
      
    </div>
  )
}

export default FormularioCadastro;
