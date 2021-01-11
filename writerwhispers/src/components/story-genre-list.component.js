import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Stories = props => (
    <tr>
        <td>{props.story.title}</td>
        <td>{props.story.author_Username}</td>
        <td>{props.story.genre}</td>
        <td>{props.story.idea}</td>
        <td>{props.story.likes}</td>
        <td>
            <Link to={"/story-Ideas/View/"+props.story._id}>View</Link>
        </td>
    </tr>
)
export default class StoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {stories: []};
    }

    componentDidMount() {
        axios.get('http://localhost:9000/stories/' + this.props.match.params.genre)
            .then(Response => {
                this.setState({ stories: Response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    StoryList() {
        return this.state.stories.map(currentstory => {
            return <Stories story={currentstory} key={currentstory._id}/>; 
        })
    }
    
    render() {
        return (
            <div>
                <h3>Story ideas!</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Idea</th>
                            <th>likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.StoryList()}
                    </tbody>
                </table>
            </div>
        )
    }
}