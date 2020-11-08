import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button } from 'reactstrap';
    import React from 'react';
  import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import {Component} from 'react';
import Carousal from './components/carousal'
    class App extends Component {
      constructor(props) {
          super(props);
          this.toggle = this.toggle.bind(this);
          this.state = {
              isOpen: false
          };
      }
      toggle() {
          this.setState({
              isOpen: !this.state.isOpen
          });
      }
      render() {
          return (
              <div>
                  <Navbar color="inverse" light expand="md">
                      <NavbarBrand href="/">Picture Perfect</NavbarBrand>
                      <NavbarToggler onClick={this.toggle} />
                      <Collapse isOpen={this.state.isOpen} navbar>
                          <Nav className="ml-auto" navbar>
                              <NavItem>
                                  <NavLink href="/Templates/">Saved scrapbooks</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink href="https://instagram.com" target="_blank">Instagram</NavLink>
                              </NavItem>
                          </Nav>
                      </Collapse>
                  </Navbar>
                  <Jumbotron>
                      <Container>
                          <Row>
                              <Col>
                                  <h1>Lets Make A Memory!</h1>
                                  <p>
                                      <Button
                                          tag="a"
                                          color="success"
                                          size="large"
                                          target="_blank"
                                      >
                                          Create
                                      </Button>
                                  </p>
                              </Col>
                          </Row>
                      </Container>
                  </Jumbotron>
                <Carousal/>
                  <Jumbotron>
                      <Container>
                          <Row>
                               <Col>
                                  <h1>continue working</h1>
                                      <p>
                                      <div>
                                           <Card>
                                                  <CardBody>
          <div classNameName="card hoverable"/>
              <div classNameName="card-content"/>
                  <span className="card-title"><strong>My template</strong></span>
              <br/>
              <div className="card-action">
                  <button className="btn cyan darken-4 waves-effect waves-red" id="finishBtn">Update and Save Information</button>
              </div>
                                              </CardBody>
                                          </Card>
                                      </div>
                                  </p>
                              </Col>
                          </Row>
                      </Container>
                  </Jumbotron>
              </div>
          );
      }
  }
  export default App;