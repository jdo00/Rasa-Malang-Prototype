import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {ReactComponent as UserLogo} from '../../Icons_Basic_User.svg'

export function UserInfoCompleted () {
    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "1rem" }}>
            <UserLogo/>
            <h2 style={{ textAlign: "center" }}>You are all set!</h2>
            <p style={{ textAlign: "center" }}>Congratulations! You are now part of the Rasa Malang community. Your personalized culinary experiences await.</p>
            <Button style={{marginTop:"2rem"}}variant="contained" onClick={() => navigate("/")}>Go to homepage</Button>
        </div>
    )
}