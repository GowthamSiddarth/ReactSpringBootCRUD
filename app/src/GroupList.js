import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { Link } from 'react-router-dom';

class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {groups: [], isLoading: true};        
    }
}