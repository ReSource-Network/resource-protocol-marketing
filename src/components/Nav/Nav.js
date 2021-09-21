import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

//images
import logoSrc from './resource-finance-logo.svg';

// nav link names
let navLinkNames = ['discord', 'telegram', 'contact'];

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

    renderLogo() {
        return(
            <Link
                to={'/'}
                onClick={this.handleClickLogo}
            >
                { <img
                    src = {logoSrc}
                    alt = {'resource finance logo'}
                    id = {'logo'}
                /> }
            </Link>
        )
    }

    render() {
        return (
            <nav
                id={'nav'}
            >
                { this.renderLogo()
                }
                <div
                    id={'nav-link-list'}
                >
                    { this.renderLinks()
                    }
                </div>
            </nav>
        )
    }
}

export default Nav;