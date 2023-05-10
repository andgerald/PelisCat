import React from 'react';
import { Nav } from 'react-bootstrap';

const AllMoviesNav = () => {
  return (
    <div>
      <Nav variant="pills" defaultActiveKey="/home" className="ps-5">
        <Nav.Item>
          <Nav.Link href="/home">TENDENCIAS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">ESTRENOS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">RECOMENDACIONES</Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
      </Nav>
    </div>
  );
};

export default AllMoviesNav;
