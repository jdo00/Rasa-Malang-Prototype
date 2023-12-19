import Button from "@mui/material/Button";
import { Header } from "../../components/Header";
import { Scaffold } from "../../components/Scaffold";

export function SetPreferences () {

    return (

        <Scaffold header= {<Header isRestaurant={false}/>}>
        <div style={{marginTop:"5rem"}}>
        <h2 style={{ fontSize: "1em", marginBottom: "1rem" }}>Create itinerary<span style={{ fontSize: "0.8em" }}>- set preferences</span> </h2>
        <Button variant="contained" style={{display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"2rem"}}>save preferences</Button>
        </div>
        </Scaffold> 

    )
}