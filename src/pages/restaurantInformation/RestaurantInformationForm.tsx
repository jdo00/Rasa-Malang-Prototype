import Button from "@mui/material/Button"
import { useMultistepForm } from "../../hooks/useMultistepForm"
import { FormEvent, useState } from "react"
import {BasicInformationForm} from "./BasicInformationForm"
import { ChipData, DietaryCriteriaForm } from "./DietaryCriteriaForm"
import MobileStepper from "@mui/material/MobileStepper"
import { OpeningHoursForm } from "./OpeningHoursForm"
import { MenuUploadForm } from "./MenuUploadForm"
import { InteriorImagesForm } from "./InteriorImagesForms"
import { useNavigate } from "react-router-dom"

type FormData = {
    restaurantName: string
    address: string
    zip: string
    paymentOptions: string[]
    cuisineType : string
    establishmentType: string,
    dietaryChips: ChipData[]
  }
  
  const INITIAL_DATA: FormData = {
    restaurantName: "",
    address: "",
    zip: "",
    paymentOptions: [],
    cuisineType : "",
    establishmentType: "",
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

export default function RestaurantInformationForm () {

    const navigate = useNavigate();

    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
          return { ...prev, ...fields }
        })
      }

    const {steps, currentStepIndex, step, stepIndex, isFirstStep, back, next, isLastStep } = useMultistepForm([<MenuUploadForm/>, <BasicInformationForm {...data} updateFields={updateFields}/>, <DietaryCriteriaForm {...data} updateFields={updateFields}/>, <OpeningHoursForm/>, <InteriorImagesForm/>, ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        navigate("/restaurantsetupcompleted");
    }

    return (
        <form onSubmit={onSubmit} style={{margin:"1rem"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h2>Restaurant Information</h2>
                <p style={{marginTop:"-1rem", textAlign: "center"}}>{stepIndex === 0 ? "Set up your restaurant info in 5 steps" : stepIndex === 1 ? "Set basic information" : stepIndex === 2 ? "Set culinary criteria your restaurant is meeting": stepIndex===3 ? "Set your opening hours": "Upload pictures of the interior of you restaurant"}</p>
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