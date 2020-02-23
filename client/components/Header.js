import React, {Component} from "react";
import { graphql } from "react-apollo";
import {Link} from "react-router";
import query from '../queries/currentUser';
import mutation from '../mutations/logout';

class Header extends Component {
    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        });
    }
    renderButtons() {
        const {
            loading,
            user
        } = this.props.data;
        if (loading) return <div />
        if (!user) return (
            <ul>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
        )
        return (
            <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        )
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default graphql(mutation)(
    graphql(query)(Header)
);