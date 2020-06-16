import React, { useState } from 'react'
import {Container, Navbar, Row, Col, Button, Modal, Form, Card } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Main() {
    const [modalShow, setModalShow] = useState(false);
    return (
     <div>   
    <Navbar className="justify-content-between" bg="dark" variant="dark">
    <Navbar.Brand></Navbar.Brand>   
    <Navbar.Brand>Catatan Keuangan</Navbar.Brand>
    <Navbar.Brand href="#">Keluar</Navbar.Brand>
    </Navbar>

    <Container>
        <div className="dataHariIni bg-light">
            <Row > 
                <Col className="col-8">Hari ini, <span>CurrentDate</span></Col>
                <Col className="col-4 d-flex justify-content-end">Total Pengeluaran</Col>
            </Row>
            <Row>
                <Col className="col-8 border-bottom"></Col>
                <Col className="col-4 d-flex justify-content-end border-bottom">Total Pemasukan</Col>
            </Row>
            <Row>
                <Col className="col-8 border-bottom">Nama pemasukan</Col>
                <Col className="col-4 d-flex  justify-content-end border-bottom">Rp<span>Nominal pemasukan</span></Col>
            </Row>
            <Row>
                <Col className="col-8 border-bottom">Nama pengeluaran</Col>
                <Col className="col-4 d-flex  justify-content-end border-bottom">Rp<span>Nominal pengeluaran</span></Col>
            </Row>
            <div className="d-flex justify-content-center">
            <Button variant="outline-dark" onClick={() => setModalShow(true)}>
            Tambah
            </Button>
            <ModalTambah show={modalShow} onHide={() => setModalShow(false)} />
            </div>
        </div>
        
        <div className="dataRiwayat">
        <Card style={{ width: '70rem' }}>
            <Card.Body>
            <Row > 
                <Col className="col-4">CurrentDate</Col>
                <Col className="col-8">Pengeluaran Rp<span>pengeluaran</span> </Col>
            </Row>
            <Row > 
                <Col className="col-4"></Col>
                <Col className="col-8">Pemasukan Rp<span>pemasukan</span> </Col>
            </Row>
            </Card.Body>
        </Card>
        </div>
    </Container>
    </div>
    )
}

function ModalTambah(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <Modal {...props} aria-labelledby="Tambah">
        <Modal.Header closeButton>
          <Modal.Title id="Tambah">
            Tambah Transaksi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
          <Form>
            <Form.Group controlId="formTanggal">
                <Row> 
                <Col className="col-4"><Form.Label>Tanggal</Form.Label></Col>
                <Col className="col-8">
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
                </Col>
                </Row>
            </Form.Group>
            <Form.Group controlId="formTipe">
                <Row> 
                <Col className="col-4"><Form.Label>Tipe</Form.Label></Col>
                <Col className="col-8">
                <Form.Control as="select">
                    <option>Pemasukan</option>
                    <option>Pengeluaran</option>
                </Form.Control>
                </Col>
                </Row>
            </Form.Group>
            <Form.Group controlId="formJumlah">
                <Row> 
                <Col className="col-4"><Form.Label>Jumlah</Form.Label></Col>
                <Col className="col-8"><Form.Control type="number" placeholder="Jumlah"/></Col>
                </Row>
            </Form.Group>
            <Form.Group controlId="formJudul">
                <Row> 
                <Col className="col-4"><Form.Label>Judul</Form.Label></Col>
                <Col className="col-8"><Form.Control type="text" placeholder="Judul"/></Col>
                </Row>
            </Form.Group>
        </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Batal</Button>
          <Button variant="primary" onClick={props.onHide}>Simpan</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default Main