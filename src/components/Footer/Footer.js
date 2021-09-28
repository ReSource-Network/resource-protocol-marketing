import React from 'react';
import './Footer.css';

// images
import logosImgSrc from './images/footer-logos.svg';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }


    render() {
        return (
            <footer
                id={'footer'}
            >
                <img
                    id={'footer-logos'}
                    src={logosImgSrc}
                    alt={'resource network logos'}
                />
                <p><span>&copy;</span> ReSource Network</p>
            </footer>
        )
    }
}

export default Footer;