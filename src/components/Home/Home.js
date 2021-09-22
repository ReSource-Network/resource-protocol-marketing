import React from 'react';
import Background from '../Background/Background';
import './Home.css';
import Hero from '../Hero/Hero'

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

    renderMain() {
        return(
            <main
                id={'main'}
                className={'parallax'}
            >

                <Hero />
                <Background />

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
