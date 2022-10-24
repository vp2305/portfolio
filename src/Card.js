import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ComputerIcon from '@material-ui/icons/Computer';
import GestureIcon from '@material-ui/icons/Gesture';
import FaceIcon from '@material-ui/icons/Face';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ChatIcon from '@material-ui/icons/Chat';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import LanguageIcon from '@material-ui/icons/Language';
import ListIcon from '@material-ui/icons/List';
import HttpIcon from '@material-ui/icons/Http';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import AppsIcon from '@material-ui/icons/Apps';

import './Card.css';

function Card(props) {

    let images = { "LocationOnIcon": <LocationOnIcon fontSize="large" id="imageIcon" />, "PhoneIcon": <PhoneIcon fontSize='large' id="imageIcon" />, "PersonIcon": <PersonIcon fontSize='large' id="imageIcon" />, "EmailIcon": <EmailIcon fontSize='large' id="imageIcon" />, "PhoneIphoneIcon": <PhoneIphoneIcon fontSize='large' id="imageIcon" />, "ComputerIcon": <ComputerIcon fontSize='large' id="imageIcon" />, "GestureIcon": <GestureIcon fontSize='large' id="imageIcon" />, "FaceIcon": <FaceIcon fontSize='large' id="imageIcon" />, "SportsEsportsIcon": <SportsEsportsIcon fontSize='large' id="imageIcon" />, "ChatIcon": <ChatIcon fontSize='large' id="imageIcon" />, "RecordVoiceOverIcon": <RecordVoiceOverIcon fontSize='large' id="imageIcon" />, "LanguageIcon": <LanguageIcon fontSize='large' id="imageIcon" />, "ListIcon": <ListIcon fontSize='large' id="imageIcon" />, "HttpIcon": <HttpIcon fontSize='large' id="imageIcon" />, "InstagramIcon": <InstagramIcon fontSize='large' id="imageIcon" />, "GitHubIcon": <GitHubIcon fontSize='large' id="imageIcon" />, "LaunchIcon": <LaunchIcon fontSize='large' id="imageIcon" />, "LinkedInIcon": <LinkedInIcon fontSize='large' id="imageIcon" />, "MailIcon": <MailIcon fontSize='large' id="imageIcon" />, "AppsIcon": <AppsIcon fontSize='large' id="imageIcon" /> }

    let projectsDisc = {
        "Face Detection and Recognition":
            <p>Developed a program using <strong>OpenCV</strong> that recognizes number of individuals present in the picture or video, and create a separate image of those faces.</p>,
        "TCP-Chatroom":
            <p>
                {/* TCP Chatroom like twitch in python resume description */}
                Developed a <strong>multi-client chatroom</strong> using <strong>Python</strong> and <strong>Socket Programming</strong> which allows multiple clients to connect to a server and chat with each other. <br /> <br /> Admin can also kick out or ban any user from the chatroom.
            </p>,
        "Voice Assistant":
            <p>
                {/* Voice Assistant app using Kotlin and Android studio resume description */}
                Developed a <strong>Voice Assistant</strong> app using <strong>Kotlin</strong> and <strong>Android Studio</strong>.
                <br /><br />
                This app can perform basic tasks like opening apps, playing music, searching on the internet, setting alarms, display calendar events  and many more.
                <br /><br />
                Incorporated <strong>Google Text-to-Speech</strong> and <strong>Speech Recognition</strong> libraries to make the app more interactive.
            </p>,
        "Instagram Clone":
            <p>
                {/* Instagram Clone app using React, Firebase and Material UI resume description */}
                Developed an <strong>Instagram Clone</strong> app using <strong>React</strong>, <strong>Firebase</strong> and <strong>Material UI</strong>.
                This app allows users to <strong>create accounts</strong>, <strong>login</strong> and <strong>logout</strong>.
                <br /><br />
                Users can <strong>upload images</strong>, <strong>add captions</strong> and <strong>comments</strong>.
                This app also has a <strong>real time database</strong> that stores all the posts.
            </p>,
        "Website Portfolio":
            <p>Developed a <strong>Portfolio Website</strong> using <strong>React</strong> and <strong>Material UI</strong> that showcases my skills and projects.</p>,
        "OGSA":
            <p>
                {/* E-commerce resume description */}
                OGSA is an <strong>E-commerce</strong> website that allows users to buy tickets for an event.
                <br /><br />
                Established different <strong>role-based permissions</strong>  to safeguard sensitive data and guarantee that users only have access to the data they require.
                <br /><br />
                It is developed using <strong>React</strong> and <strong>Material UI</strong> for the frontend and <strong>Node.js</strong> and <strong>Express</strong> for the backend. It uses <strong>Firebase</strong> as the database and <strong>Firebase Storage</strong> for image storage. It also uses <strong>Stripe</strong> for payment processing.
            </p>,
        "Puzzle":
            <p>
                {/* 8-Puzzle solver using A* Search algorithm resume description */}
                This program solves X number of randomly generated <strong>8 and 15 Puzzle</strong> using <strong>A* Search</strong> algorithm
                <br /><br />
                Compare results between <strong>3 heuristics</strong> (Hamming Distance, Manhattan Distance and Manhattan Distance + Linear Conflict) to determine which one is more <strong>efficient</strong>. <br /> <br />It is developed using <strong>Python</strong> and <strong>Tree</strong> data structure is used to store the states.
            </p>
    }

    return (
        <div className="card">
            {images[props.imageName]}
            < h3 > {props.title}</ h3>
            <span>
                {props.subtitle in projectsDisc ? projectsDisc[props.subtitle] :
                    <a>{props.subtitle}</a>
                }
            </span>
            {
                props.link && (
                    <span id="linkSection">
                        <h2>
                            {props.link && (
                                <a href={props.link} target="_blank">
                                    <GitHubIcon />
                                </a>
                            )}
                            {props.link2 && (
                                <a href={props.link2} target="_blank" id="link2">
                                    <LaunchIcon />
                                </a>
                            )}

                        </h2>
                    </span>
                )
            }
        </div >
    );
}

export default Card