import Button from "@mui/material/Button";
import { Header } from "../../components/Header";
import { Scaffold } from "../../components/Scaffold";
import TextField from "@mui/material/TextField";

type PreferencesData = {
date: string
itineraryName: string,
typeOfEstablishment: string
cuisineType: string
attractionsIDs: number[]
}

type PreferencesProps = PreferencesData &  {
    updateFields: (fields: Partial<PreferencesData>) => void
  }
export function SetPreferences ({date, itineraryName, typeOfEstablishment, cuisineType, attractionsIDs,updateFields}: PreferencesProps) {

    return (

        <Scaffold header= {<Header isRestaurant={false}/>}>
        <div style={{marginTop:"5rem"}}>
        <h2 style={{ fontSize: "1em", marginBottom: "1rem" }}>Create itinerary<span style={{ fontSize: "0.8em" }}>- set preferences</span> </h2>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", rowGap:"2rem"}}>
        <TextField  id="itineraryName" label="Name of itinerary" variant="filled" required  value={itineraryName}
        onChange={e => updateFields({ itineraryName: e.target.value })}/>
        <TextField  id="date" label="date" variant="filled" required  value={date}
        onChange={e => updateFields({ date: e.target.value })}/>
        <TextField  id="establishmentType" label="Type of establishment" variant="filled" required  value={typeOfEstablishment}
        onChange={e => updateFields({ typeOfEstablishment: e.target.value })}/>
        <TextField id="cuisineType" label="Cuisine Type" variant="filled" required  value={cuisineType}
        onChange={e => updateFields({ cuisineType: e.target.value })}/>
        </div>
        </div>
        </Scaffold> 

    )
}