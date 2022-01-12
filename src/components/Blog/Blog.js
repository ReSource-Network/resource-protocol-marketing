import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
//
import './Blog.css'
import Nav from "../Nav/Nav";

const Blog = () => {
    const main = () => {
        return (
            <main id={'blog'}>
                <section id={'featured-post-preview'}>
                    <h2 className={'blog-title'}>
                        How to see your SOURCE on MetaMask
                    </h2>
                    <div>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                    </div>
                    <p className={'blog-summary'}>
                        Setting up Metamask to receive SOURCE is easy and takes only a few minutes.
                    </p>
                    <Link to={'how'} className={'read-more-link'}>
                        <div>
                            <p>Read post</p>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </Link>
                </section>
                <section id={'blog-previews'}>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                    <div className={'blog-preview'}>
                        <p className={'blog-date'}>
                            January 10, 2022
                        </p>
                        <p className={'blog-preview-title'}>
                            The Weekly SOURCE of Truth
                        </p>
                    </div>
                </section>
            </main>
        )
    }

    return (
        <div>
            <Nav />
            { main() }
        </div>
    )
}

export default Blog;