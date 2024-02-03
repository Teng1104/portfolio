import { Container, Row, Col, Card, Button } from "react-bootstrap";
import discoverPangasinanImage from "../assets/discover_pangasinan.jpg";
import quizImage from "../assets/quiz.png";
import activityImage from "../assets/activity.png";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "Discover Pangasinan",
      description: "The primary objective of the Discover Pangasinan project is to create an innovation and promote Pangasinan to both seasoned travelers, tourists, and curious newcomers. The project aims to:",
      image: discoverPangasinanImage
    },
    {
      id: 2,
      title: "Block 6 Activity 1",
      description: "Made by using Kotlin",
      image: activityImage
    },
    {
      id: 3,
      title: "Block 6 Quiz",
      description: "Made by using Kotlin",
      image: quizImage
    }
  ];

  return (
    <Container id="projects" className="py-5">
      <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
      <Row>
        {projects.map(project => (
          <Col md={4} key={project.id}>
            <Card style={{ height: "100%" }}>
              <Card.Img variant="top" src={project.image} className="card-img-top object-fit-cover" style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="dark" size="lg" className="w-100 align-self-end" href="https://github.com/Teng1104?tab=repositories">View</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
