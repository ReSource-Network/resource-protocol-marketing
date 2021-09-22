import React from 'react';
import './Background.css'

// radial gradients
import pink0 from './images/pink-0.svg'
import purple0 from './images/purple-0.svg'
import purple1 from './images/purple-1.svg'
import purple3 from './images/purple-3.svg'
import purple4 from './images/purple-4.svg'
import yellow0 from './images/yellow-0.svg'
import yellow1 from './images/yellow-1.svg'
import yellow2 from './images/yellow-2.svg'

// [zPositions , scale]
const zPositions =
    [ ['0', 1]
    , ['-1', 2]
    , ['-2', 3]
    ]

const gradients = [
    { id: 'purple0'
    , src: purple0
    , zPosition: zPositions[0]
    } ,
    { id: 'purple1'
    , src: purple1
    , zPosition: zPositions[1]
    } ,
    { id: 'purple3'
    , src: purple3
    , zPosition: zPositions[1]
    } ,
    { id: 'purple4'
    , src: purple4
    , zPosition: zPositions[1]
    } ,
    { id: 'pink0'
    , src: pink0
    , zPosition: zPositions[2]
    } ,
    { id: 'yellow0'
    , src: yellow0
    , zPosition: zPositions[0]
    } ,
    { id: 'yellow1'
    , src: yellow1
    , zPosition: zPositions[0]
    },
    { id: 'yellow1'
    , src: yellow1
    , zPosition: zPositions[2]
    } ,
    { id: 'yellow2'
    , src: yellow2
    , zPosition: zPositions[1]
    }]

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.renderRadialGradients = this.renderRadialGradients.bind(this);
    }

    // render
    renderRadialGradients ()
    { return gradients.map ( (gradient)  =>
        <img
            key =
                { gradient.id
                }
            id =
                { gradient.id
                }
            src =
                { gradient.src
                }
            style =
                {{ transform: `translateZ(${gradient.zPosition[0]}px) scale(${gradient.zPosition[1]})`
                , webkitTransform: `translateZ(${gradient.zPosition[0]}px) scale(${gradient.zPosition[1]})`
                }}
            alt =
                { 'background-radial-gradient'
                }
        />
    ) }

    render ()
    { return (
        <div
            id=
                {'paralax-container'
                }
            >
            <div
                id=
                    {'gradients-container'
                    }
                >
                    { this.renderRadialGradients()
                    }
            </div>
        </div>
    ) };

}

export default Background;
