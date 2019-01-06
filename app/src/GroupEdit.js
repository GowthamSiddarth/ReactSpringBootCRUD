import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavBar from './AppNavBar';

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/api/group', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/groups');
    }

    render() {
        const { item } = this.state;
        const title = <h2>{item.id ? 'Edit Group' : 'Add Group'}</h2>;

        return <div>
            <AppNavBar />
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                            onChange={this.handleChange} autoComplete="name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" id="address" value={item.address || ''}
                            onChange={this.handleChange} autoComplete="address-level1" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" value={item.city || ''}
                            onChange={this.handleChange} autoComplete="address-level1" />
                    </FormGroup>
                    <div className="row">
                        <FormGroup className="col-md-4 mb-3">
                            <Label for="state">State</Label>
                            <Input type="text" name="state" id="statee" value={item.state || ''}
                                onChange={this.handleChange} autoComplete="address-level1" />
                        </FormGroup>
                        <FormGroup className="col-md-5 mb-3">
                            <Label for="country">Country</Label>
                            <Input type="text" name="country" id="country" value={item.country || ''}
                                onChange={this.handleChange} autoComplete="address-level1" />
                        </FormGroup>
                        <FormGroup className="col-md-3 mb-3">
                            <Label for="country">Postal Code</Label>
                            <Input type="text" name="postalCode" id="postalCode" value={item.postalCode || ''}
                                onChange={this.handleChange} autoComplete="address-level1" />
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/groups">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>;
    }
}

export default withRouter(GroupEdit);