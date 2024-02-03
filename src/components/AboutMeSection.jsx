import { Col, Container, Row } from "react-bootstrap";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import aboutMeImage from "../assets/aboutme.jpg";

const techStack = [
  { icon: FaHtml5, name: "HTML", path: "https://www.w3schools.com/html/" },
  { icon: FaCss3, name: "CSS", path: "https://www.w3schools.com/css/default.asp" },
  { icon: FaJs, name: "JavaScript", path: "https://www.w3schools.com/js/default.asp" },
  { icon: FaReact, name: "ReactJS", path: "https://www.w3schools.com/react/default.asp" },
];

export default function AboutMeSection() {
  return (
    <Container id="aboutme">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="card p-4">
            <h2 className="display-5 fw-bold mb-3">About Me</h2>
            <p>
              I&apos;m Chester Clark Frias, 21 years old, a dynamic individual who embarked on a journey from the realm of civil engineering
              to the thriving landscape of information technology. Driven by an insatiable curiosity and a fervor for innovation,
              I found a true calling in the intricate world of IT. My transition reflects not just a change in course but a deliberate
              choice to align my passion with my academic pursuit.
            </p>
            <p>
              In the realm of technology, I&apos;m more than just a student; I&apos;m a problem solver, a creative thinker, and a relentless learner.
              My experiences in civil engineering have instilled in me a unique perspective, merging analytical skills with a fresh outlook on
              IT challenges. I&apos;m embraces coding languages like a canvas, crafting solutions that bridge the gap between the physical and digital worlds.
            </p>
            <p>
              Beyond the screen, you might find me exploring the latest tech trends, attending hackathons, or engaging in spirited discussions about the future of IT.
              My journey is not just a shift in majors; it&apos;s a testament to my adaptability, resilience, and commitment to following his true passion. I&apos;m not just on
              a path to a degree; I&apos;m carving my way through the digital frontier, leaving a mark that goes beyond the lines of code.
            </p>
            <h4>Tech Stack:</h4>
            <div className="d-flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <a key={index} href={tech.path} className="badge text-decoration-none bg-dark d-flex align-items-center justify-content-center">
                  <tech.icon size={30} />
                  <span className="ms-2">{tech.name}</span>
                </a>
              ))}
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <img src={aboutMeImage} width={500} className="rounded" alt="about me" />
        </Col>
      </Row>
    </Container>
  );
}
