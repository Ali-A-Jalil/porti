import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState  } from 'react'
import logo from '../../assest/img/logo.svg'
import navIcon1 from '../../assest/img/nav-icon1.svg'
import navIcon2 from '../../assest/img/nav-icon2.svg'
import navIcon3 from '../../assest/img/nav-icon3.svg'
import './navbar.css'
// className="bg-body-tertiary"
    const NavBar = () => {

        const [activeLink , setActiveLink] = useState('home');
        const [scrolled , setScrolled] = useState(false);

        useEffect (() => { 
            const onScroll = () => {
                if (window.scrollY > 50) {
                    setScrolled(true);
                }else{
                    setScrolled(false);
                }
            }


            window.addEventListener('scroll' , onScroll);
            return () => window.removeEventListener('scroll' , onScroll);

        }, [])

        const onUpdateActiveLink = (value) => {
            setActiveLink(value);
        }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container className='nav-container'>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')} >Contact</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className="social-icon" >
                            <a href="#" alt='LinkedIn'><img src={navIcon1} alt=" LinkedIn"/></a>
                            <a href="#" alt='Facebook'><img src={navIcon2} alt="Facebook"/></a>
                            <a href="#" alt='Inastagram'><img src={navIcon3} alt="Instagram"/></a>
                        </div>

                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    }

export default NavBar