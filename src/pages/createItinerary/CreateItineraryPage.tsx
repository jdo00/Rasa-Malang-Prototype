import Button from "@mui/material/Button";
import { Header } from "../../components/Header";
import { Scaffold } from "../../components/Scaffold";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { FormEvent } from "react";
import { PickAttractions } from "./PickAttractions";
import { SetPreferences } from "./SetPreferences";

export function CreateItineraryPage () {
    const {steps, currentStepIndex, step, stepIndex, isFirstStep, back, next, isLastStep } = useMultistepForm([<PickAttractions/>, <SetPreferences/> ])


    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
    }
    return (

        <Scaffold header= {<Header isRestaurant={false}/>}>
        <div style={{marginTop:"5rem"}}>
        </div>
        <form onSubmit={onSubmit} style={{ minHeight: '100vh', position: 'relative' }}>
      <div style={{ paddingBottom: '3rem', minHeight: '100%' }}>
        {step}
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '1rem', backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-around' }}>
        {!isFirstStep && <Button type="button" variant="outlined" onClick={back}>GO BACK</Button>}
        <Button style={{ margin: '0' }} variant="contained" type="submit">
          {!isLastStep ? 'Next' : 'Finish'}
        </Button>
      </div>
    </form>
        </Scaffold> 

    )
}