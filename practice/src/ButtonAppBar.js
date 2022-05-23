import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ButtonAppBar(props) {
  {console.log(props.count)}
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Online Shop
          </Typography>
          <Button color="inherit"><ShoppingCartIcon></ShoppingCartIcon>Cart  ({props.count})</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
