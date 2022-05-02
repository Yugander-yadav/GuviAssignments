import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function Pricingtable() {
  return (
    <div
      className="d-flex justify-content-around align-items-center mx-auto"
      style={{ height: "70vh", backgroundColor: "#3843F6", margin: "2vh" }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <h5 class="card-title text-muted text-uppercase text-center">
              Card 1
            </h5>
            <h6 class="card-price text-center">
              $0<span class="period">/month</span>
            </h6>
          </Card.Title>
          <Card.Text>
          <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
          </Card.Text>
          <Button className= "btn btn-primary text-uppercase mx-auto"variant="primary">Subscribe</Button>
        </Card.Body>
      </Card>


      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <h5 class="card-title text-muted text-uppercase text-center">
              Card 2
            </h5>
            <h6 class="card-price text-center">
              $0<span class="period">/month</span>
            </h6>
          </Card.Title>
          <Card.Text>
          <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
          </Card.Text>
          <Button className= "btn btn-primary text-uppercase mx-auto"variant="primary">Subscribe</Button>
        </Card.Body>
      </Card>


      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <h5 class="card-title text-muted text-uppercase text-center">
              Card 3
            </h5>
            <h6 class="card-price text-center">
              $0<span class="period">/month</span>
            </h6>
          </Card.Title>
          <Card.Text>
          <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
          </Card.Text>
          <Button className= "btn btn-primary text-uppercase mx-auto"variant="primary" >Subscribe</Button>
        </Card.Body>
      </Card>

    
    </div>
  );
}

export default Pricingtable;