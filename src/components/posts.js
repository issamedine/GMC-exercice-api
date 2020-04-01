import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Posts extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
            .then(res => this.setState({ post: res.data }))
    };




    render() {

        console.log('this.props.match.params.id', this.props.match.params.id)
        return (
            <div className="container">
                    <h1 className="my-5">Posts user</h1>
                <div className="row">
                    {this.state.post.map(el => (
                        <div className="col-xs-12 col-md-3">
                            <div className="my-4">
                                <Link to={`/comments/${el.userId}`}>
                                    <CardDeck>
                                        <Card>
                                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                            <Card.Body>
                                                <Card.Title style={{color: '#009688'}}>{el.title}</Card.Title>
                                                <hr/>
                                                <Card.Text>
                                                    {el.body}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </CardDeck>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}

export default Posts