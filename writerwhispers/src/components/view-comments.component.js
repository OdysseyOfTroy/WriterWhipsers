import React, { Component } from 'react';
import axios from 'axios';

const Comments = props => (
    <tr>
        <td>{props.comment.author_Username}</td>
        <td>{props.comment.comment}</td>
    </tr>
)

export default class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {comments: []};
    }

    componentDidMount() {
        axios.get('http://localhost:9000/comments/' + this.props.match.params.story_id)
            .then(Response => {
                this.setState({ comments: Response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    CommentList() {
        return this.state.comments.map(currentcomment => {
            return <Comments comment={currentcomment} key={currentcomment._id}/>; 
        })
    }
    
    render() {
        return (
            <div>
                <h3>Comments</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Author</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.CommentList()}
                    </tbody>
                </table>
            </div>
        )
    }
}