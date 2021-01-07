import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import StoryList from "./components/story-list.component";
import EditStory from "./components/edit-story.component";
import CreateStory from "./components/create-story.component";
import CreateUser from "./components/create-user.component";
//import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" component={StoryList} />
      <Route path="/edit/:id" component={EditStory} />
      <Route path="/create" component={CreateStory} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
