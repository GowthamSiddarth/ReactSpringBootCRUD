import React, { Component } from "react";
import AppNavBar from "./AppNavBar";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import './App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <Container fluid>
                    <Button color="link">
                        <Link to="/groups">Manage JUG Tours</Link>
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Home;