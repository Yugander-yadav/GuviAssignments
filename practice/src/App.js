import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './ButtonAppBar';
import Container from "@mui/material/Container"
import Banner from './Banner';
import ImgMediaCard from './ImgMediaCard';
import { Grid } from '@mui/material';
import {React,useState} from "react"

function App() {
  const [cartCount,setCartCount]=useState(0)
  const updateCartCount=(added)=>{
    console.log(added)
    !added?setCartCount(cartCount+1):setCartCount(cartCount-1)
  }
  return (
   <>
   
  
   <ButtonAppBar count={cartCount} />
   <Banner />
   <Container fluid>
   <Grid container spacing={{ xs: 4, md: 3 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
   <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>
  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

  <Grid item xs={4}>
    <ImgMediaCard addtoCartCount={(add)=>{updateCartCount(add)}}></ImgMediaCard>
  </Grid>

</Grid>

   </Container>
   </>
  );
}



 
export default App;
