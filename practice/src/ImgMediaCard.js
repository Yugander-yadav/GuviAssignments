import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
export default function ImgMediaCard(props) {
  
  const[itemInCart,setItemInCart]=useState(false)

  const addItem=()=>{
    setItemInCart(!itemInCart)
    props.addtoCartCount(itemInCart)
   display()
    
    
   
    
  }
  const display=()=>{
    console.log(itemInCart)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Product Image"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Item Name :
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Item:description:"The name of the item is  and the is item is made of best quality materials"
        </Typography>
      </CardContent>
      <CardActions>
       
        {(itemInCart)?<Button size="small" variant="contained" onClick={()=>{addItem()}}>Remove from cart</Button>:<Button size="small" variant="contained" onClick={()=>{addItem()}}>Add to Cart</Button>}
      </CardActions>
    </Card>
  );
}
