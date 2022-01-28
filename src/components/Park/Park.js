import React from 'react';
import './Park.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Button, Col, Card, CardColumns, Container } from 'react-bootstrap';

export default function Park({ park, img }) {
  return (
    <Row xs={1} xs={3} className='g-4'>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant='top' src={img} />
            <Card.Body>
              <Card.Title>{park}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
function App() {
  return (
    <div>
      <Park />
    </div>
  );
}

    // <Container fluid className='App py-2 overflow-hidden'>
    //   <Row className='card-example d-flex flex-row flex-nowrap overflow-auto'>
    //     <Card style={{ width: '18rem' }}>
    //       <Card.Img variant='top' src={img} />
    //       <Card.Body>
    //         <Card.Title>{park}</Card.Title>
    //         <Card.Text>State Hours</Card.Text>
    //         <Button variant='primary'>Read More</Button>
    //       </Card.Body>
    //     </Card>
    //   </Row>
    // </Container>
    // <div className='wrapper'>
    //   <div className="card-container">
    //   <div className="cards">
    //     <div className="card">
    //       <div className="image-container">
    //         <img src={img} alt="" className="img" />
    //       </div>
    //       <div className="info">
    //         {park}
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    // </div>
//   );
// }
