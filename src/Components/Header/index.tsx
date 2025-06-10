import { Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../Context";
import { auth } from '../services/db'
import style from './style.module.scss'
import {  signOut } from "firebase/auth";



export const Header = () => {


  let { enabled } = useContext(authContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)

  return  navigate('/login')

   
     
  }

  return (

    <>
      <Navbar bg="primary" data-bs-theme="dark" className={style.container}>
        <Container>

          <Navbar.Brand href="/" className={style.container_links}>
            <div>
              <span className={style.web}>
                Web
              </span>
              <span className={style.developer}>
                Developer
              </span>
            </div>
            <div>
              <Nav >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projetos">Projetos</Nav.Link>
               
                {enabled ? (
                    <Nav.Link onClick={handleLogout}>Sair</Nav.Link>
                ):(
                  <Nav.Link href="/login">Login</Nav.Link>
                )}
               
              </Nav>
            </div>
          </Navbar.Brand>

        </Container>
      </Navbar >
    </>
  )
}
