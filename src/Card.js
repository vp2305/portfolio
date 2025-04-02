import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ComputerIcon from "@mui/icons-material/Laptop";
import GestureIcon from "@mui/icons-material/Gesture";
import FaceIcon from "@mui/icons-material/TagFaces";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ChatIcon from "@mui/icons-material/QuestionAnswer";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import LanguageIcon from "@mui/icons-material/Language";
import ListIcon from "@mui/icons-material/List";
import HttpIcon from "@mui/icons-material/Http";
import DriveEtaIcon from "@mui/icons-material/TimeToLeave";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import AppsIcon from "@mui/icons-material/Apps";
import CloudIcon from "@mui/icons-material/WbCloudy";
import AutoModeIcon from "@mui/icons-material/Loop";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import StorageIcon from "@mui/icons-material/Storage";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import BuildIcon from "@mui/icons-material/Build";

import "./Card.css";

function Card(props) {
  let images = {
    LocationOnIcon: <LocationOnIcon fontSize="large" id="imageIcon" />,
    PhoneIcon: <PhoneIcon fontSize="large" id="imageIcon" />,
    PersonIcon: <PersonIcon fontSize="large" id="imageIcon" />,
    EmailIcon: <EmailIcon fontSize="large" id="imageIcon" />,
    PhoneIphoneIcon: <PhoneIphoneIcon fontSize="large" id="imageIcon" />,
    ComputerIcon: <ComputerIcon fontSize="large" id="imageIcon" />,
    GestureIcon: <GestureIcon fontSize="large" id="imageIcon" />,
    FaceIcon: <FaceIcon fontSize="large" id="imageIcon" />,
    SportsEsportsIcon: <SportsEsportsIcon fontSize="large" id="imageIcon" />,
    ChatIcon: <ChatIcon fontSize="large" id="imageIcon" />,
    RecordVoiceOverIcon: (
      <RecordVoiceOverIcon fontSize="large" id="imageIcon" />
    ),
    LanguageIcon: <LanguageIcon fontSize="large" id="imageIcon" />,
    ListIcon: <ListIcon fontSize="large" id="imageIcon" />,
    HttpIcon: <HttpIcon fontSize="large" id="imageIcon" />,
    DriveEtaIcon: <DriveEtaIcon fontSize="large" id="imageIcon" />,
    GitHubIcon: <GitHubIcon fontSize="large" id="imageIcon" />,
    LaunchIcon: <LaunchIcon fontSize="large" id="imageIcon" />,
    LinkedInIcon: <LinkedInIcon fontSize="large" id="imageIcon" />,
    MailIcon: <MailIcon fontSize="large" id="imageIcon" />,
    AppsIcon: <AppsIcon fontSize="large" id="imageIcon" />,
    CloudIcon: <CloudIcon fontSize="large" id="imageIcon" />,
    AutoModeIcon: <AutoModeIcon fontSize="large" id="imageIcon" />,
    EmojiPeopleIcon: <EmojiPeopleIcon fontSize="large" id="imageIcon" />,
    DeveloperBoardIcon: <DeveloperBoardIcon fontSize="large" id="imageIcon" />,
    StorageIcon: <StorageIcon fontSize="large" id="imageIcon" />,
    DeveloperModeIcon: <DeveloperModeIcon fontSize="large" id="imageIcon" />,
    BuildIcon: <BuildIcon fontSize="large" id="imageIcon" />,
  };

  let projectsDisc = {
    "Face Detection and Recognition": (
      <p>
        Developed a program using <strong>OpenCV</strong> that recognizes number
        of individuals present in the picture or video, and create a separate
        image of those faces.
      </p>
    ),
    GoSocial: (
      <>
        <p>
          <strong>Tech Stack:</strong> Go, Docker, PostgreSQL, Redis, Swagger,
          Google Cloud Run
        </p>
        <p style={{ marginTop: "10px" }}>
          GoSocial is a social networking API designed for speed and
          scalability. By integrating <b>Redis</b> for in-memory caching, API
          response times were reduced by <b>30%</b>, optimizing both user
          experience and server resource utilization. Automated <b>Swagger</b>{" "}
          documentation streamlined developer onboarding, while{" "}
          <b>Golang Migrate</b> ensured seamless database schema updates.
        </p>
        <p style={{ marginTop: "10px" }}>
          With automated CI/CD via <b>Google Cloud Run</b>, deployments are
          triggered by Git push events, eliminating manual steps and
          accelerating release cycles. This project showcases expertise in
          backend engineering, API optimization, and cloud-native deployments.
        </p>
      </>
    ),
    RideX: (
      <>
        <p class="tech-stack">
          <strong>Tech Stack:</strong> Java, Realm, Android Studio, MongoDB
        </p>
        <p style={{ marginTop: "10px" }}>
          The RideX app provides a seamless and secure platform for users to
          post and manage ride offers. By integrating user authentication with{" "}
          <b>MongoDB</b>, I ensured secure logins and a personalized experience,
          allowing users to easily create and manage ride postings.
        </p>
        <p style={{ marginTop: "10px" }}>
          I also implemented a real-time messaging system, enabling direct
          communication between ride providers and seekers. This feature
          facilitates efficient ride confirmation, ensuring that users can
          discuss ride details and locations instantly, making the process
          smoother and more reliable.
        </p>
      </>
    ),
    "TCP-Chatroom": (
      <p>
        {/* TCP Chatroom like twitch in python resume description */}
        Developed a <strong>multi-client chatroom</strong> using{" "}
        <strong>Python</strong> and <strong>Socket Programming</strong> which
        allows multiple clients to connect to a server and chat with each other.{" "}
        <br /> <br /> Admin can also kick out or ban any user from the chatroom.
      </p>
    ),
    "Voice Assistant": (
      <p>
        {/* Voice Assistant app using Kotlin and Android studio resume description */}
        Developed a <strong>Voice Assistant</strong> app using{" "}
        <strong>Kotlin</strong> and <strong>Android Studio</strong>.
        <br />
        <br />
        App can perform basic tasks like opening apps, playing music, searching
        on the internet, setting alarms, display calendar events and many more.
        <br />
        <br />
        Incorporated <strong>Google Text-to-Speech</strong> and{" "}
        <strong>Speech Recognition</strong> libraries to make the app more
        interactive.
      </p>
    ),
    "Website Portfolio": (
      <p>
        Developed a <strong>Portfolio Website</strong> using{" "}
        <strong>React</strong> and <strong>Material UI</strong> that showcases
        my skills and projects.
      </p>
    ),
    OGSA: (
      <>
        <p class="tech-stack">
          <strong>Tech Stack:</strong> Firebase, React, JavaScript, Stripe,
          Google Cloud Platform
        </p>
        <p style={{ marginTop: "10px" }}>
          OGSA is an event management platform that prioritizes security,
          scalability, and seamless user experience. With role-based access
          control implemented, the platform supports over <b>500 users</b>,
          ensuring efficient feature utilization and enhancing overall security.
        </p>
        <p style={{ marginTop: "10px" }}>
          The project includes a robust ticketing system, allowing users to
          create and manage event tickets with options like early bird pricing,
          which led to a <b>5%</b> increase in ticket sales.{" "}
          <b>Stripe API and Firebase Cloud Functions</b> were used to integrate
          secure payment processing, enabling over <b>800</b> successful
          transactions and streamlining revenue management.
        </p>
      </>
    ),
    Puzzle: (
      <p>
        {/* 8-Puzzle solver using A* Search algorithm resume description */}
        Solves X number of randomly generated <strong>
          8 and 15 Puzzle
        </strong>{" "}
        using <strong>A* Search</strong> algorithm
        <br />
        <br />
        Compare results between <strong>3 heuristics</strong> (Hamming Distance,
        Manhattan Distance and Manhattan Distance + Linear Conflict) to
        determine which one is more <strong>efficient</strong>. <br /> <br />
        It is developed using <strong>Python</strong> and <strong>Tree</strong>{" "}
        data structure is used to store the states.
      </p>
    ),
    Vikky: (
      <>
        <p class="tech-stack">
          <strong>Tech Stack:</strong> Python, Flask, Ollama, Docker, Raspberry
          Pi
        </p>
        <p style={{ marginTop: "10px" }}>
          Vikky is a physical and voice-activated personal assistant bot
          designed specifically for developers, seamlessly integrating with
          workspace tools to automate everyday tasks. Built using{" "}
          <b>Raspberry Pi</b> hardware, it streamlines the development workflow
          by enabling hands-free task management.
        </p>
        <p style={{ marginTop: "10px" }}>
          I engineered Vikky to respond to voice commands within <b>600ms</b>,
          leveraging a circular buffer and optimized transcription methods for
          low-latency interactions. Additionally, I rewrote the text-to-speech
          subsystem to minimize dependencies, ensuring the system could run
          efficiently on constrained hardware with only{" "}
          <b>numpy, onnxruntime, and sounddevice</b>.
        </p>
      </>
    ),
  };

  return (
    <div className="card">
      {images[props.imageName]}
      <h3> {props.title}</h3>
      <span>
        {props.subtitle in projectsDisc ? (
          projectsDisc[props.subtitle]
        ) : props.textAlign === "center" ? (
          <p style={{ textAlign: "center" }}>{props.subtitle}</p>
        ) : (
          <p>{props.subtitle}</p>
        )}
      </span>
      {(props.link || props.link2) && (
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
      )}
    </div>
  );
}

export default Card;
