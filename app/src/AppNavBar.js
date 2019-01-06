import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default class AppNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
}