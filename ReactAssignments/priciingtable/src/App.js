import logo from './logo.svg';
import './App.css';
import Pricingtable from './Pricingtable';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Container fluid  style={{'height':"100vh"}}>
      <Pricingtable />
    </Container>
  );
}

export default App;
