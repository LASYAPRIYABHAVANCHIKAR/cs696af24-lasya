import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaUserAlt, FaChartLine, FaShoppingCart, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Nav className="col-md-3 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <Nav.Item>
          <Nav.Link href="#dashboard"><FaHome /> Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#users"><FaUserAlt /> Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#analytics"><FaChartLine /> Analytics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#orders"><FaShoppingCart /> Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#settings"><FaCog /> Settings</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Sidebar;
