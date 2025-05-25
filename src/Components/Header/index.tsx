import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {


  return (

    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>

          <Navbar.Brand href="/" className="flex justify-between w-full items-center">
            <div>
              <span className="text-4xl font-extrabold max-md:text-lg max-md:font-bold">
                Web
              </span>
              <span className="text-indigo-100 text-3xl max-md:text-sm font-bold">
                Developer
              </span>
            </div>
            <div>
              <Nav className="me-auto text-lg font-bold">
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
