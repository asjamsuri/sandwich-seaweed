import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Container, Card, Col, Row, Form } from 'react-bootstrap';
import Main from './Main';

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path="/" component = {App}>
              <Container>
                <Card >
                <Card.Header className="text-center">SIGN IN</Card.Header>
                  <Card.Body>
                    <Form>
                        <Form.Group controlId="formName">
                          <Row> 
                            <Col sm={4}><Form.Label>Nama</Form.Label></Col>
                            <Col sm={8}><Form.Control type="text" placeholder="Nama"/></Col>
                          </Row>
                        </Form.Group>
                        <div className="d-flex justify-content-center"><Button className="d-flex justify-content-center" href="/main" variant="primary" size="md" type="submit"> Login </Button></div>
                    </Form>
                  </Card.Body>
                </Card>
              </Container>
            </Route>
            <Main exact path="/main" component = {Main}></Main>
          </Switch>
      </Router>
    );
}


export default App;
