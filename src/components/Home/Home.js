import React from 'react';
import Background from '../Background/Background';
import './Home.css';

import Nav from '../Nav/Nav';
import Button from '../Button/Button';
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

                <Background />
                {/*HERO SECTION*/}
                <section id={'hero'}>

                    <header>
                        <h1>
                            { 'Credit lines without interest payments'
                            }
                        </h1>

                        <h2>
                            { 'turn untapped resources into '
                            }
                            <span>
                            { 'liquidity'
                            }
                        </span>
                        </h2>
                    </header>

                    <div
                        id =
                            { 'hero-buttons-container'
                            }
                        >
                        <Button
                            text = 'How it works'
                            type = 'cta'
                            color = 'default'
                            iconName = 'arrowDown'
                            />

                        <Button
                            text = 'Whitepaper'
                            type = 'cta'
                            color = 'primary'
                            iconName = 'externalLink'
                            />
                    </div>
                </section>

                {/*HOW IT WORKS SECTION*/}
                {/*<section id={'how-it-works'}>*/}
                {/*    <p>woow</p>*/}
                {/*</section>*/}

                {/*BACKGROUND*/}
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
