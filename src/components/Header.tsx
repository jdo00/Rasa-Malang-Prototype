import { AppBar, Box, IconButton, SvgIcon, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {ReactComponent as RasaMalangLogo} from '../64pxRasaLogo.svg'

export function Header () {

return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Rasa Malang
          </Typography>
          <RasaMalangLogo/>
        </Toolbar>
      </AppBar>
    </Box>
);
}