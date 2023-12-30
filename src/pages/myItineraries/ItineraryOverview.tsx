import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Scaffold } from "../../components/Scaffold";
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react";

function ShowUpcoming() {
    
    {/* hardcoded Data for upcoming Itinerary */}
    const itinerary = {
        name: "Malang 1st day",
        date: "18.01.2023",
        image: "/attractions/BrawijayaMuseum.jpeg"
    }
    

    const navigate = useNavigate();

    return (
        
        <div style={{marginLeft: "1rem", marginRight:"1rem"}}>
            <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'space-around', marginTop: '20px'}}>
                    
                {/* Display Cover */}
                <Card sx={{ maxWidth: 345 , marginTop: "0", backgroundColor:"#e6e2dd"}}>
                    <CardMedia sx={{ height: 120 }} image={itinerary.image} title={itinerary.name} />
                    <CardContent sx={{ paddingBottom: '0' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {itinerary.name}
                        </Typography>
                    </CardContent>
                                
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Text (Date) on left side */}
                        <p>{itinerary.date}</p>
                        {/* Button "View Itinerary" on right side */}
                        <Button size="small" onClick={() => navigate("/myitineraries/1")}>
                            View Itinerary
                        </Button>
                    </CardActions>
                </Card>
                    
            </div>
        </div>
    )
}

function ShowPast() {
    return(
        <Scaffold header= {<Header isRestaurant={false}/>}>
            { null }
        </Scaffold>
    )
}

export default function ItineraryOverview() {

    const [toggle, setToggle] = useState(true)

    return (
        <Scaffold header= {<Header isRestaurant={false}/>}>
            <div style={{marginTop:"5rem"}}>
                <h2 style={{ fontSize: "1em", marginBottom: "1rem" }}>My Itineraries</h2>
                
                <div style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-around' }}>
                <ButtonGroup variant="contained">
                    {/* "Upcoming" Button */}
                    <Button style={{ background: toggle === true ? "#C00000" : "#DADADA"  }} onClick={() => setToggle(true)}>
                        Upcoming
                    </Button>
                    {/* "Past" Button */}
                    <Button style={{ background: toggle === false ? "#C00000" : "#DADADA" }} onClick={() => setToggle(false)}>
                        Past
                    </Button>
                </ButtonGroup>
                </div>

                {toggle ? <ShowUpcoming/> : <ShowPast/>}

            </div>
        </Scaffold>
    )
  }