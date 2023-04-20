import './App.css';
import {Row, Col, Card, Form, Navbar, Container, Nav, Button} from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(-1);
  return (
    <div className="App" >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">
            <img
              alt=""
              src={require("./TACC_logo.png")}
              width="110"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Visualization Lab Guest Book
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="https://www.tacc.utexas.edu">TACC Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div class="cards">
      <Card className="text-center">
      <Card.Header>Welcome to TACC Vislab's Guest Book!</Card.Header>
      <Card.Body>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <iframe 
              title="vislab3d" 
              className="pob3d" 
              src="https://my.matterport.com/show/?m=zmeyTA2bEjH" 
              height={window.innerHeight * 0.3}
              width={window.innerWidth * 0.3}  
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </Col>
          <Col>
            <h5>About the Vislab</h5>
            <p>
              We are the TACC Visualization Lab, supporting educational and academic endeavors for everyone from K-12 students to
              researchers of all disciplines. We are located at POB 2.404A and open 09:00-17:00 Monday-Friday. Reservations are not
              required to visit unless a specific event is being held; reservations recommended for large groups. If interested in 
              using the vislab as a venue for your event, please contact <a href="mailto:foss@tacc.utexas.edu">Greg Foss</a> at 
              foss@tacc.utexas.edu for more details. Now that you have finished your visit, please share with us some feedback ---- 
              they are invaluable to our ability to improve our services.
            </p>
          </Col>
        </Row>
      </Card.Body>
      </Card>
      <br />
      <Card className="text-center">
        <Card.Header>Leave us a Review!</Card.Header>
        <Card.Body>
        <Form>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <div>Drop a rating! {rating === -1 ? "" : rating + " / 10"}</div>
              <Form.Range
                min={0}
                max={10}
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              />
            </Col>
            <Col>
              <Form.Select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                aria-label="Selector Purpose"
                style={{ width: "100%" }}
              >
                <option value="">Select Visit Purpose</option>
                <option>Drop-in</option>
                <option>Event</option>
                <option>Prior TACC engagement</option>
                <option>Other</option>
              </Form.Select>
            </Col>
          </Row>
          <br />
            <Form.Label>Tell us more about the Specific Devices!</Form.Label>
            <br />
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Form.Control
                onChange={(event) => setTitle(event.target.value)}
                placeholder="How was Bronco?"
                as="textarea"
                rows={1}
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <Form.Control
                onChange={(event) => setTitle(event.target.value)}
                placeholder="How was Saddle?"
                as="textarea"
                rows={1}
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <Form.Control
                onChange={(event) => setTitle(event.target.value)}
                placeholder="How was Stallion?"
                as="textarea"
                rows={1}
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <Form.Control
                onChange={(event) => setTitle(event.target.value)}
                placeholder="How was Lasso?"
                as="textarea"
                rows={1}
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <Form.Label>Feel free to share more details :)</Form.Label>
          <br />
          <Form.Control
            onChange={(event) => setDescription(event.target.value)}
            placeholder="How are the staff?"
            as="textarea"
            rows={3}
          />
          <br />
          <Form.Control
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Anything else you'd like us to know?"
            as="textarea"
            rows={3}
          />
          <br />
          <Form.Label>If you would like, please feel free to leave your contact information!</Form.Label>
          <br />
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Your contact information is strictly confidential.
              </Form.Text>
            </Col>
            <Col>
              <Form.Control type="number" placeholder="Enter phone number" />
              <Form.Text className="text-muted">
                Your contact information is strictly confidential.
              </Form.Text>
            </Col>
          </Row>
          <Button type="button" onClick={""}>
            Submit
          </Button>
        </Form>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default App;
