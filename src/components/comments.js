import React, { Component } from 'react'
import axios from 'axios'


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
            <div>
                <h1>comment</h1>
                {this.state.comment.map(el =>
                    <div className="my-4">
                        <div>{el.name}</div>
                        <div>{el.email}</div>
                        <div>{el.body}</div>
                    </div>
                )
                }
                

            </div>
        )
    }
}

export default Posts