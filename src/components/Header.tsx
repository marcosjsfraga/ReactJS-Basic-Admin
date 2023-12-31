import { AppBar, Box, Button, IconButton, Typography, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, styled, useTheme } from '@mui/material';
import { Home, FileOpen, AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


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
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Basic Admin
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* HOME */}
          <ListItem key='/' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          {/* FILES */}
          <ListItem key='category/create' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FileOpen />
              </ListItemIcon>
              <ListItemText primary='Files' />
            </ListItemButton>
          </ListItem>
          {/* FILES */}
          <ListItem key='Save' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FileOpen />
              </ListItemIcon>
              <ListItemText primary='Save' />
            </ListItemButton>
          </ListItem>

        </List>
        <Divider />

    </Drawer>

    </Box>
  )
}
