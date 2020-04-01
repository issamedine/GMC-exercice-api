import React, { Component } from 'react'
import { CardDeck, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => this.setState({ users: res.data }))
    };

    render() {
        return (
            <div className="container">
                {
                    this.state.users.map(user => (
                        <CardDeck className="my-4">
                            <Card>
                                {/* <Card.Img variant="top" src="#" /> */}
                                <Card.Body>
                                    <Card.Title>{user.name} {user.username}</Card.Title>
                                    <Card.Title>{user.email}</Card.Title>
                                    <Card.Text>
                                        Card description
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`/posts/${user.id}`}><Button variant="primary">Following</Button></Link>
                                </Card.Footer>
                            </Card>

                        </CardDeck>
                    ))
                }
            </div>
        )
    }
}

export default Users