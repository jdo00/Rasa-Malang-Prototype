import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import StarIcon from '@mui/icons-material/Star';
import Bossman from "../Bosman.jpg"

export function RestaurantReview () {

    return (
        <>
        <img src={Bossman} alt="test" width={"358px"} height={"220px"}/>
        <h2>Bosman</h2>
        <div style={{display:"flex",justifyContent:"space-evenly", height:"180px"}}>
        <BarChart
             yAxis={[{ scaleType: 'band', data: [6,5,4,3,2,1]}]}
             series={[
             {
                data: [50, 45, 30, 10, 3, 1],
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
            <p>4.5</p>
            <StarIcon color="primary"/>
            </div>
            <p style={{fontSize:"x-small", marginTop:"0"}}>273 reviews</p>
        </div>
        <p> 88% <span style={{fontSize:"x-small"}}>recommended </span></p>
        </div>
        </div>
        <p>Often mentioned</p>
        <div style={{display:"flex", flexWrap:"wrap", gap:"1rem"}}>
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>Burger </span>
        <span style={{ fontSize: '0.8em', color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'lighter' }}>150</span>
        </Typography>
      }/>
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>Fries </span>
        <span style={{ fontSize: '0.8em', color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'lighter' }}>121</span>
        </Typography>
      } />
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>Pizza </span>
        <span style={{ fontSize: '0.8em', color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'lighter' }}>50</span>
        </Typography>
      }/>
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>Pad Thai  </span>
        <span style={{ fontSize: '0.8em', color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'lighter' }}>15</span>
        </Typography>
      } />
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>Soup </span>
        <span style={{ fontSize: '0.8em', color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'lighter' }}>22</span>
        </Typography>
      } />
        <Chip label={
        <Typography>
        <span style={{ fontSize: '0.9em', fontWeight: 'normal' }}>Stew </span>
        <span style={{ fontSize: '0.8em', color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'lighter' }}>30</span>
        </Typography>
      } />
        </div>
        </>
    )
} 