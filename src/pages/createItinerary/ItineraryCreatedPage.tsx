import Button from "@mui/material/Button";
import { Header } from "../../components/Header";
import { Scaffold } from "../../components/Scaffold";
import {ReactComponent as RouteIcon} from './route.svg';
import { useNavigate } from "react-router";
export function ItineraryCreatedPage() {
    const navigate = useNavigate();
    return (
        <Scaffold header= {<Header isRestaurant={false}/>}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "1rem" }}>
        <RouteIcon/>
        <h2 style={{ textAlign: "center" }}>You are all set!</h2>
        <p style={{ textAlign: "center" }}>Congratulations! Your itinerary has been created, visit "my itineraries" to see details</p>
        <Button style={{marginTop:"2rem"}}variant="contained" onClick={() => navigate("/")}>Go to my itineraries</Button>
        </div>
        </Scaffold>
       
   
    )
}