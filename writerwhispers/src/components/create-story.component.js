import React, { Component } from 'react';
import axios from 'axios';

export default class CreateStory extends Component {
    //story constructor ////////////////////////////////////////////////////////////////////////////
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeIdea = this.onChangeIdea.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: "",
            author_Username: "Guest",
            genre: "",
            genreList: [],
            idea: "",
            likes: 0,
        }
    }

    //set values of the document //////////////////////////////////////////////////////////////////
    componentDidMount() {
        this.setState({
            genreList: ["Action", "Adventure", "Comedy", "Crime", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-fi"],
            genre: "Adventure"
        })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }

    onChangeIdea(e) {
        this.setState({
            idea: e.target.value
        });
    }

    //submit values of the document //////////////////////////////////////////////////////////////////

    onSubmit(e) {
        e.preventDefault();

        const story = {
            title: this.state.title,
            author_Username: this.state.author_Username,
            genre: this.state.genre,
            idea: this.state.idea,
            likes: this.state.likes,
        }

        console.log(story);

        axios.post('http://localhost:9000/stories/add', story)
            .then(res => console.log(res.data));


        window.location = '/';
    }

    //render view ////////////////////////////////////////////////////////////////////////////////////
    render() {
        return (
            <div>
                <h3>create new story idea!</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.genre}
                            onChange={this.onChangeGenre}>
                            {
                                this.state.genreList.map(function(genreList) {
                                    return <option
                                    key={genreList}
                                    value={genreList}>{genreList}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Idea: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.idea}
                        onChange={this.onChangeIdea}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit idea" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}