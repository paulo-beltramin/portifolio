
import { Container, Nav, Navbar } from 'react-bootstrap'
import style from './style.module.scss'
import { Link } from 'react-router'



export const Header = () => {


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
             
           </Nav>
            </div>
          </Navbar.Brand>

        </Container>
      </Navbar >
    </>
  )
}
