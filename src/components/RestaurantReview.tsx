import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import StarIcon from '@mui/icons-material/Star';
import { PictureSlide } from "./PictureSlide";


export function RestaurantReview () {
    const imageSources = ['/Steak_Moen_Moen/MoenMoenFront.jpg', '/Steak_Moen_Moen/MoenMoenInside.jpg'];
    return (
        <>
        {/*<img src="/Steak_Moen_Moen/MoenMoenFront.jpg" alt="test" width={"358px"} height={"220px"}/>*/}
        <PictureSlide imageSources={imageSources} />
        <h2>Steak Moen-Moen</h2>
        <div style={{display:"flex",justifyContent:"space-evenly", height:"180px"}}>
        <BarChart
             yAxis={[{ scaleType: 'band', data: [5,4,3,2,1]}]}
             series={[
             {
                data: [40, 50, 10, 3, 1],
                color: "#C00000"
                },
            ]}
            width={300}
            height={230}
            layout="horizontal"
            bottomAxis={null}
            margin={{
                top: -20,
                left:20,
                right:20
              }}
        />
        <div>
        <div>
            <div style={{display:"flex",alignItems:"center", margin:"0", height:"30px"}}>
            <p>4.23</p>
            <StarIcon color="primary"/>
            </div>
            <p style={{fontSize:"x-small", marginTop:"0"}}>104 reviews</p>
        </div>
        <p> 50% <span style={{fontSize:"x-small"}}>recommended </span></p>
        </div>
        </div>
        <p>Often mentioned</p>
        <div style={{display:"flex", flexWrap:"wrap", gap:"1rem"}}>
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>steaks </span>
        </Typography>
      }/>
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>cheapest </span>
        </Typography>
      } />
         <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>crispy </span>
        </Typography>
      } />
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>instagrammable </span>
        </Typography>
      }/>
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>milkshake   </span>
        </Typography>
      } />
     
       {/*<Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>Stew </span>
        <span style={{ fontSize: '0.8em', color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'lighter' }}>30</span>
        </Typography>
        } />
        */} 
        </div>
        </>
    )
} 