import Button from "@mui/material/Button"
import { useMultistepForm } from "../../hooks/useMultistepForm"
import { FormEvent, useState } from "react"
import {PersonalInformationForm} from "../userInformation/PersonalInformationForm"
import { ChipData, DietaryCriteriaForm } from "../restaurantInformation/DietaryCriteriaForm"
import MobileStepper from "@mui/material/MobileStepper"
import { useNavigate } from "react-router-dom"

type FormData = {
    name: string
    surname: string
    age: string[]
    country: string[]
    travellerType: string[]
    dietaryChips: ChipData[]
  }
  
  const INITIAL_DATA: FormData = {
    name: "",
    surname: "",
    age: [],
    country: [],
    travellerType: [],
    dietaryChips:[
        { key: 0, label: 'Vegetarian', focused: false },
        { key: 1, label: 'Vegan' , focused: false },
        { key: 2, label: 'Kosher' , focused: false },
        { key: 3, label: 'Pork-free' , focused: false },
        { key: 4, label: 'Poultry', focused: false  },
        { key: 5, label: 'Gluten-free' , focused: false },
        { key: 6, label: 'Halal' , focused: false },
      ]
  }

export default function UserInformationForm () {

    const navigate = useNavigate();

    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
          return { ...prev, ...fields }
        })
      }

    const {steps, currentStepIndex, step, stepIndex, isFirstStep, back, next, isLastStep } = useMultistepForm([<DietaryCriteriaForm {...data} updateFields={updateFields}/>, <PersonalInformationForm {...data} updateFields={updateFields}/>])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        navigate("/usersetupcompleted");
    }

    return (
        <form onSubmit={onSubmit} style={{margin:"1rem"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h2>{stepIndex === 0 ? "Dietary Restrictions": "Add a personal touch"}</h2>
                <p style={{marginTop:"-1rem", textAlign: "center"}}>{stepIndex === 0 ? "Select your individual dietary restrictions for the recommendation algorithm": "To enhance your journey we´d love to know more about you"}</p>
            </div>
            <MobileStepper variant="dots" steps={steps.length} position="static" activeStep={currentStepIndex} sx={{ maxWidth: 400, flexGrow: 1, backgroundColor:"#f4efea", justifyContent: "center" }} nextButton={null} backButton={null}/>
            <div style={{minHeight:"600px"}}>
            {step}
            </div>
            <div style={{marginTop: "2rem", display:"flex", justifyContent:"space-around" }}>
            {!isFirstStep && <Button type ="button" variant="outlined" onClick = {back}>GO BACK</Button>}
            {<Button style={{margin:"0" }} variant="contained" type ="submit">{!isLastStep? "Next" : "Finish"}</Button>}
            </div>
        </form>
    )
}