import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5002/contact', { // Changed to a relative URL
      method: 'POST',
      mode: 'cors', // Added CORS mode
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully.');
        } else {
          alert('Failed to send email.');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                name="contactNumber"
                placeholder="Enter your contact number"
                required
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your contact message"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8397133589833!2d-84.33880492343275!3d34.099246415245396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5741765abe3db%3A0x3a15fef0e34db480!2sMilton%20High%20School!5e0!3m2!1sen!2sus!4v1732681466485!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              unite4change@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              Contact us via email for phone inquiries
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Alpharetta, Georgia, United States of America
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
