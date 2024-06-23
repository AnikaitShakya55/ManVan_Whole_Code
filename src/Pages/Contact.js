import React, { useState, useRef } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
} from 'mdb-react-ui-kit';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const detailObj = { name, email, phoneNumber };

    postData();
    async function postData() {
      const response = await fetch(
        'https://crudcrud.com/api/6bbbedbe3f854ac5a6d894329ae3155d/CONTACT',
        {
          method: 'POST',
          body: JSON.stringify(detailObj),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await response.json();
      alert(data);
    }

    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
    <MDBRow>
      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
          The best place <br />
          <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your Fashion!</span>
        </h1>
        <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
        At MEN VAN, we are passionate about providing high-quality clothing that reflects the latest trends in men's fashion. Whether you're looking for casual wear, formal attire, or accessories to complete your look, we've got you covered..
        Feel free to reach out to us with any questions, feedback, or inquiries. We'd love to hear from you!
        </p>
      </MDBCol>

      
      <MDBCol md='6' className='position-relative my-custom-form' >
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
        <MDBCard className='my-5 bg-glass colour'>
          <MDBCardBody className='p-5'>
            <MDBRow>
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4 my-custom-input' label='Name' id='form1' type='text' value={name}
                  onChange={(e) => setName(e.target.value)} required />
              </MDBCol>
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4 my-custom-input' label='Email' id='form2' type='email' value={email}
                  onChange={(e) => setEmail(e.target.value)} ref={emailInputRef} required />
              </MDBCol>
            </MDBRow>
            <MDBInput wrapperClass='mb-4 my-custom-input' label='Phone Number' id='form3' type='tel' value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)} ref={phoneInputRef} required />
            <MDBBtn className='w-100 mb-4 my-custom-button' size='md' type="submit" onClick={handleSubmit}>Submit</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  
  );
};

export default Contact;