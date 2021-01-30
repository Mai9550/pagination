import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import {Route,Link} from 'react-router-dom';

const HomePage = () =>{
    return(
        <Container >

<Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Home</Navbar.Brand>
      </Navbar>
      <h1  style={{textAlign:'center',marginTop:50}}>Choose a category to continue</h1>
     <div style={{display:'flex',justifyContent:'center'}}>
<Row style={{marginTop:100,marginBottom:375}}  >
   
<Col xs={{ order: 'first' }}>  <Link to="/starships"><Button style={{width:150,height:70,padding:10}}  >Starships</Button></Link></Col>
      <Col xs={{ order: 'last' }}> <Link to="/planets"> <Button style={{width:150,height:70,padding:10}} >Planets</Button></Link></Col>
        </Row>
        </div>
        
    
        </Container>
        );
};
export default HomePage;