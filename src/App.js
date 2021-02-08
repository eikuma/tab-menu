import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'

function App() {
  return (
    <>
      <style type="text/css">
        {`
        .navbar-brand{
          color: yellow!important;
        }
        .nav-link {
          color: white!important;
        }
        .nav-link.active{
          color:black!important;
        }
        `}
      </style>
      <nav className="nav-bar">
        <Navbar bg="dark" variant="light">
          <Navbar.Brand href="#home">Title</Navbar.Brand>
          <Nav fill variant="tabs" defaultActiveKey="/home" className="mr-auto" >
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Link4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-5">Link5</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </nav>
    </>
  );
}

export default App;
