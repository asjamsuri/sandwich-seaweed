import React from 'react'
import './Login.css';
import { Container, Card, Row, FormControl, InputGroup, Button } from 'react-bootstrap';
const Login = (props) => {
    return (
        <Container className="Body d-flex justify-content-center align-items-center">
                <Card className="card-style">
                    <Card.Header className="Card-Header">Login</Card.Header>
                    <Card.Body className="bg-secondary">
                        <InputGroup>
                            <FormControl placeholder="Name" className="text"/>
                        </InputGroup>
                        <Button href="/main" className="btn" variant="info">Login</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">Laporan Keuangan</Card.Footer>
                </Card>
        </Container>
    );
}

export default Login
