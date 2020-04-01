import React, { Component } from 'react'
import axios from 'axios'
import { ListGroup,Jumbotron,Container } from 'react-bootstrap'
import './comments.css'


class Posts extends Component {
    state = {
        comment: []
    }

    componentDidMount() {
        this.getComment();
    }

    getComment = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.nb}`)
            .then(res => this.setState({ comment: res.data }))
    };




    render() {

        console.log('this.props.match.params.id', this.props.match.params.nb)
        return (
            <Jumbotron fluid>
                <Container>
                    <h1 className="my-5">comment</h1>
                    {this.state.comment.map(el => (
                        <div>
                            <ListGroup variant="flush" className="my-3">
                                <ListGroup.Item>{el.name}</ListGroup.Item>
                                <ListGroup.Item>{el.email}</ListGroup.Item>
                                <ListGroup.Item>{el.body}</ListGroup.Item>
                            </ListGroup>
                        </div>
                    ))}


                    
                </Container>
            </Jumbotron>

        )
    }
}

export default Posts