import React from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
    { name: 'Jun', uv: 2390, pv: 3800 },
    { name: 'Jul', uv: 3490, pv: 4300 },
  ];

  return (
    <div className="container-fluid">
      <Row>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>10,245</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text>$45,678</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Text>1,234</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Conversion Rate</Card.Title>
              <Card.Text>2.3%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Sales Overview</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Performance Metrics</Card.Title>
              <div className="mb-2">CPU Usage</div>
              <ProgressBar now={60} label={`${60}%`} className="mb-3" />
              <div className="mb-2">Memory Usage</div>
              <ProgressBar now={40} label={`${40}%`} className="mb-3" />
              <div className="mb-2">Disk Usage</div>
              <ProgressBar now={80} label={`${80}%`} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
