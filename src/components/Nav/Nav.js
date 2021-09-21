import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const navLinkNames = ['work', 'art', 'photos', 'contact'];

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };

        this.handleClickNavLink = this.handleClickNavLink.bind(this);
        this.handleClickLogo = this.handleClickLogo.bind(this);
        this.renderLinks = this.renderLinks.bind(this);
    }

    // handle event
    handleClickNavLink(event) {
        this.setState({selected: event.target.id})
    }

    handleClickLogo(event) {
        event.preventDefault()
        this.setState({selected: null})
    }


    // render
    renderLinks() {
        return(
            navLinkNames.map(page =>
                <Link
                    to={'/' + page}
                    className={this.state.selected === page ? 'selected' : ''}
                    onClick={this.handleClickNavLink}
                    id={page}
                    key={page}
                >
                    {page}
                </Link>
            )
        )
    }

    render() {
        return (
            <nav>
                <p>j&bull;e</p>
                <Link
                    to={''}
                    onClick={this.handleClickLogo}
                    id={'resource-logo'}
                >
                    {'logo'}
                </Link>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default Nav;