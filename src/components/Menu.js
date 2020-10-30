import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarText
} from 'reactstrap';
import './menu.css';

const Example = (props) => {
  const [isOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className='brand'>
          Learncool
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar />
          <NavbarText className='pr-5'>
            <h4>Task Scheduler</h4>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;