import {  ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Save from "./pages/Save";
import AddTempModal from "./components/AddTempModal";
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
    import Home from "./pages/Home";
  import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import {Component} from 'react';
    class App extends Component {
      constructor(props) {
          super(props);
          this.toggleModal = this.toggleModal.bind(this);
          this.state = {
              isOpen: false
          };
      }
      toggleModal() {
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
                                  <NavLink href="/Save/">Saved scrapbooks</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink href="https://instagram.com" target="_blank">Instagram</NavLink>
                              </NavItem>
                          </Nav>
                      </Collapse>
                  </Navbar>
                  <AddTempModal toggle={this.toggleModal} isOpen={this.state.isOpen}  ></AddTempModal>

                  <Jumbotron>
                      <Container>
                          <Row>
                              <Col>
                                  <h1>Lets Make A Memory!</h1>
                                  <p>
                                      <Button
                                         onClick={this.toggleModal}
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
                <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Save" component={Save} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
                 
              </div>
          );
      }
  }
  export default App; 