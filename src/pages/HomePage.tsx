import Button from "@mui/material/Button";
import { Header } from "../components/Header";
import { Scaffold } from "../components/Scaffold";


export default function HomePage() {
    return (
        <Scaffold header= {<Header/>}>
        <h2>Welcome to Rasa Malang</h2>
             <Button variant="contained">Material button</Button>
        </Scaffold>
    )
  }