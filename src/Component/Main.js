import React, { useState, useEffect } from 'react'
import { Container, Card, Table, Button, Navbar, Modal, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import Dexie from "dexie";

function Main() {
  const db = new Dexie("ReactDexie");
db.version(1).stores({
  posts: "tanggal,jumlah,judul"
})

db.open().catch((err) => {
  console.log(err.stack || err)
})
    const [modalShow, setModalShow] = useState(false)
    const [modalShow2, setModalShow2] = useState(false)
    const [tanggal, setTanggal] = useState("")
    const [pengeluaran, setPengeluaran] = useState("")
    const [pemasukan, setPemasukan] = useState("")
    const [jumlah, setJumlah] = useState("")
    const [judul, setJudul] = useState("")
    const [attandance, setAtandance] = useState([])
    const [posts, setPosts] = useState("")

    const getFile = (e) => {
      console.log(e)

      let reader = new FileReader();
      reader.readAsDataURL(e[0]);
      reader.onload= (e) => {
        setTanggal(reader.result);
      }
    }

    const deletePost = async(id) => {
      console.log(id);
      db.posts.delete(id);
      let allPosts = await db.posts.toArray();
      setPosts(allPosts);
    }

    const getPostInfo = (e) => {
      e.preventDefault();
      if( tanggal!== "" && jumlah !== "" && judul !== ""){
          let post = {
              tanggal: tanggal,
              jumlah: jumlah,
              judul: judul
          }
         
  
          db.posts.add(post).then(async() => {
              //retrieve all posts inside the database
              let allPosts = await db.posts.toArray();
              //set the posts
              setPosts(allPosts);
          });
          
      } 
  }

  useEffect(() => {
    const getPosts = async() => {
      let allPosts = await db.posts.toArray();
      setPosts(allPosts);
  }
  getPosts();

}, [])

    function handleSubmit(e) {
        e.preventDefault();

    const payload = {
        tanggal,
        pengeluaran,
        pemasukan,
        jumlah,
        judul
    }

    setAtandance([...attandance, payload]);

    setTanggal("");
    setJumlah("");
    setJudul("");
    setPemasukan("");
    setPengeluaran("")
    }

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Tambah Transaksi
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
     Tanggal
    </Form.Label>
    <Col sm="10">
      <InputGroup>
      <FormControl 
      type="Date"
      name="tanggal"
      value={tanggal}
      onChange={e => setTanggal(e.target.value)} 
      />
      </InputGroup>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Tipe
    </Form.Label>
    <Col sm="10">
      <Form.Control as="select" custom>
            <option name="pengeluaran" value={pengeluaran} onChange={e => setPengeluaran(e.target.value)}>Pengeluaran</option>
            <option name="pemasukan" value={pemasukan} onChange={e => setPemasukan(e.target.value)}> Pemasukan</option>
      </Form.Control>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
     Jumlah
    </Form.Label>
    <Col sm="10">
      <InputGroup>
      <FormControl 
      type="number"
      name="jumlah"
      value={jumlah}
      onChange={e => setJumlah(e.target.value)}
      />
      </InputGroup>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
     Judul
    </Form.Label>
    <Col sm="10">
      <InputGroup>
      <FormControl 
      type="text" 
      name="judul"
      value={judul}
      onChange={e => setJudul(e.target.value)}
      />
      </InputGroup>
    </Col>
  </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" onSubmit={getPostInfo} onClick={handleSubmit}>Simpan</Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      function MyVerticallyCenteredModal2(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Ubah Transaksi
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
     Tanggal
    </Form.Label>
    <Col sm="10">
      <InputGroup>
      <FormControl type="Date" />
      </InputGroup>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Tipe
    </Form.Label>
    <Col sm="10">
      <Form.Control as="select" custom>
            <option>Pengeluaran</option>
            <option>Pemasukan</option>
      </Form.Control>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
     Jumlah
    </Form.Label>
    <Col sm="10">
      <InputGroup>
      <FormControl type="number" />
      </InputGroup>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
     Judul
    </Form.Label>
    <Col sm="10">
      <InputGroup>
      <FormControl type="text" />
      </InputGroup>
    </Col>
  </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button>Simpan</Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <Container>
        <Card>
            <Navbar>
                <Navbar.Brand className="text-center">Catatan Keuangan</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text><a href="/">Keluar</a></Navbar.Text>
                </Navbar.Collapse>
                </Navbar>
            <Card.Body>
                <Table hover>
                    <tbody>
                        {attandance.map((report) => (                     
                        <tr>
                            <td rowSpan="2">{report.tanggal}</td>
                        <td>{report.jumlah}</td> 
                        </tr>
                        ))}
                        {attandance.map((report) => ( 
                        <tr>
                        <td>{report.jumlah}</td>
                        </tr>
                        ))}
                        {attandance.map((report) => ( 
                        <tr>
                            <td>
                                <a
                                onClick={()=> setModalShow2(true)}>{report.judul}</a>
                        <MyVerticallyCenteredModal2 
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}/>      
                            </td>
                            <td>
                            <a
                                onClick={()=> setModalShow2(true)}>{report.jumlah}</a>
                        <MyVerticallyCenteredModal2 
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}/>  
                            </td>
                        </tr>
                        ))}
                        {attandance.map((report) => ( 
                        <tr>
                            <td>{report.judul}</td>
                        <td>{report.jumlah}</td>
                        </tr>
                         ))}
                    </tbody>
                </Table>
                <Button variant="primary" onClick={()=> setModalShow(true)}>Tambah</Button>
                <MyVerticallyCenteredModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </Card.Body>
            <Table>
                <tr>
                    <td rowSpan="2">Hari Tanggal</td>
                    <td>Pengeluaran</td>
                </tr>
                <tr>
                    <td>Pemasukan</td>
                </tr>
            </Table>
        </Card>
        </Container>
    )
}

export default Main
