import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InsightsIcon from '@mui/icons-material/Insights';
import PersonIcon from '@mui/icons-material/Person';
import RouteIcon from '@mui/icons-material/Route';
import AddIcon from '@mui/icons-material/Add';


export const AppBarDrawer = (props: { open: boolean, setOpenDrawer(): void , isRestaurant: boolean}) => {


    const restaurantItems = [
        {
            id: 0,
            avatarIcon: (<RestaurantIcon />),
            message: "My Restaurant",
        },
        {
            id: 1,
            avatarIcon: (<InsightsIcon />),
            message: "Itinerary Insights",
        },
        /*{
            id: 2,
            avatarIcon: (<ForumRoundedIcon />),
            message: "Nachrichten",
        },*/
        {
            id: 2,
            avatarIcon: (<PersonIcon />),
            message: "My Profile",
    
        }
    ];

    const touristItems = [
        {
            id: 0,
            avatarIcon: (<RestaurantIcon />),
            message: "Homepage",
        },
        {
            id: 1,
            avatarIcon: (<AddIcon />),
            message: "Create Itinerary",
        },
        {
            id: 2,
            avatarIcon: (<RouteIcon />),
            message: "My Itineraries",
        },
        {
            id: 3,
            avatarIcon: (<PersonIcon />),
            message: "My Profile",
    
        }
    ];

    const navigate = useNavigate();
    const drawerWidth = 300;
    const navigateToRestaurant = async (index: number) => {
        switch (index) {
            case 0: {
                navigate("/")
                break;
            }
            case 1: {
                navigate("/")
                break;
            }
            case 2: {
                navigate("/")
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    }
    const navigateToTourist = async (index: number) => {
        switch (index) {
            case 0: {
                navigate("/")
                break;
            }
            case 1: {
                navigate("/")
                break;
            }
            case 2: {
                navigate("/")
                break;
            }
            case 3: {
                navigate("/")
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    }
    return (
        <Drawer
            open={props.open}
            onClose={() => props.setOpenDrawer()}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor:"#C00000" },
            }}
        >
            <List style={{marginTop: "60px"}}>    

            {props.isRestaurant && restaurantItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => navigateToRestaurant(index)} >
                        <ListItemIcon sx={{color:"white"}}>
                            {item.avatarIcon}
                        </ListItemIcon>
                        <ListItemText primary={item.message} sx={{color:"white"}}/>
                    </ListItem>
                ))
                }
                {props.isRestaurant === false && touristItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => navigateToTourist(index)} >
                        <ListItemIcon sx={{color:"white"}}>
                            {item.avatarIcon}
                        </ListItemIcon>
                        <ListItemText primary={item.message} sx={{color:"white"}}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}