import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class GroupEdit extends Component {
    
    emptyItem = {
        name: '',
        address: '',
        city: '',
        state: '',
        country: '',
        postalCode: ''
    };

    constructor(props) {
        super(props);
        this.state = {
          item: this.emptyItem
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
      }
}