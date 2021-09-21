import React from 'react';
import './Home.css';

import Nav from '../Nav/Nav';
// import {data} from '../Data';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkColorTheme: true,
        };

        this.handleToggleColorTheme = this.handleToggleColorTheme.bind(this);
    }

    // handle event
    handleToggleColorTheme(event) {
        event.preventDefault();
        this.setState({menu: !this.state.darkColorTheme})
    }


    // get
    getPath() {
        return {
            location: window.location.pathname.slice(1).split('/')[0],
            area: window.location.pathname.slice(1).split('/')[1],
            boulder: window.location.pathname.slice(1).split('/')[2]
        }
    }


    // render
    renderNav() {
        return (
            <Nav
                path={'Home'}
                toggleColorTheme={this.handleToggleColorTheme}
                darkColorTheme={this.state.darkColorTheme}
                showDropdownMenu={this.state.showDropdownMenu}
            />
        )
    }

    renderMain() {
        return(
            <main id={'main'}>
                <section id={'hero'}>
                    <h1>Credit lines without interest payments</h1>
                    <h2>turn untapped resources into <span>liquidity</span></h2>
                </section>
            </main>
        )
    }

    render() {
        return (
            this.renderMain()
        )
    }
}

export default Home;
