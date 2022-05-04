import React from 'react'
import Card from './Card'

function PricingPannel() {
  return (
        <div style={{"display":"flex","height":"80vh","justifyContent":"space-around","align-items":"center",'backgroundColor':"#3944F7","width":"80vw","margin":"5em", "border-radius":"15px"}}>
       
       <Card title="Free"/>
       <Card title="Pro"/>
       <Card title="Professional"/>


        </div>

  )
}

export default PricingPannel