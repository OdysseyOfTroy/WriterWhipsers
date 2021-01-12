import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Writer Whispers</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/story-Ideas" className="nav-link">Story Ideas</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create story</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Create user</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/discussion-Room' className="nav-link">Discussion Room</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}