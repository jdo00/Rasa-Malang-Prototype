import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Scaffold } from "../../components/Scaffold";
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip";
import { useState } from "react";

export default function ItineraryDetails() {

    {/* hardcoded Data for Itinerary */}
    const itinerary = {
        name: "Malang 1st day",
        date: "18.01.2023"
    }

    {/* hardcoded Data for Stop 1*/}
    const attractions = [
        {
            id: 1,
            stop1: true,
            image: '/attractions/BrawijayaMuseum.jpeg',
            title: 'Brawijaya Museum'
        },
        {
            id: 2,
            stop1: false,
            image: '/attractions/CulturCenter.jpeg',
            title: 'Cultural Center of East Java'
        }
    ]

    const restaurants = [
        {
            id: 1,
            stop1: true,
            image: '/PrototypeData/Restaurant/Bakwan_Subur_cabang_Panderman/Interior/mainPic.jpeg',
            title: 'Bakwan Subur Cabang Panderman',
            map: '/PrototypeData/Itinerary/Map_Stop1.png',
            walktime: '3 min walk',
        },
        {
            id: 2,
            stop1: false,
            image: '/PrototypeData/Restaurant/Steak_Moen-Moen/Interior/mainPic.jpg',
            title: 'Steak Moen-Moen',
            map: '/PrototypeData/Itinerary/Map_Stop2.png',
            walktime: '12 min walk',
        }
    ]


    const navigate = useNavigate();

    const [toggle, setToggle] = useState(true)

    const filteredAttractions = attractions.filter(attraction => attraction.stop1 == toggle);
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.stop1 == toggle);

    return (
        <Scaffold header= {<Header isRestaurant={false}/>}>
            <div style={{marginTop:"5rem"}}>
                <h2 style={{ fontSize: "1em", marginBottom: "1rem" }}>{itinerary.name}</h2>
                <p>{itinerary.date }</p>
                
                <div style={{marginLeft: "2rem", marginRight:"2rem"}}>

                    {/* Display Map */}
                    <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'space-around', marginTop: '20px', marginBottom: '20px'}}>

                        {filteredRestaurants.map(restaurant => (
                            <Card sx={{ maxWidth: 300, marginTop: "0", backgroundColor:"#e6e2dd"}}>
                                <CardMedia sx={{ height: 150 }} image={restaurant.map}/>
                            </Card>
                        ))}
                    
                    </div> 

                </div>

                <div style={{marginLeft: "1rem", marginRight:"1rem"}}>

                    {/* Switch between Stops */}
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Chip label= "Stop nr. 1" onClick={() => setToggle(true)} color= {toggle === true ? "primary": "default"} sx= {{width: "9rem"}}/>
                        <Chip label= "Stop nr. 2" onClick={() => setToggle(false)} color= {toggle === false ? "primary": "default"} sx= {{width: "9rem"}}/>
                    </div>
                    
                    {/* Display Tourist Attraction */}
                    <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'space-around', marginTop: '20px', marginBottom: '20px'}}>

                        {filteredAttractions.map(attraction => (
                            <Card sx={{ maxWidth: 345, marginTop: "0", backgroundColor:"#e6e2dd"}}>
                                <CardMedia sx={{ height: 120 }} image={attraction.image} title={attraction.title} />
                                <CardContent sx={{ paddingBottom: '0' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {attraction.title}
                                    </Typography>
                                </CardContent>
                                
                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {/* Logo on left side */}
                                    <img src="/PrototypeData/Itinerary/Attraction_Symbol.svg"/>
                                </CardActions>
                            </Card>
                        ))}

                    </div>

                    {/* Display Restaurant */}
                    <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'space-around', marginTop: '20px', marginBottom: '20px'}}>
                        
                        {filteredRestaurants.map(restaurant => (
                            <Card sx={{ maxWidth: 345, marginTop: "0", backgroundColor:"#e6e2dd"}}>
                                <CardMedia sx={{ height: 120 }} image={restaurant.image} title={restaurant.title} />
                                <CardContent sx={{ paddingBottom: '0' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {restaurant.title}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {/* Logo on left side */}
                                    <img src="/PrototypeData/Itinerary/Restaurant_Symbol.svg"/>
                                    {/* Walktime on right side */}
                                    <p>{restaurant.walktime}</p>
                                </CardActions>
                            </Card>
                        ))}
                    </div>

                    {/* Go Back to Overview */}
                    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '1rem', backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-around' }}>
                        <Button type="button" variant="outlined" onClick={() => navigate("/myitineraries")}> GO BACK</Button>
                    </div>

                </div>
            </div>
        </Scaffold>
    )
  }