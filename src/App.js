import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Save from "./pages/Save";
import Modal from "./components/Modal";
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
    //   constructor(props) {
    //       super(props);
    //       this.toggle = this.toggle.bind(this);
    //       this.state = {
    //           isOpen: false,
    //           name: "",
    //           modal: false
    //       };
    //   }
    state = {
                  isOpen: false,
                  name: "",
                  modal: false
              };
      toggle() {
          this.setState({
              isOpen: !this.state.isOpen
          });
      }
      modalOpen =() => {
        this.setState({ modal: true });
      }
      modalClose =() => {
        this.setState({
          modalInputName: "",
          modal: false
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

                  <Jumbotron>
                      <Container>
                          <Row>
                              <Col>

                                  <h1>Lets Make A Memory!</h1>
                                  <p>
                                      <Button onClick={this.modalOpen}>


                                          <h1>Began new template</h1>

                                      </Button>
                                      <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}
                                      ><h2>Hello Modal</h2>
                                      <div className="form-group">
                                        <label>Enter Name:</label>
                                        <input
                                          type="text"
                                          value={this.state.modalInputName}
                                          name="modalInputName"
                                          onChange={e => this.handleChange(e)}
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <button onClick={e => this.handleSubmit(e)} type="button">
                                          Save
                                        </button>
                                      </div>
                                    </Modal>
                                  {/* <div className="App">
        <h1>Hello!! {this.state.name}</h1>
        <a href="javascript:;">
          Began new Template
        </a>
      </div> */}
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