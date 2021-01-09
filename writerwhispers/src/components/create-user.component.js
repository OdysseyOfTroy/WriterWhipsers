import React, { Component } from 'react';

export default class CreateUser extends Component {
    //story constructor ////////////////////////////////////////////////////////////////////////////
    
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            username: "",
            password: "",
        }
    }

    //set values of the document //////////////////////////////////////////////////////////////////////

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    //submit values of the document //////////////////////////////////////////////////////////////////

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        }

        console.log(user)

        window.location = '/';
    }
    render() {
        return (
            <div>
                <h3>create new user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>E-mail Address: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}