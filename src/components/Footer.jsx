  import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container>
      <hr/>
      <p className='text-center'>Made by <span className='fw-bold'>Chester Clark Frias</span> &copy; {new Date().getFullYear()}</p>
    </Container>
  );
}
