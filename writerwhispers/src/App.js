import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Component Imports ================================================================
import Navbar from "./components/navbar.component";
import StoryList from "./components/story-list.component";
import EditStory from "./components/edit-story.component";
import CreateStory from "./components/create-story.component";
import CreateUser from "./components/create-user.component";
import Thumbnails from "./components/Thumbnail.component";
import StoryGenreList from "./components/story-genre-list.component";
import IdeaView from "./components/idea-view.component";
import CommentList from "./components/view-comments.component";
import Discussion from "./components/discussion.component";

//App function =======================================================================
function App() {
  return (
    <Router>
     <Navbar />
      <br/>
      {/* landing page - developed*/}
      <Route path="/" exact component={Thumbnails}/> 
      {/* List of story ideas - developed*/}
      <Route path="/story-Ideas" exact component={StoryList} />
      {/* edit story idea path - not developed */}
      <Route path="/edit/:id" exact component={EditStory} />
      {/* create story idea path - develop */}
      <Route path="/create" exact component={CreateStory} />
      {/* create user path - developed */}
      <Route path="/user" exact component={CreateUser} />
      {/* list of story ideas by genre - developed */}
      <Route path="/story-Ideas/:genre" exact component={StoryGenreList}/>
      {/* view a singular story idea - developed */}
      <Route path="/story-Ideas/View/:_id" exact component={IdeaView}/>
      {/* view comments of a story - developed */}
      <Route path="/comment-View/:story_id" exact component={CommentList}/>
      {/* open discussion room - in development */}
      <Route path="/discussion-Room" exact component={Discussion}/>
    </Router>
  );
}

export default App;
