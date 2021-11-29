import React from "react";
import TGENav from "../TGENav/TGENav";
import "./Careers.css";

// let protocolGrowthDirector = {
//     title: "Protocol Growth Director",
//     role: "",
//     responsibilities: {
//         "Digital Growth": [
//             "Work with our whitepaper author to publish and disseminate announcements and thought leadership across Medium, LinkedIn, Twitter, Discord, Telegram and other Social Media channels.",
//             "Manage our thriving Twitter and Telegram communities + guide our moderation team",
//             "Responding and engaging to incoming media outlets, podcast producers, YouTube channels, Twitter influencers and other relevant channels to gain exposure for ReSource.",
//             "Engaging our global network of influencers and stakeholders"
//         ],
//         "Biz Dev": [
//             "Engaging ecosystem partners in plans for interoperability and partnerships.",
//             "Building and nurturing partnerships with other key stakeholders in the industry.",
//             "Represent ReSource in blockchain conferences around the world",
//         ],
//         "Dev Community": [
//             "Planning hackathons and other opportunities for engaging with our codebase and tools.",
//             "Planning and launching a dev bounties program by Q3 2022."
//         ]
//     },
//     requirements: [
//         "You are passionate and literate about decentralized technology and blockchain.",
//         "You are able to manage multiple lines of communication.\n",
//         "You are skilled using Twitter, Telegram, Discord, LinkedIn and have experience with other social media tools.",
//         "You have experience building and managing a digital community.",
//         "You have the ability to liaise with influencers, content creators and subject matter experts.",
//         "You have great communication skills with a proven ability to turn complex information into easy to understand content:",
//         "You can understand Proof of Stake and explain it to anyone who knows the basics about blockchain.",
//         "You can describe the importance of access to fair credit, financial inclusion, and access to a stable and reliable unit of account to do commerce with",
//         "You can compose and publish blogs and docs distilling complex information in a timely fashion.",
//         "You have remarkable written and verbal communication skills in English.",
//         "You are well versed in the implementation and understanding of marketing analytics.",
//         "You are capable of working effectively and independently in a remote team environment.",
//         "You have initiative, are unafraid to ask questions that you don’t have an answer to, and like to start things rather than waiting to be directed.",
//         "You are able to manage complexity without being overwhelmed and while keeping a great working attitude",
//         "You are open minded and you enjoy working with an international and diverse background team."
//     ]
// }

let protocolGrowthDirector = {
    title: "Protocol Growth Director",
    role: "This position will develop and manage relationships with external parties, from attending conferences to engaging on social media channels, to build a community and diverse ecosystem of innovative companies that will be foundational for the growth of the Protocol and the Company. This position will work closely with Operations, Engineering and Marketing teams. The main goal of the role is maximizing engagement with our staking and delegating product, and a secondary goal is to manage relations with exchanges, influencers, and other protocols.",
    pdfLink: "https://docs.google.com/document/d/1qyY7jqDD04deZRi9vGt2x3ZDIb-J4s_KE8-dYiR4wCc/edit"
}

let careers = [protocolGrowthDirector]

class Careers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderCareers() {
        return (careers.map((career) =>
            <div
                className={'career'}
                key={career.title}
            >
                <h4>
                    {career.title}
                </h4>
                <p>
                    {career.role}
                </p>
                <a href={career.pdfLink} target={'_blank'}>
                    View details
                </a>
            </div>
        ))
    }

    render() {
        return (
            <div id={'careers-page'}>
                <TGENav />
                <section id={"careers"}>
                    <h1>Careers</h1>
                    {this.renderCareers()}
                </section>
            </div>
        )
    }
}

export default Careers