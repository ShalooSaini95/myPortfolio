import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,Row,Col,Form,Button ,Alert} from 'react-bootstrap'


export default function Contact  ()  {
  const [formData,setFormData]=useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    message:""
  });
const [showAlert,setShowAlert]=useState(false);
const [alertVariant,setAlertVariant]=useState("success");


const handleChange=(e)=>{
  const {name,value}=e.target;
  return setFormData({...formData,[name]:value});
};





const validate=()=>{
  if(formData.fname===""){
    alert("please enter valid Name");
  }else if(formData.lname===""){
    alert("please enter valid Name");
  }else if(formData.email==="" ){
    alert("please enter valid email");
  } else if(formData.mobile===""){
    alert("please enter Mobile Number");
  } else if(formData.message==="" ){
    alert("please enter valid message");
  } else if(!formData.email==="@" ){
    alert("please enter valid email");
  } else if(formData.mobile.length<6 ){
alert("please enter valid Name");
} else {
  return;
}
};




const handleSubmit=async(e)=>{
  e.preventDefault();
  validate();
  setAlertVariant("info");
  setShowAlert(true);
  
 
  
const response=await fetch("http://localhost:5000/save",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify(formData),
})
.then(data=>{console.log(data);
})
.catch((error)=>{console.log(error.message);

});
setFormData({
  fname:"",
  lname:"",
  email:"",
  mobile:"",
  message:""
})
}
    
     return (
    <div>
    {showAlert && (
      <Alert variant={alertVariant} onClose={()=>setShowAlert(false)} dismissible>
        Form has been Submitted successfully
      </Alert>
    )}
     <Form  onSubmit={handleSubmit}>
      <Container>
       
        <h2 className='text-center text-primary my-2'>Contact US</h2>
          <Row>
            <Col>
              <Form.Group controlId='forFirstName'>
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="text" name="fname" value={formData.fname} onChange={handleChange}/>
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId='forLastName'>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="text" name="lname" value={formData.lname} onChange={handleChange}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col><Form.Group controlId='forEmail'>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange}/>
            </Form.Group></Col>
            <Col>
              <Form.Group controlId='forMobile'>
                <Form.Label>Mobile:</Form.Label>
                <Form.Control type="phone" name="mobile" value={formData.mobile} onChange={handleChange}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='forMessage'>
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className='mt-5 d-flex justify-content-center'>
            <Button type="submit" className='w-50' variant="primary">Submit</Button>
           </Col>
          </Row>
        
      </Container>
      </Form>
    </div>
  )}; 