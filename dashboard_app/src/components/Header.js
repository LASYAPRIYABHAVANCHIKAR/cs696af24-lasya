import React from 'react';
import { Navbar, Form, FormControl, Dropdown, Badge } from 'react-bootstrap';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="light" className="px-4">
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <div className="ml-auto">
        <FaBell className="mr-3" />
        <Badge variant="danger">3</Badge>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            <FaUserCircle size={25} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
