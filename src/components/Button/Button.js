import React from 'react';
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faArrowDown } from '@fortawesome/free-solid-svg-icons'

// icons
const icons =
    { externalLink : <FontAwesomeIcon icon={faExternalLinkAlt} />
    , arrowDown : <FontAwesomeIcon icon={faArrowDown} />
    }

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            < a
                className =
                    { 'button'
                    + ' '
                    + this.props.type
                    + ' '
                    + this.props.color
                }
                href =
                    { this.props.href
                    }
                target =
                    { this.props.target ? this.props.target : null
                    }
            >
                <div className={'icon-text-group'}>
                    <p>
                        { this.props.text
                        }
                    </p>
                    { icons[ this.props.iconName.toString() ] }
                    {/* accesses font awesome icon from file constant object "icons" */}
                </div>
            </a>
        )
    };

}

export default Button;