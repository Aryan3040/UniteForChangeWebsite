import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpeg'),
    title: 'Building a Stronger Community Together',
    description: 'Join hands with us to create impactful change through volunteerism and service!',
    link: ''
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Empowering Youth, Shaping Tomorrow',
    description: 'Engage in programs that foster leadership, teamwork, and a brighter future.',
    link: ''
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Your Role in Change Starts Here',
    description: 'Support events and initiatives that make a real difference in our community.',
    link: ''
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                   
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;
