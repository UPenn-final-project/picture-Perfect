import React from "react";
import Carousal from '../components/carousal';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    CardTitle,
    Card,
    CardBody,
    Carousel,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button } from 'reactstrap';
function Home() {
return ( <div> <Carousal/>
<Jumbotron>
    <Container>
        <Row>
             <Col>
                <h1>continue working</h1>
                    <p>
                    <div>
                         <Card>
                                <CardBody>
<CardTitle>My template</CardTitle>
{/* <br/>
<div className="card-action">
<button className="btn cyan darken-4 waves-effect waves-red" id="finishBtn">Update and Save Information</button> */}
                            </CardBody>
                        </Card>
                    </div>
                </p>
            </Col>
        </Row>
    </Container>
</Jumbotron></div>)

}
export default Home;