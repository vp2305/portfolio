
import React from 'react';
// import Header from './Header';
import "./Home.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import Card from './Card';

function Home() {

    //     var typed = new Typed(".typing", {
    //         strings: ["Developer", "Programmer","Learner", "Student"],
    //         typeSpeed: 100,
    //         backspeed: 60,
    //         loop: true
    //     });
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // $(window).scroll(function(){
    //         if(this.scrollY>20){
    //             $('.navbar').addClass("sticky");
    //         }else{
    //             $('.navbar').removeClass("sticky");
    //         }
    //         if(this.scrollY > 500){
    //             $('.scroll-up-btn').addClass("show");
    //         }else{
    //             $('.scroll-up-btn').removeClass("show");
    //         }
    //     });

    return (
        <div className="Home" id="home">
            <div className="greeting__background">
                <div className="greeting__divider">
                    <div className="greeting_section">
                        <div className="greeting_wrapper">
                            <h3>Hello, I'm Vaibhav Patel</h3>
                            <h4 className="greeting__line01">A student <span
                                class="greeting__line02" > at Wilfrid Laurier University.</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutme__container" id="about">
                <img
                    className="about__img"
                    src="/Images/me.jpg"
                    alt=""
                />
                <div className="about__container">

                    <h2>Hi there! Nice to meet you</h2>
                    <p className="about_para">
                        I'm a third-year Wilfrid Laurier University student and pursuing a degree in Computer Science. I'm a motivated individual who wants to work as a professional software developer. Some of my key interests lie in Artificial intelligence (AI), automation, and full stack development. I have always felt compelled to learn more about emerging technologies and I am always looking for new opportunities to learn and grow.
                    </p>

                    <div className="about_contact">
                        <div className="line_one">
                            <p className="a_contact_items">
                                <p className="first_word"><LocationOnIcon />
                                    <span className="about_header">Location</span>: Ajax, Ontario</p>
                                <p className="a_contact_items_l01">
                                    <PersonIcon />
                                    <span className="about_header">Age</span>: {new Date().getFullYear() - 2001}
                                </p>
                            </p>

                            <p className="a_contact_items">
                                <p className="first_word">
                                    <EmailIcon />
                                    <span className="about_header">Email</span> : vaibhav.p2305@gmail.com
                                </p>
                            </p>
                        </div>
                    </div>

                    <div className="skills_container">
                        <h3>Proficient In:</h3>
                        <span>
                            <button className="skill_list">Python</button>
                        </span>
                        <span>
                            <button className="skill_list">JavaScript</button>
                        </span>
                        <span>
                            <button className="skill_list">Java</button>
                        </span>
                        <span>
                            <button className="skill_list">HTML</button>
                        </span>
                        <span>
                            <button className="skill_list">CSS</button>
                        </span>
                        <span>
                            <button className="skill_list">C</button>
                        </span>
                        <span>
                            <button className="skill_list">SQL</button>
                        </span>
                        <span>
                            <button className="skill_list">Kotlin</button>
                        </span>
                        <span>
                            <button className="skill_list">Dart</button>
                        </span>
                        <span>
                            <button className="skill_list">Firebase</button>
                        </span>
                        <span>
                            <button className="skill_list">Node.js</button>
                        </span>
                        <span>
                            <button className="skill_list">Azure Functions</button>
                        </span>
                    </div>

                    <a className="cv_link" href="https://drive.google.com/file/d/1qWGu16YRID47kbABqbtjL7__LiI9R3Ez/view?usp=sharing" target="_blank">
                        <button>
                            Download CV
                        </button>
                    </a>
                </div>
                {/* <div className = "maintenance">
                    <h1>Sorry for the inconvenience.</h1>
                    <p>The site is still developing, please come back later...</p>
                </div> */}
            </div>

            <div className="whatI_canDo" id="talents">
                <h1><span><hr />What I Can Do?<hr /></span></h1>
                <div className="cardContainer">
                    <Card
                        whatIcanDo
                        imageName="PhoneIphoneIcon"
                        title="App Development"
                        // App Development resume description
                        subtitle="I have developed multiple applications for Android and iOS devices. I have experience in developing apps using android studio and flutter for cross-platform development."
                    />
                    <Card
                        whatIcanDo
                        imageName="ComputerIcon"
                        title="Full Stack Developer"
                        subtitle="Using JavaScript, CSS, HTML, and databases like Firebase, I can design a functional E-commerce website. Making the OGSA ticketing website is one of my projects that makes use of all of these."
                    />

                    <Card
                        whatIcanDo
                        imageName="GestureIcon"
                        title="Drawing"
                        subtitle="Ever since I was young, I loved drawing out my ideas as it helped me visualize while also increasing my creativity."
                    />
                </div>
            </div>


            <div className="experience_container" id="experience">
                <h1><span><hr />Experiences<hr /></span></h1>
                <div className="experience_wrapper">
                    <div className="experience_list">
                        <h3>JANA Corporation<span className="position_time">Mar. 2022 - Sept. 2022</span></h3>
                        <h3 className="experience_position"><span className="position">Jr. Software Developer</span></h3>
                        <li>
                            Worked under <strong>Agile</strong> workflow to develop risk integrity tool for multiple clients in the utility industry.
                        </li>
                        <li>
                            Gained hands-on experience with relational database such as <strong>SQL Server</strong> for data cleanup and data transfer between servers.
                        </li>
                        <li>
                            Developed <strong>automated tool</strong> using <strong>Python</strong> for the QA team to test risk models by comparing the results between <strong>RTG Excel files</strong>(expected outcome) to <strong>Postman API</strong> and <strong>SQL Server</strong> to <strong>Postman API</strong>.
                        </li>
                        <li>
                            Refactored and optimized Python code for two COF risk models by reducing the amount of data/calculation required by utilizing previously calculated in the data from the database using an <strong>SQL script</strong>
                        </li>
                        <li>
                            Utilized <strong>Python</strong>, <strong>Azure Functions</strong>, <strong>SQL Server</strong>, <strong>GitHub</strong>, <strong>JIRA</strong>, <strong>Confluence</strong>, and other tools in parallel fashion during software development.
                        </li>
                        <li>
                            Worked with Risk Technologies Group to optimize their code and create Excel files for multiple different risk models.
                        </li>

                    </div>
                    <div className="experience_list">
                        <h3>JANA Corporation<span className="position_time">Sept. 2021 - Mar. 2022</span></h3>
                        <h3 className="experience_position"><span className="position">Product Analyst</span></h3>
                        <li>
                            Active collaboration with the Subject Matter Experts to understand <strong>Jobs to Be Done (JTBD)</strong> in the utility industry and <strong>pain points</strong> in the current state to effectively solution and build the product.
                        </li>
                        <li>
                            Configured <strong>Product-board</strong> to provide more transparency across the organization to learn about scheduled releases and features associated with every release of the risk management product.
                        </li>
                        <li>
                            Created <strong>user guide</strong> for the very first version of transmission integrity management product.
                        </li>
                        <li>
                            Worked with development team to define and implement customer change requests to enhance product functionality.
                        </li>
                        <li>
                            <strong>Devised</strong> user stories, use cases, wireframes, happy path, and mock-ups for the functionality.
                        </li>
                        <li>
                            Attended weekly development team meetings and acted as a product liaison in daily <strong>stand-up</strong>.
                        </li>

                    </div>
                    <div className="experience_list">
                        <h3>Patel Accounting and Tax Consultant Inc.<span className="position_time">Mar. 2020 - Aug. 2020</span></h3>
                        <h3 className="experience_position"><span className="position">Web Developer</span></h3>
                        <li>
                            Effectively utilized <strong>Wordpress</strong> to add pages to the website for the company.
                        </li>
                        <li>
                            Monitored website performance and handled troubleshooting and WordPress issues.
                        </li>
                        <li>
                            Helped give insightful ideas on how to better layout the website to make it as <strong>user-friendly</strong> as possible.
                        </li>
                        <li>
                            Re-designed the website and modified pages using <strong>HTML</strong> and <strong>CSS</strong>.
                        </li>
                    </div>
                </div>
            </div>

            <div className="projects_container" id="projects">
                <h1><span><hr />Projects<hr /></span></h1>
                <div className="projectCardContainer">
                    <Card
                        imageName="HttpIcon"
                        title="OGSA E-Commerce Website"
                        subtitle="OGSA"
                        link="https://github.com/vp2305/portfolio"
                        link2="https://ontariogsa.com"
                    />

                    <Card
                        imageName="AppsIcon"
                        title="Puzzle Solver"
                        subtitle="Puzzle"
                        link="https://github.com/vp2305/CP468-A1"
                    />

                    <Card
                        imageName="FaceIcon"
                        title="Voice Assistant"
                        subtitle="Voice Assistant"
                        link="https://github.com/vp2305/VoiceAssistent"
                    />

                    {/* <Card
                        imageName="FaceIcon"
                        title="Face Detection and Recognition"
                        subtitle="Face Detection and Recognition"
                        link="https://github.com/vp2305/Face-Detection-and-Face-Recognition"
                    /> */}

                    <Card
                        imageName="ChatIcon"
                        title="TCP-Chatroom"
                        subtitle="TCP-Chatroom"
                        link="https://github.com/vp2305/TCP-Chatroom"
                    />

                    <Card
                        imageName="InstagramIcon"
                        title="Instagram Clone"
                        subtitle="Instagram Clone"
                        link="https://github.com/vp2305/Instagram-Clone"
                    />

                    <Card
                        imageName="HttpIcon"
                        title="Website Portfolio"
                        subtitle="Website Portfolio"
                        link="https://github.com/vp2305/portfolio"
                    />

                </div>
            </div>

            <div div className="contact_container" id="contact" >
                <h1>Get In Touch</h1>
                <h2>
                    <a className="icons" href="https://www.linkedin.com/in/vaibhav-patel-3125b6198/" target="_blank">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    <a className="icons" href="https://www.instagram.com/vaibhav.p23/" target="_blank">
                        <InstagramIcon fontSize="large" />
                    </a>
                    <a className="icons" href="mailto:vaibhav.p2305@gmail.com" target="_blank">
                        <MailIcon fontSize="large" />
                    </a>
                    <a className="icons" href="https://github.com/vp2305" target="_blank">
                        <GitHubIcon fontSize="large" />
                    </a>
                </h2>
            </div >

        </div >
    )
}

export default Home
