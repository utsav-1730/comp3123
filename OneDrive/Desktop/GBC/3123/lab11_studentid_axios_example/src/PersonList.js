import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css'; // Create a CSS file for styling

class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [], // Default state
        };
    }

    // Fetch data using Axios
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then((res) => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
            });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">User List</h1>
                {this.state.persons.map((person, index) => (
                    <div key={index} className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={person.picture.large}
                                    alt={person.name.first}
                                    className="img-fluid rounded-start"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {`${person.name.title} ${person.name.first} ${person.name.last}`}
                                    </h5>
                                    <p className="card-text">
                                        <strong>User Name:</strong> {person.login.username}<br />
                                        <strong>Gender:</strong> {person.gender.toUpperCase()}<br />
                                        <strong>Time Zone Description:</strong> {person.location.timezone.description}<br />
                                        <strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state} - ${person.location.postcode}`}<br />
                                        <strong>Email:</strong> {person.email}<br />
                                        <strong>Birth Date and Age:</strong> {`${person.dob.date} (${person.dob.age})`}<br />
                                        <strong>Register Date:</strong> {person.registered.date}<br />
                                        <strong>Phone:</strong> {person.phone}<br />
                                        <strong>Cell:</strong> {person.cell}
                                    </p>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
