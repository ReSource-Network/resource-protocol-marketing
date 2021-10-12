import React from 'react';
import './SocialLinks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import
    { faDiscord
    , faTwitter
    , faMedium
    , faLinkedin
    , faGithub
    , faFacebook
    , faTelegram
    } from '@fortawesome/free-brands-svg-icons'


// data
const telegram =
    { href: 'https://t.me/theresourcenetwork'
    , titleText: 'telegram'
    , descriptionText: 'Announcements and community'
    , icon: faTelegram
    }
const discord =
    { href: 'https://discord.gg/UuTCRuuZMP'
    , titleText: 'discord'
    , descriptionText: 'Chat with the community'
    , icon: faDiscord
    }
const twitter =
    { href: 'https://twitter.com/resourcenetco'
    , titleText: 'twitter'
    , descriptionText: 'News and product updates'
    , icon: faTwitter
    }
const facebook =
    { href: 'https://www.facebook.com/resourcenetwork1'
    , titleText: 'facebook'
    , descriptionText: 'Events and community news'
    , icon: faFacebook
    }
const medium =
    { href: 'https://re-source.medium.com/'
    , titleText: 'medium'
    , descriptionText: 'Read our blogs and articles'
    , icon: faMedium
    }
const linkedin =
    { href: 'https://www.linkedin.com/company/resourcenetwork/'
    , titleText: 'linkedin'
    , descriptionText: 'Jobs, blogs, and fundraising news'
    , icon: faLinkedin
    }
const github =
    { href: 'https://github.com/ReSource-Network/'
    , titleText: 'gitHub'
    , descriptionText: 'Check out our code'
    , icon: faGithub
    }

const socials =
    [ telegram
    , discord
    , twitter
    , facebook
    , medium
    , linkedin
    , github
    ]



class SocialLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.renderSocialLinks = this.renderSocialLinks.bind(this);
    }

    renderSocialLinks()
    { return ( socials.map (social =>
        <a
            key={social.titleText}
            className={'socialItemContainer'}
            href={social.href}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <FontAwesomeIcon icon={social.icon} />
            <div
                className={'socialItemTextContainer'}
                >
                <h6>{
                    social.titleText}
                </h6>
                <p>
                    {social.descriptionText}
                </p>
            </div>
        </a>
    ) ) }

    render() {
        return (
            <section
                id={'socialLinks'}
            >
                <h4> { 'Join the community' } </h4>
                <div
                    id={'socialLinksContainer'}
                >
                    {this.renderSocialLinks()}
                </div>
            </section>
        )
    }
}

export default SocialLinks;
