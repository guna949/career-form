import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormDetails from "./FormDetails";


import {
  setName,
  setEmail,
  setAddress,
  setPhone,
  setTenthPercentage,
  setTwelfthPercentage,
  setDiplomaPercentage,
  setUgCGPA,

  setCompany,
  setRelevantExperience,
  resetForm,
} from "./formSlice";

const FormComponent = () => {
  const [formData, setFormData] = useState({});
  const [completed12th, setCompleted12th] = useState(true);
  const [showFormDetails, setShowFormDetails] = useState(false);
  const dispatch = useDispatch();


  const validateForm = () => {
    let isValid = true;

    if (!formData.name || !formData.email || !formData.address || !formData.phone ||
      !formData.tenthPercentage ||   !formData.ugCGPA ||  !formData.relevantExperience) {
      isValid = false;
    }

    return isValid;
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill all the mandatory fields!');

    } else {
      toast.success('Form submitted successfully!');
      setShowFormDetails(true);
    }

    
    

    dispatch(setName(formData.name));
    dispatch(setEmail(formData.email));
    dispatch(setAddress(formData.address));
    dispatch(setPhone(formData.phone));
    dispatch(setTenthPercentage(formData.tenthPercentage));
    if (completed12th) {
      dispatch(setTwelfthPercentage(formData.twelfthPercentage));
    } else {
      dispatch(setDiplomaPercentage(formData.diplomaPercentage));
    }
    dispatch(setUgCGPA(formData.ugCGPA));
    dispatch(setCompany(formData.company));
    dispatch(setRelevantExperience(formData.relevantExperience));
    dispatch(setCompleted12th(completed12th));
  };


  const handleReset = () => {
    setFormData({});
    setCompleted12th(true);
    dispatch(resetForm());
  };

  const {
    name = "",
    email = "",
    address = "",
    phone = "",
    tenthPercentage = "",
    twelfthPercentage = "",
    diplomaPercentage = "",
    ugCGPA = "",
    company = "",
    relevantExperience = "",
  } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Container>
        <h1 className="text-center"> Aaludra Careers </h1>
        <Form onSubmit={handleSubmit} onReset={handleReset}>
          <Form.Group controlId="formName">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
               required
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
              required
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Accordian Start */}


          <div className="my-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Contact Details*</Accordion.Header>
                <Accordion.Body>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      name="address"
                      value={address}
                      required
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone number*</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      name="phone"
                      value={phone}
                      required
                      pattern="[0-9]{10}"
                      onChange={handleInputChange}
                      
                    />
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Education Details*</Accordion.Header>
              <Accordion.Body>
                <Form.Group controlId="formTenthPercentage">
                  <Form.Label>10th Percentage*</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    min="1"
                    max="100"
                    placeholder="Enter percentage"
                    name="tenthPercentage"
                    value={tenthPercentage}
                    required
                    onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group controlId="formCompleted12th">
                  <Form.Label>Completed 12th or Diploma?</Form.Label>
                  <Form.Check
                    inline
                    label="12th"
                    type="radio"
                    id="12th"
                    checked={completed12th}
                    onChange={() => setCompleted12th(true)}
                  />
                  <Form.Check
                    inline
                    label="Diploma"
                    type="radio"
                    id="diploma"
                    checked={!completed12th}
                    onChange={() => setCompleted12th(false)}
                  />
                </Form.Group>

                {completed12th ? (
                  <Form.Group controlId="formTwelfthPercentage">
                    <Form.Label>12th Percentage</Form.Label>
                    <Form.Control
                      type="number"
                      step="0.01"
                      min="1"
                      max="100"
                      placeholder="Enter percentage"
                      name="twelfthPercentage"
                      value={twelfthPercentage}
                      
                      onChange={handleInputChange}   
                    />
                  </Form.Group>
                ) : (
                  <Form.Group controlId="formDiplomaPercentage">
                    <Form.Label>Diploma Percentage</Form.Label>
                    <Form.Control
                      type="number"
                        step="0.01"
                        min="1"
                        max="100"
                      placeholder="Enter percentage"
                      name="diplomaPercentage"
                        value={diplomaPercentage}
                
                      onChange={handleInputChange}
                        
                        
                    />
                  </Form.Group>
                )}

                <Form.Group controlId="formUgCGPA">
                  <Form.Label>UG CGPA*</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.1"
                    min="1"
                    max="10"
                    placeholder="Enter CGPA"
                    name="ugCGPA"
                    value={ugCGPA}
                    required
                   onChange={handleInputChange}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="my-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Experience Details*</Accordion.Header>
                <Accordion.Body>

                  <Form.Group controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter company"
                      name="company"
                      value={company}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formRelevantExperience">
                    <Form.Label>Relevant Experience* (in years)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter experience"
                      name="relevantExperience"
                      value={relevantExperience}
                      required
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <Button variant="danger" type="reset">
            Reset
          </Button>
        </Form>

    
        {showFormDetails && <FormDetails/>}     
        <ToastContainer />
      </Container>
    </div>
  );
};

export default FormComponent;


