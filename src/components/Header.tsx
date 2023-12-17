import { AppBar, Box, IconButton, SvgIcon, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {ReactComponent as RasaMalangLogo} from '../64pxRasaLogo.svg'
import { AppBarDrawer } from "./Drawer";
import { useState } from "react";

export function Header (props:{isRestaurant:boolean}) {
  const [openDrawer, setOpenDrawer] = useState(false)

return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1, paddingTop: "env(safe-area-inset-top)", paddingLeft: "env(safe-area-inset-left)"}}>
        <Toolbar>
        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                        onClick={() => setOpenDrawer(!openDrawer)}
                    >
                        {!openDrawer ? <MenuIcon/> : <CloseIcon/>}

                    </IconButton>
          <AppBarDrawer open={openDrawer} setOpenDrawer={() => setOpenDrawer(false)} isRestaurant={props.isRestaurant}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Rasa Malang
          </Typography>
          <RasaMalangLogo/>
        </Toolbar>
      </AppBar>
    </Box>
);
}