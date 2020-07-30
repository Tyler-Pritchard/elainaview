import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Sidebar</h1>
                                <h2>Sidebar</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="left" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="Deeplaw Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Sidebar</ModalHeader>
                    <ModalBody>
                        <div>modal body</div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Sidebar;