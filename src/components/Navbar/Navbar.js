import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
