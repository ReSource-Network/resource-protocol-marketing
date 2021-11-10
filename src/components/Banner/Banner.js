import React from "react"
import "./Banner.css"
import {Link} from "react-router-dom";


class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section id={"banner-container"}>
                <div id={"banner"}>
                    <div id={"banner-text"}>
                        <h4> {"SOURCE"} </h4>
                        <p> {"- The Fuel of the ReSource Economy"} </p>
                    </div>
                    <Link to={'/TGE'}>
                        Learn More about the TGE
                    </Link>
                </div>
            </section>
        )
    }
}

export default Banner
