import React from "react"
import "./SocialLinks.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faDiscord,
    faTwitter,
    faMedium,
    faLinkedin,
    faGithub,
    faFacebook,
    faTelegram,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"

// data
const telegram = {
    href: "https://t.me/theresourcenetwork",
    titleText: "telegram",
    descriptionText: "Announcements and community",
    icon: faTelegram,
}
const discord = {
    href: "https://discord.gg/q4fJjWqD6g",
    titleText: "discord",
    descriptionText: "Chat with the community",
    icon: faDiscord,
}
const twitter = {
    href: "https://twitter.com/ReSource_Fi",
    titleText: "twitter",
    descriptionText: "News and product updates",
    icon: faTwitter,
}
const facebook = {
    href: "https://www.facebook.com/resourcenetwork1",
    titleText: "facebook",
    descriptionText: "Events and community news",
    icon: faFacebook,
}
const medium = {
    href: "https://re-source.medium.com/",
    titleText: "medium",
    descriptionText: "Read our blogs and articles",
    icon: faMedium,
}
const linkedin = {
    href: "https://www.linkedin.com/company/resourcenetwork/",
    titleText: "linkedin",
    descriptionText: "Jobs, blogs, and fundraising news",
    icon: faLinkedin,
}
const github = {
    href: "https://github.com/ReSource-Network/",
    titleText: "gitHub",
    descriptionText: "Check out our code",
    icon: faGithub,
}
const youtube = {
    href: "https://www.youtube.com/channel/UCphf6BYgfUDccb4OEmj_oqg",
    titleText: "youtube",
    descriptionText: "Watch the video explainer",
    icon: faYoutube
}

const socials = [telegram, discord, twitter, facebook, medium, linkedin, github, youtube]

export const SocialLinks = () => {
    const renderSocialLinks = () => {
        return socials.map((social) => (
            <a
                key={social.titleText}
                className={"socialItemContainer"}
                href={social.href}
                target={"_blank"}
                rel={"noreferrer"}
            >
                <FontAwesomeIcon icon={social.icon} />
                <div className={"socialItemTextContainer"}>
                    <h6 ignore>{social.titleText}</h6>
                    <p>{social.descriptionText}</p>
                </div>
            </a>
        ))
    }

    return (
        <section id={"socialLinks"}>
            <h4>Join the community</h4>
            <div id={"socialLinksContainer"}>
                {renderSocialLinks()}
            </div>
        </section>
    )
}

export default SocialLinks
