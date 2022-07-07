import { Container, Navbar, Nav} from "react-bootstrap";
import  {Link} from 'react-router-dom'
import './Header.css'



const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
    <Navbar.Collapse id="responsive-navbar-nav" >
      <Nav style={{marginLeft:"auto" }}  className='nav-items'>
        <Link className="item-decoration" to='/login' >Login</Link>
        <Link className="item-decoration" to ='/signup'>Sign Up</Link>
        <Link className="item-decoration" to='/add'>Add Product</Link>
        <Link className="item-decoration" to='/edit'>Edit</Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
