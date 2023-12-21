import Button from "@mui/material/Button";
import { Header } from "../../components/Header";
import { Scaffold } from "../../components/Scaffold";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { FormEvent, useState } from "react";
import { PickAttractions } from "./PickAttractions";
import { SetPreferences } from "./SetPreferences";
import { SelectRestaurants } from "./SelectRestaurants";
import { useNavigate } from "react-router-dom";

type ItineraryData = {
    attractionsIDs: number[]
    date: string
    itineraryName: string,
    typeOfEstablishment: string
    cuisineType: string 
  }

const INITIAL_DATA: ItineraryData = {
    attractionsIDs: [],
    date: "",
    itineraryName: "",
    typeOfEstablishment: "",
    cuisineType:""
    
}
export function CreateItineraryPage () {

    const [data, setData] = useState(INITIAL_DATA)
    const navigate = useNavigate();

    function updateFields(fields: Partial<ItineraryData>) {
        setData(prev => {
          return { ...prev, ...fields }
        })
      }
    const {steps, currentStepIndex, step, stepIndex, isFirstStep, back, next, isLastStep } = useMultistepForm([<PickAttractions {...data} updateFields={updateFields}/>, <SetPreferences {...data} updateFields={updateFields}/>,...data.attractionsIDs.map((attractionID, index) => (
        <SelectRestaurants key={index} AttractionNr={index} AttractionId={attractionID}/> ))])


    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next();
        navigate("/itinerarycreated");
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
          {isFirstStep ? 'Next' : stepIndex===1 ?"save preferences" :  !isLastStep ? "Next": 'Finish'}
        </Button>
      </div>
    </form>
        </Scaffold> 

    )
}