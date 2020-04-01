import React, { Component } from 'react'
import { CardDeck, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './user.css'

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
                <h1 className="my-5">Hey users !</h1>
                {
                    this.state.users.map(user => (
                        <CardDeck className="my-4">
                            <Card>
                                {/* <Card.Img variant="top" src="#" /> */}
                                
                                <Card.Body>
                                <div className="img-user mb-5">
                                    <img src="https://res.cloudinary.com/techsnips/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png" width="130" />
                                </div>
                                    <Card.Title>{user.name} {user.username}</Card.Title>
                                    <Card.Title>{user.email}</Card.Title>
                                    <Card.Text>
                                        {user.website}
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