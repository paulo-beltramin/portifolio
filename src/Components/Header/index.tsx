import { Container, Nav, Navbar } from "react-bootstrap";
import style from './style.module.scss'
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
              <Nav >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projetos">Projetos</Nav.Link>
              </Nav>
            </div>
          </Navbar.Brand>

        </Container>
      </Navbar >
    </>
  )
}
