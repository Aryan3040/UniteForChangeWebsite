import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.png';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Unite for Change is a student-led nonprofit organization dedicated to empowering youth and fostering a sense of community through meaningful service initiatives. We believe in the power of collaboration to drive positive change and create a better future for everyone.</p>
            <p>Our mission is to inspire and mobilize young individuals to become active contributors to their communities. Through innovative events, educational programs, and hands-on volunteering opportunities, we aim to develop leadership skills and instill a lifelong commitment to service.</p>
		<p>From organizing charity events to providing platforms for collaborative projects, we work tirelessly to address local needs and create lasting impact. Whether it’s through sports-driven fundraisers, donation drives, or leadership workshops, we strive to bring people together and make a difference.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
