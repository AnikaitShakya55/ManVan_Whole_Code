import React from 'react'
import './AboutUs.css';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <>
    <div className='AboutUsContainer' >
    <h1 className='mainhead'>Empowering Fashion with Sustainable Solutions</h1>
      <Container>

        <Row className="my-5">
          <Col md={6}>
            <div>
              <h2 className='head1'>Recycled with care</h2>
              <p className='para'>
                A big part of our vision for MANVAN is to produce our clothing as close as possible to 100% made from sustainable materials. This led us to unearthing fabric innovations that use recycled bottles, recycled garments and recycled fishing nets to make high quality fibers, and we’re just getting started. In fact, we already made improvements since our first round of production and we are bringing some new materials forward that will have you say, “Wait. What? How do you put that in a shirt?”"In addition to our commitment to sustainable materials, we prioritize ethical manufacturing practices at every stage of production. From sourcing raw materials to crafting the final product, we ensure that every step aligns with our values of integrity and responsibility. Our dedication to ethical manufacturing extends to our partnerships with suppliers and manufacturers, fostering long-term relationships built on trust and mutual respect. By choosing MANVAN, you're not only investing in high-quality, eco-conscious clothing but also supporting a movement towards a more sustainable and ethical fashion industry."
              </p>
            </div>
          </Col>
          {/* First Section: Image */}
          <Col md={6}>
            <img src="https://blog.ijugaad.com/wp-content/uploads/2018/10/price-tag-shapes-business.jpg" alt="About Us" className="img-fluid" />
          </Col>
        </Row>

        {/* Second Section: Image */}
        <Row className="my-5">
          {/* Second Section: Image */}
          <Col md={6}>
            <img src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Story" className="img-fluid" />
          </Col>
          {/* Second Section: Content */}
          <Col md={6}>
            <div>
              <h2 className='head2'>Giving Garments a Second Life</h2>
              <p className='para'>
                If and when the day comes where you are ready to retire a piece of MANVAN apparel, you can send it back to us and we’ll give it another life along with a 20% discount on your next purchase. So the environment wins and so do you!

                We might clean it and donate it, or we may recycle the fibers and make it into another amazing piece of clothing. Either way, do not feel the need to throw it away. The landfills will thank you.At MANVAN, we believe in creating a circular fashion economy where every garment has a purpose beyond its initial wear. Our garment take-back program not only reduces waste but also encourages a culture of conscious consumption. By participating in our program, you're contributing to a sustainable future while enjoying the benefits of a 20% discount on your next purchase. Together, we can make a positive impact on the environment and redefine the way we think about clothing
              </p>
            </div>
          </Col>
        </Row>

        {/* Third Section: Content */}
        <Row className="my-5">
          <Col md={6}>
            <div>
              <h2 className='head3'>WRAP Certification and Better Work Program Initiatives</h2>
              <p className='para'>
                Sustainability is not just about materials and carbon footprints. It also means caring for the people who make our vision possible. The mills and factories we work with must meet our high standards for ethical treatment and fair wages.

                Our production partners are first chosen for their ethical and safe business practices then for the quality of craftsmanship they are able to output at scale. For example, our shirts are made in Egypt in a factory known for exceptional quality, but they are also WRAP certified. We imagine most of you have never heard of WRAP, but it is an independent, objective, non-profit team of global social compliance experts dedicated to promoting safe, lawful, humane, and ethical manufacturing around the world through certification and education.At MANVAN, we are committed to transparency and accountability throughout our supply chain. We believe in fostering long-term relationships with our production partners based on mutual respect and shared values. That's why we prioritize working with suppliers who uphold the highest standards of ethical conduct.
              </p>
            </div>
          </Col>
          {/* Third Section: Image */}
          <Col md={6}>
            <img src="https://images.pexels.com/photos/4792058/pexels-photo-4792058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Values" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      </div>
    </>

  )
}

export default AboutUs;