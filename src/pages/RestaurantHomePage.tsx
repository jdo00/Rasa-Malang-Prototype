import Button from "@mui/material/Button";
import { Header } from "../components/Header";
import { Scaffold } from "../components/Scaffold";
import Bossman from "../Bosman.jpg"
import { BarChart } from "@mui/x-charts";
import StarIcon from '@mui/icons-material/Star';
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { RestaurantReview } from "../components/RestaurantReview";
import { useState } from "react";
import { ReviewsDialog } from "../components/ReviewsDialog";


export default function RestaurantHomePage() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };
    return ( 
        <Scaffold header= {<Header isRestaurant={true} />}>
        <div style={{marginTop:"5rem"}}>
        <h2 style={{ fontSize: "1.5em", marginBottom: "1rem" }}>My Restaurant<span style={{ fontSize: "0.8em" }}>- dashboard</span> </h2>
        <RestaurantReview/>
        <Button variant="contained" onClick={handleClickOpen} style={{display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"2rem"}}>View detailed reviews</Button>
        </div>
        <ReviewsDialog open={open} onClose={handleClose}/>
        </Scaffold>
    )
  }