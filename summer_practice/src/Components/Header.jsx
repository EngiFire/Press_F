import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container, Navbar, NavbarBrand, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BreadcrumbExample() {
  return (
    <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active><Link to='/account'>Account</Link></Breadcrumb.Item>
            </Breadcrumb>
        <div>
            Hello!!!!!!!!!!
        </div>
    </Navbar>
  );
}

export default BreadcrumbExample;