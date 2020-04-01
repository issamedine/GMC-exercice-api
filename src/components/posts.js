import React, { Component } from 'react'
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
            <div>
                <h1>hello</h1>
                {this.state.post.map(el =>
                    <Link to={`/comments/${el.userId}`}>
                        <div className="my-4">
                            <div>{el.title}</div>
                            <div>{el.body}</div>
                        </div>
                    </Link>
                )
                }


            </div>
        )
    }
}

export default Posts