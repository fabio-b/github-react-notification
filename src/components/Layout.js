import React, { Component } from 'react';
import { Grid, Navbar, Row, Col } from 'react-bootstrap';
import './Layout.css';

const logo = (
  <span>
    Github Notifications
  </span>
)

export default class Layout extends Component {
  render() {
    return (
        <div className="app-container">
            <header>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                                <a>{logo}</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
            </header>
            <div className="app-content">{this.props.children}</div>
            <footer className="footer navbar-inverse">
                <Grid>
                    <Row>
                        <Col xs={3}>
                            <p className="copyright">
                                {logo}
                            </p>
                        </Col>
                        <Col xs={6}>
                            <p className="copyright text-center">
                                &copy; {new Date().getFullYear()}
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        </div>
    );
  }
}
