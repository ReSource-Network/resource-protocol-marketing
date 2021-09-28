import React from 'react';
import Background from '../Background/Background';
import './Home.css';
import Hero from '../Hero/Hero'
import ProtocolRoles from '../ProtocolRoles/ProtocolRoles'
import HowItWorks from "../HowItWorks/HowItWorks";
import StakeInRealEconomy from "../StakeInRealEconomy/StakeInRealEconomy";
import ReInventingMoney from "../ReInventingMoney/ReInventingMoney";
import SocialLinks from "../SocialLinks/SocialLinks";
import Partners from "../Partners/Partners";
import FutureIsMutual from "../FutureIsMutual/FutureIsMutual";

// import {data} from '../Data';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkColorTheme: true,
            width: 0,
            height: 0
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
                style={{ height: `${this.height + 'px'}`, color: 'black'}}
            >
                <Hero />
                <Background />
                <ProtocolRoles />
                <HowItWorks />
                <StakeInRealEconomy />
                <ReInventingMoney />
                <SocialLinks />
                <Partners />
                <FutureIsMutual />

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
