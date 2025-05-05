import React from "react";
// import Header from './Header';
import "./Home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import Card from "./Card";

function Home() {
  // Update the list of skills and experiences
  const languages = [
    "Python",
    "JavaScript/TypeScript",
    "Java",
    "SQL/KQL",
    "Go",
    "Kotlin",
  ];
  const databases = ["Firebase", "MongoDB", "MySQL", "PostgreSQL", "Redis"];
  const certifications = ["Azure Fundamentals"];
  const frameworks = [
    "Laravel",
    "Next.js",
    "React",
    "React Native",
    "Spring Boot",
  ];
  const developerTools = [
    "Azure",
    "AWS",
    "Git",
    "Docker",
    "GitHub Actions",
    "Jenkins",
    "Terraform",
    "Postman",
  ];

  const renderList = (items) => {
    return items.map((item, index) => (
      <span key={index}>
        <button className="skill_list">{item}</button>
      </span>
    ));
  };

  return (
    <div className="Home">
      <div className="greeting__background">
        <div className="greeting__divider">
          <div className="greeting_section">
            <div className="greeting_wrapper">
              <h3>Hello, I'm Vaibhav Patel</h3>
              <h4 className="greeting__line01">
                A student{" "}
                <span className="greeting__line02">
                  {" "}
                  at Wilfrid Laurier University.
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutme__container" id="about">
        <img className="about__img" src="/Images/Vaibhav Patel.jpeg" alt="" />
        <div className="about__container">
          <h2>Hi there! Nice to meet you</h2>
          <p className="about_para">
            As a recent graduate from Wilfrid Laurier University with a
            Bachelor's degree in Computer Science, I am deeply passionate about
            software development, with a keen interest in backend technologies,
            blockchain, and database management. My academic journey has
            equipped me with proficiency in languages such as Python, Java, and
            JavaScript, alongside hands-on experience in cloud-based deployment.
            <br />
            <br />
            Driven by a constant desire for growth, I remain dedicated to
            continuous learning and keeping up-to-date with evolving
            technologies. Through my personal website, I aim to share my
            insights, experiences, and projects while connecting with
            like-minded professionals in the industry.
            <br />
            <br />I am excited about the possibilities that lie ahead and eager
            to embark on new challenges and opportunities in the dynamic field
            of software development.
          </p>

          <div class="skills_container">
            <h3>Languages:</h3>
            {renderList(languages)}
          </div>

          <div class="skills_container">
            <h3>Certification:</h3>
            {renderList(certifications)}
          </div>

          <a
            className="cv_link"
            href="https://drive.google.com/file/d/1xgsH6flK9A45_ySOHP70ufY4IjQIbT0q/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            // Track this event with Cronitor
            onClick={() => {
              console.log("Window: ", window);
              window.cronitor("track", "DownloadedCV");
            }}
          >
            <button>Download CV</button>
          </a>
        </div>
        {/* <div className = "maintenance">
                    <h1>Sorry for the inconvenience.</h1>
                    <p>The site is still developing, please come back later...</p>
                </div> */}
      </div>

      <div className="experience_container" id="skills">
        <h1>
          <span>
            <hr />
            Skills
            <hr />
          </span>
        </h1>
        <div className="cardContainer">
          <Card
            imageName="BuildIcon"
            title="Developer Tools"
            subtitle={renderList(developerTools)}
            textAlign="center"
          />
          <Card
            imageName="StorageIcon"
            title="Databases"
            subtitle={renderList(databases)}
            textAlign="center"
          />
          <Card
            imageName="DeveloperModeIcon"
            title="Frameworks"
            subtitle={renderList(frameworks)}
            textAlign="center"
          />
        </div>
      </div>

      <div className="whatI_canDo" id="talents">
        <h1>
          <span>
            <hr />
            What I Can Do?
            <hr />
          </span>
        </h1>
        <div className="cardContainer">
          <Card
            whatIcanDo
            imageName="CloudIcon"
            title="Cloud Engineering"
            subtitle="Proficient in cloud platforms such as Azure and GCP. Experienced in automating cloud resource management, provisioning, and optimization using tools like Terraform and Azure Automation."
            textAlign="center"
          />
          <Card
            whatIcanDo
            imageName="ComputerIcon"
            title="Software Development"
            subtitle="Proficient in developing robust software solutions using a variety of languages and frameworks, including Java, JavaScript, Python, and React. Experienced in full software development lifecycle from conception to deployment, with a focus on creating scalable and maintainable code."
            textAlign="center"
          />
          <Card
            whatIcanDo
            imageName="AutoModeIcon"
            title="Automation and Scripting"
            subtitle="Expertise in automating tasks and processes using Python. Proficient in developing automation scripts for QA, resource management, and optimization, leveraging libraries like Pandas and pyodbc."
            textAlign="center"
          />
        </div>
      </div>

      <div className="experience_container" id="experience">
        <h1>
          <span>
            <hr />
            Experiences
            <hr />
          </span>
        </h1>
        <div className="experience_wrapper">
          <div className="experience_list">
            <h3>
              Full Stack Developer
              <span className="position_time">Mar. 2024 - Present</span>
            </h3>
            <h3 className="experience_position">
              <span className="position">
                <em>Wiltekk Digital Solutions - Remote</em>
              </span>
            </h3>
            <p style={{ marginBottom: "10px" }}>Project 1: PowHerFit</p>
            <li>
              Developed robust web applications using <b>Laravel</b> framework,
              leveraging <b>MVC</b> architecture, eloquent <b>ORM</b>, and blade
              templating engine to deliver efficient and scalable solutions
            </li>
            <li>
              Implemented staging environment on <b>AWS</b>, reducing production
              deployment risks by enabling thorough API and CMS testing before
              code promotion
            </li>
            <li>
              Configured <b>Nginx</b> servers on <b>EC2</b> instances, resulting
              in optimized performance and enhanced communication between
              backend services and frontend interfaces, improving overall
              application responsiveness
            </li>
            <li>
              Established CI/CD pipelines using <b>Github Actions</b>,
              automating the build, test, and deployment processes, resulting in
              a <b>40%</b> reduction in deployment time and a decrease in
              production incidents
            </li>
            <p style={{ marginBottom: "10px" }}>Project 2: RealOnes</p>
            <li>
              Collaborated with cross-functional teams to swiftly address and
              rectify <b>35</b> reported issues using Android Studio,
              demonstrating strong problem-solving skills and attention to
              detail
            </li>
            <li>
              Identified performance bottlenecks in API responses generated from{" "}
              <b>AWS Lambda</b> functions, leading to <b>10%</b> optimization
              improvements
            </li>
            <li>
              Resolved critical issues causing disruptions in the business
              dashboard functionality, ensuring seamless operation for users and
              enhancing overall user experience
            </li>
          </div>
          <div className="experience_list">
            <h3>
              Cloud Engineer (Co-op)
              <span className="position_time">Sep. 2023 - Dec. 2023</span>
            </h3>
            <h3 className="experience_position">
              <span className="position">
                <em>Manulife - Toronto, ON</em>
              </span>
            </h3>
            <li>
              Achieved a significant reduction in subscription expenses by
              automating the deletion of expired and unused resources through
              the development of <b>Python</b>-based automation script,
              utilizing <b>Azure Automation, Azure Resource Graph</b>
            </li>
            <li>
              Automated provisioning of Azure resources through <b>Terraform</b>
              , reducing deployment time by <b>10%</b> and increasing
              scalability and reliability for clients
            </li>
            <li>
              Contributed to the improvement of code quality through active
              participation in code reviews, ensuring adherence to best
              practices and enhancing overall team efficiency
            </li>
          </div>
          <div className="experience_list">
            <h3>
              Software Developer (Part-time)
              <span className="position_time">Jan. 2023 - Aug. 2023</span>
            </h3>
            <h3 className="experience_position">
              <span className="position">
                <em>Gravioty Research - Remote</em>
              </span>
            </h3>
            <li>
              Developed a multi-currency cryptocurrency wallet from scratch,
              providing support for Ethereum and Bitcoin blockchains using{" "}
              <b>React, Web3.js, Ethers.js, and Bitcoinjs-lib</b>
            </li>
            <li>
              Designed and implemented a robust state management architecture
              for the wallet utilizing <b>Redux</b>, resulting in optimized data
              handling
            </li>
            <li>
              Integrated <b>WebSocket</b> for real-time updates on
              cryptocurrency prices, ensuring users have access to the most
              up-to-date information
            </li>
            <li>
              Increased cross-browser compatibility by devising dynamic and
              easily configurable webpack scripts, ensuring seamless user
              experience across different browsers
            </li>
          </div>
          <div className="experience_list">
            <h3>
              Software Developer (Intern)
              <span className="position_time">Mar. 2022 - Aug. 2022</span>
            </h3>
            <h3 className="experience_position">
              <span className="position">
                <em>JANA Corporation - Aurora, ON</em>
              </span>
            </h3>
            <li>
              Automated QA process using <b>Python, Pandas, and pyodbc</b>,
              resulting in a <b>20%</b> reduction in testing time and ensuring
              data accuracy across Excel, APIs, and databases for <b>21</b> risk
              models
            </li>
            <li>
              Enhanced data extraction from external <b>MS SQL Servers</b> with
              Export Wizard and custom <b>SQL queries</b>, pivotal to achieving
              efficient risk model implementation
            </li>
            <li>
              Accomplished a <b>10%</b> optimization of <b>2 COF risk models</b>{" "}
              by measuring their performance and taking the action of
              strategically enhancing <b>Azure Functions</b>, which involved
              eliminating redundant calculations
            </li>
          </div>
          <div className="experience_list">
            <h3>
              Product Analyst (Co-op)
              <span className="position_time">Sept. 2021 - Mar. 2022</span>
            </h3>
            <h3 className="experience_position">
              <span className="position">
                <em>JANA Corporation - Aurora, ON</em>
              </span>
            </h3>
            <li>
              Collaborated with <strong>SMEs</strong> to understand{" "}
              <strong>JTBD</strong> and pain points in the utility industry,
              leading to effective solution and product building
            </li>
            <li>
              Assisted with the implementation of <strong>ProductBoard</strong>{" "}
              for <strong>10x</strong> better transparency and organization-wide
              understanding of product releases and features
            </li>
            <li>
              Created user guide, user stories, use cases, wireframes, happy
              paths, and mock-ups, leading to a clear visualization and
              communication of the product's functionality
            </li>
          </div>
          <div className="experience_list">
            <h3>
              Founder
              <span className="position_time">Aug. 2021 - Present</span>
            </h3>
            <h3 className="experience_position">
              <span className="position">
                <em>OGSA (Ontario Gujarati Students Association)</em>
              </span>
            </h3>
            <li>
              Founded and managing an independent cultural group, organizing,
              and hosting <strong>5+ events</strong> annually with{" "}
              <strong>700+ attendees</strong>, sharpening my leadership and
              teamwork abilities
            </li>
            <li>
              Demonstrated technical expertise by developing and implementing an
              e-commerce website, resulting in increased customization and over
              <strong> $10,000</strong> in revenue per event
            </li>
          </div>
        </div>
      </div>

      <div className="projects_container" id="projects">
        <h1>
          <span>
            <hr />
            Projects
            <hr />
          </span>
        </h1>
        <div className="projectCardContainer">
          <Card
            imageName="EmojiPeopleIcon"
            title="GoSocial"
            subtitle="GoSocial"
            link="https://github.com/vp2305/GoSocial"
          />
          <Card
            imageName="LanguageIcon"
            title="OGSA"
            subtitle="OGSA"
            link2="https://ontario-gsa.web.app/"
          />
          <Card
            imageName="DeveloperBoardIcon"
            title="Vikky"
            subtitle="Vikky"
            link="https://github.com/vp2305/Vikky"
          />
          <Card
            imageName="DriveEtaIcon"
            title="RideX"
            subtitle="RideX"
            link="https://github.com/vp2305/RideX"
          />
          <Card
            imageName="AppsIcon"
            title="Puzzle Solver"
            subtitle="Puzzle"
            link="https://github.com/vp2305/CP468-A1"
          />

          {/* <Card
            imageName="FaceIcon"
            title="Voice Assistant"
            subtitle="Voice Assistant"
            link="https://github.com/vp2305/VoiceAssistent"
          /> */}

          {/* <Card
                        imageName="FaceIcon"
                        title="Face Detection and Recognition"
                        subtitle="Face Detection and Recognition"
                        link="https://github.com/vp2305/Face-Detection-and-Face-Recognition"
                    /> */}

          {/* <Card
            imageName="ChatIcon"
            title="TCP-Chatroom"
            subtitle="TCP-Chatroom"
            link="https://github.com/vp2305/TCP-Chatroom"
          /> */}
        </div>
      </div>

      <div div className="contact_container" id="contact">
        <h1>Get In Touch</h1>
        <h2>
          <a
            className="icons"
            href="https://www.linkedin.com/in/vaibhav-patel-3125b6198/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            className="icons"
            href="https://www.instagram.com/vaibhav.p23/"
            target="_blank"
          >
            <InstagramIcon fontSize="large" />
          </a>
          <a
            className="icons"
            href="mailto:vaibhav.p2305@gmail.com"
            target="_blank"
          >
            <MailIcon fontSize="large" />
          </a>
          <a className="icons" href="https://github.com/vp2305" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Home;
