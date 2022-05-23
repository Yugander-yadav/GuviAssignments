import React from 'react'

function Banner() {
  return (
    <div style={{ marginTop:"0",marginBottom:"40px",backgroundColor:"gray",height:"40vh",maxWidth:"100vw",textAlign:"center"}}>
       <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column"}}>
       <h1 style={{display:"inline-block"}} >Shop in style</h1>
      
        <p style={{display:"inline-block"}}> Shop before the offers timeout</p>
       </div>
    </div>
  )
}

export default Banner