import { Button, Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGithub } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

export default function BannerSection() {
  return (
    <Container className="min-vh-100 d-flex align-items-center" id="">
     <Row className="gap-2">
      <Col className="d-flex justify-content-center align-items-center">
        <img src={profileImage} width={400} height={400} className="object-fit-cover rounded"/>
      </Col>  
      <Col className="d-flex flex-column justify-content-center">
        <h2 className="fw-bold">Hello there👋 I&apos;m</h2>
        <h1 className="fw-bold display-2">Chester Clark Frias</h1>
        <p className="display-6">A 21 year&apos;s old BSIT Student from PHINMA -University of Pangasinan</p>
      
        <div className="d-flex gap-2 align-items-center">
          <Button variant="dark" size="lg" href="#projects">View Projects</Button>
          <Button variant="outline-dark" size="lg" href="#contactme">Contact me</Button>
          <div className="d-flex gap-3 ml-5 mb-2">
            <a href="https://www.facebook.com/chesterclarkfrias.11/photos">
              <FaFacebook size={25}/>
            </a>
            <a href="https://github.com/Teng1104" className="text-dark">
              <FaGithub size={25}/>
            </a>
          </div>
        </div>
      </Col>  
     </Row>
    </Container>
  )
}
