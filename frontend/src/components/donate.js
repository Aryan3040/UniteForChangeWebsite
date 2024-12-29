import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Pagination from 'react-bootstrap/Pagination';
import '../App.css'

import img1 from '../assets/images/donate.jpg'



function AppDonate() {
    return (
        <section id="donate" className="block donate-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Donate</h2>
                    <div className="subtitle">support our cause</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <a href="https://www.gofundme.com/f/build-a-better-tomorrow-support-united-for-hope?utm_campaign=p_lico+share-sheet&utm_location=DASHBOARD&utm_medium=copy_link&utm_source=customer" target="_blank" rel="noopener noreferrer">
                            <Image src={img1} className="hover-image" />
                        </a>
                    </Col>
                    <Col sm={6}>
                        <p>
                            Support our cause by donating to our GoFundMe! Just click the picture to head directly to our donation page, every contribution makes a difference, and we truly appreciate your support!
                        </p>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AppDonate;
