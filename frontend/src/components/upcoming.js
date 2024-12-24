import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-futbol',
    title: 'Soccer Charity Match',
    description: 'Join us for an exciting Soccer Charity Match, where teams of 5 players will compete for the ultimate prize – a brand-new PS5! Participants pay a small entry fee to take part in this thrilling event. All proceeds from the match will be donated to support children’s hospitals.',
    link: 'https://example.com/soccer-charity-match' // Add the link for the event
  },
  {
    id: 2,
    icon: 'fa-solid fa-bag-shopping',
    title: 'Basket Brigade',
    description: 'Join our Basket Brigade to make a difference in the lives of families in need! We collect donations at schools, which are used to assemble meal baskets at a local church. These baskets are then delivered to families, ensuring they have warm, nourishing meals.',
    link: 'https://example.com/basket-brigade' // Add the link for the event
  },
];

function AppUpcoming() {
  return (
    <section id="upcoming" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Upcoming Events</h2>
          <div className="subtitle">Future service events!</div>
        </div>
        <Row>
          {servicesData.map((services) => (
            <Col sm={6} className="holder" key={services.id}>
              <a href={services.link} target="_blank" rel="noopener noreferrer"> {/* Wrap in <a> */}
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AppUpcoming;

