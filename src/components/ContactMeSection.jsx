import { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function ContactMeSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        'service_lol22d9',
        'template_767fs4o',
        form.current,
        'vtXLr4r1SnXfOFrHj'
      );
      console.log(result.text);
      toast.success("Your Message was succesfully sent");
    } catch (error) {
      console.error(error);
      toast.error("Your Message wasn't sent");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contactme" className="py-5">
      <h2 className="display-5 fw-bold mb-3 text-center">Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit} ref={form}>
            <Form.Group controlId="formBasicName" className="mb-2">
              <Form.Label className="fw-bold">Name</Form.Label>
              <Form.Control
                type="text"
                name="from_name"
                placeholder="Enter your name"
                size="lg"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-2">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Enter your email"
                size="lg"
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage" className="mb-2">
              <Form.Label className="fw-bold">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Enter your message"
                size="lg"
              />
            </Form.Group>

            <Button
              variant="dark"
              size="lg"
              type="submit"
              className="w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" />
                  <span className="ms-2">Submitting...</span>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
