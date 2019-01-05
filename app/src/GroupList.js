import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { Link } from 'react-router-dom';

class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {groups: [], isLoading: true};        
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('/api/groups')
            .then(response => response.json())
            .then(data => this.setState({groups: data, isLoading: false}));        
    }
}