import { Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { authContext } from "../Context";
import { auth } from '../../../dist/services/db'
import style from './style.module.scss'
import { signOut } from "firebase/auth";
import { FiLogOut, FiUser } from "react-icons/fi";




export const Header = () => {


  let { enabled } = useContext(authContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)

    return navigate('/login')



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
              <Nav className={style.link}>
                <Link to="/">Home</Link>
                <Link to="/projetos">Projetos</Link>
                {enabled && (
                  <Link to="/admin">Formulario</Link>
                )}
                {!enabled ? (

                  <Link to="/login">
                    <FiUser size={24} />
                  </Link>

                ) : (
                  <FiLogOut size={24} onClick={handleLogout} />
                )}

              </Nav>
            </div>
          </Navbar.Brand>

        </Container>
      </Navbar >
    </>
  )
}
