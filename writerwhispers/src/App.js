import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import StoryList from "./components/story-list.component";
import EditStory from "./components/edit-story.component";
import CreateStory from "./components/create-story.component";
import CreateUser from "./components/create-user.component";
import Thumbnails from "./components/Thumbnail.component";
import StoryGenreList from "./components/story-genre-list.component";
import IdeaView from "./components/idea-view.component";
import CommentList from "./components/view-comments.component";
//import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={Thumbnails}/>
      <Route path="/story-Ideas" exact component={StoryList} />
      <Route path="/edit/:id" exact component={EditStory} />
      <Route path="/create" exact component={CreateStory} />
      <Route path="/user" exact component={CreateUser} />
      <Route path="/story-Ideas/:genre" exact component={StoryGenreList}/>
      <Route path="/story-Ideas/View/:_id" exact component={IdeaView}/>
      <Route path="/comment-View/:story_id" exact component={CommentList}/>
    </Router>
  );
}

export default App;
