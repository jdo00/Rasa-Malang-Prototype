import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {ReactComponent as UserLogo} from '../../Icons_Basic_User.svg'

export function RestaurantInfoCompleted () {
    const navigate = useNavigate();
    return (

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "1rem" }}>
            <UserLogo/>
            <h2 style={{ textAlign: "center" }}>You are all set!</h2>
            <p style={{ textAlign: "center" }}>Congratulations! You are now part of the Rasa Malang community. Tourists from all around the world will discover your restaurant.</p>
            <Button style={{marginTop:"2rem"}}variant="contained" onClick={() => navigate("/restaurant")}>Go to homepage</Button>
        </div>

    )


}