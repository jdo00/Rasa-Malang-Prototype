import { BarChart } from "@mui/x-charts/BarChart";
import { Header } from "../../components/Header";
import { Scaffold } from "../../components/Scaffold";
import { useState } from "react";

export function ItineraryInsights () {
    const [suggestedAmmount, setSuggestedAmmount] = useState(20)
    const [selectedAmmount, setSelectedAmmount] = useState(7)

    return (
        <Scaffold header= {<Header isRestaurant={true}/>}>
        <div style={{marginTop:"5rem"}}>
        <h2 style={{ fontSize: "1.5em", margin: "0" }}>Itinerary Insights <span style={{ fontSize: "0.8em" }}>- dashboard</span> </h2>
        <BarChart
            xAxis={[
            {
                id: 'barCategories',
                data: ['Suggested', 'Selected'],
                scaleType: 'band',
             },
             ]}
             series={[
             {
                data: [suggestedAmmount, selectedAmmount],
                color: "#C00000"
                },
            ]}
            width={350}
            height={400}
        />
        <p>Your restaurant has been suggested <b>{suggestedAmmount}</b> times in the last month</p>
        <p> <b>{selectedAmmount}</b> Users have decided to select your restaurant as part of their itinerary</p>
        </div>
        </Scaffold>

    
    )
}