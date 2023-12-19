import Button from "@mui/material/Button";
import { Header } from "../../components/Header";
import { Scaffold } from "../../components/Scaffold";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export function PickAttractions () {

    const attractions = [
        {
          id: 1,
          image: '/attractions/BrawijayaMuseum.jpeg',
          title: 'Brawijaya Museum',
        },
        {
          id: 2,
          image: '/attractions/CulturCenter.jpeg',
          title: 'Cultur center',
        },
        {
          id: 3,
          image: '/attractions/KampungWarnaWarni.jpeg',
          title: 'Kampug Warna Warni',
        },
        {
          id: 4,
          image: '/attractions/MalangNightParadise.jpeg',
          title: 'Malang nigth paradise',
        },
      ];
      const [selectedAttractions, setSelectedAttractions] = useState<number[]>([]);

      const toggleAttractionSelection = (attractionId: number) => {
        if (selectedAttractions.includes(attractionId)) {
          setSelectedAttractions((prevSelected) => prevSelected.filter((id) => id !== attractionId));
        } else {
          setSelectedAttractions((prevSelected) => [...prevSelected, attractionId]);
        }
      };
    
    return (

        <Scaffold header= {<Header isRestaurant={false}/>}>
        <div style={{marginTop:"5rem"}}>
        <h2 style={{ fontSize: "1em", marginBottom: "1rem" }}>Create itinerary<span style={{ fontSize: "0.8em" }}>- pick your attractions</span> </h2>
        <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'space-around', marginTop: '20px' }}>
      {attractions.map((attraction) => (
        <Card key={attraction.id} sx={{ maxWidth: 345 , marginTop: attraction.id !== 1 ? "2rem" : "0", backgroundColor:"inherit"}}>
          <CardMedia sx={{ height: 120 }} image={attraction.image} title={attraction.title} />
          <CardContent sx={{ paddingBottom: '0' }}>
            <Typography gutterBottom variant="h5" component="div">
              {attraction.title}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            {selectedAttractions.includes(attraction.id) ? (
              <Button size="small" endIcon={<DeleteIcon />} onClick={() => toggleAttractionSelection(attraction.id)}>
                Delete
              </Button>
            ) : (
              <Button size="small" endIcon={<AddCircleOutlineIcon />} onClick={() => toggleAttractionSelection(attraction.id)}>
                Add to itinerary
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
    <Button onClick={()=>console.log(selectedAttractions.length)}> Clikke</Button>
        </div>
        </Scaffold> 

    )

}