import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
    "First, solve the problem. Then, write the code.",
    "Make it work, make it right, make it fast."
];

export default function Portfolio() {
    const [loading, setLoading] = useState(true);
    const [quote, setQuote] = useState("");

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    if (loading) {
        return (
            <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white text-center px-4">
                <p className="fs-4 w-75">{quote}</p>
                <p className="text-muted mt-3">Loading Amaan's Portfolio...</p>
            </div>
        );
    }

    return (
        // <div className="bg-dark text-white">
        //     <div
        //         className="vh-100 d-flex flex-column justify-content-center align-items-center text-center"
        //         style={{ backgroundImage: "url('/frontend-dev-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        //     >
        //         <h1 className="display-3 fw-bold" data-aos="fade-down">Mohd Amaan Siddiqui</h1>
        //         <p className="fs-4 text-secondary mt-3" data-aos="fade-up">
        //             Frontend Developer | React | TypeScript | Next.js | Node.js
        //         </p>



<div className="bg-dark text-white position-relative overflow-hidden">
    <div
        className="vh-100 d-flex flex-column justify-content-center align-items-center text-center position-relative"
        style={{
            backgroundImage: "url('/frontend-dev-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        {/* Floating SVGs */}
        <img
            src="./icons/command.svg"
            className="floating-icon "
            style={{ top: '15%', left: '10%' }}
            data-aos="fade-up-right"
            alt="command"
        />
        <img
            src="./icons/face-id.svg"
            className="floating-icon"
            style={{ top: '30%', right: '12%' }}
            data-aos="zoom-in"
            alt="face-id"
        />
        <img
            src="./icons/pay.svg"
            className="floating-icon"
            style={{ bottom: '30%', left: '6%' }}
            data-aos="fade-up-left"
            alt="pay"
        />
        <img
            src="./icons/report-columns.svg"
            className="floating-icon"
            style={{ top: '10%', right: '22%' }}
            data-aos="fade-down"
            alt="report-columns"
        />
        <img
            src="./icons/select-face3d.svg"
            className="floating-icon"
            style={{ bottom: '25%', right: '8%' }}
            data-aos="flip-left"
            alt="select-face3d"
        />
        <img
            src="./icons/slash-square.svg"
            className="floating-icon"
            style={{ bottom: '8%', left: '22%' }}
            data-aos="flip-up"
            alt="slash-square"
        />

        {/* Text Content */}
        <h1 className="display-3 fw-bold" data-aos="fade-down">Mohd Amaan Siddiqui</h1>
        <p className="fs-4 text-secondary mt-3" data-aos="fade-up">
            Frontend Developer | React | TypeScript | Next.js | Node.js
        </p>


                <div className="d-flex gap-4 mt-4" data-aos="zoom-in">
                    <a href="https://github.com/mohdamaansiddiqui" target="_blank" rel="noreferrer" title="GitHub">
                        <Github className="text-white hover-pop" />
                    </a>
                    <a href="https://www.linkedin.com/in/amaan-siddiqui-678a4a203/" target="_blank" rel="noreferrer" title="LinkedIn">
                        <Linkedin className="text-white hover-pop" />
                    </a>
                    <a href="mailto:amaan.sid.101@gmail.com" title="Email">
                        <Mail className="text-white hover-pop" />
                    </a>
                    <a href="tel:+917906478405" title="Phone">
                        <Phone className="text-white hover-pop" />
                    </a>
                    <a href="/amaan-resume.pdf" download title="Download Resume">
                        <Download className="text-white hover-pop" />
                    </a>
                </div>
            </div>

            <div className="container py-5">
                <section className="mb-5" data-aos="fade-up">
                    <h2 className="text-center text-info fs-2 fw-bold mb-4">About Me</h2>
                    <p className="text-center text-light fs-5">
                        I'm Amaan Siddiqui, a passionate Frontend Developer with over 2 years of experience in building high-performance,
                        scalable, and aesthetically pleasing web applications. I specialize in React.js, TypeScript, and Next.js, and love creating smooth UI/UX experiences using Tailwind CSS and Material UI.
                        I'm currently diving deeper into testing frameworks like Jest and React Testing Library. With a solid foundation in DSA, and prior experience as a recruiter, I bring both technical excellence and strong communication to the table.
                    </p>
                </section>

                <section className="mb-5" data-aos="fade-up">
                    <h2 className="text-center text-info fs-2 fw-bold mb-4">🧰 Tech Toolbox</h2>
                    <div className="row text-center text-light fs-5">
                        {["⚛️ React.js", "🔠 TypeScript", "🌐 Next.js", "🎨 Tailwind CSS", "🎨 Material UI", "🧱 HTML5/CSS3", "🛠️ Node.js (Basic)", "🍃 MongoDB", "🔗 REST APIs", "🧪 Jest (Learning)", "🧪 React Testing Library", "🎨 Figma"].map((tech, idx) => (
                            <div key={idx} className="col-6 col-md-4 mb-2">{tech}</div>
                        ))}
                    </div>
                </section>

                <section className="mb-5" data-aos="fade-up">
                    <h2 className="text-info fs-3 fw-bold mb-4">Projects</h2>
                    <div className="row g-4">
                        {/* Recruitment CRM */}
                        <div className="col-md-6">
                            <div
                                className="project-card bg-dark text-white position-relative overflow-hidden rounded shadow-sm"
                                style={{
                                    backgroundImage: "url('/images/crm.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    minHeight: "350px",
                                }}
                                data-aos="fade-up-right"
                            >
                                {/* Dark overlay */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
                                ></div>

                                {/* Content */}
                                <div className="position-relative p-4 h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 className="text-info fs-5 mb-3">Recruitment CRM</h3>
                                        <ul className="text-light list-unstyled">
                                            <li>A Recruitment CRM – Ridd is a responsive web application for streamlining hiring workflows, featuring secure authentication, candidate tracking, and job management. Built using Next.js, React.js,
                                                Material UI, Node.js, Express.js, and MongoDB with JWT-based auth and RESTful APIs</li>
                                            {/* <li>• Frontend: Next.js (App Router), React.js, Material UI.</li>
                                            <li>• Backend: Node.js, Express.js, MongoDB (Mongoose).</li>
                                            <li>• Auth :JWT, Protected Routes.</li>
                                            <li>• State: React Context API, Custom Hooks.</li>
                                            <li>• Other Tools: Axios, Git, Postman, ESLint + Prettier</li> */}
                                        </ul>
                                    </div>
                                    <div className="d-flex flex-column align-items-center gap-2 mt-3">
                                        {/* <button
                                            className="btn btn-info btn-sm w-75"
                                            onClick={() => (window.location.href = "/crm-gallery")}
                                        >
                                            Project Gallery
                                        </button> */}
                                        <button
                                            className="btn btn-info btn-sm w-75"
                                            onClick={() =>
                                                window.open("https://app.ridd.in/auth/login", "_blank")
                                            }
                                        >
                                            Visit Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* E-commerce Website */}
                        <div className="col-md-6">
                            <div
                                className="project-card bg-dark text-white position-relative overflow-hidden rounded shadow-sm"
                                style={{
                                    backgroundImage: "url('/images/ecommerce.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    minHeight: "350px",
                                }}
                                data-aos="fade-up-left"
                            >
                                {/* Dark overlay */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
                                ></div>

                                {/* Content */}
                                <div className="position-relative p-4 h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 className="text-info fs-5 mb-3">E-commerce Delivery Website</h3>
                                        <ul className="text-light list-unstyled">
                                            <li>Meat Amingo is an online meat delivery service offering fresh meat through a user-friendly e-commerce platform,
                                                featuring cart functionality, payment gateway integration with UPI support,
                                                and built using Nginx, JavaScript, and Google tools for fast, secure, and SEO-optimized performance.</li>
                                            {/* <li>• API Integration: Search, filter & dynamic product display</li>
                                            <li>• Shopping Cart: Checkout & order processing</li>
                                            <li>• Responsive UI: Styled with Material UI</li> */}
                                        </ul>
                                    </div>
                                    <div className="d-flex flex-column align-items-center gap-2 mt-3">
                                        {/* <button
                                            className="btn btn-info btn-sm w-75"
                                            onClick={() => (window.location.href = "/ecommerce-gallery")}
                                        >
                                            Project Gallery
                                        </button> */}
                                        <button
                                            className="btn btn-info btn-sm w-75"
                                            onClick={() =>
                                                window.open("https://meatamingo.com/", "_blank")
                                            }
                                        >
                                            Visit Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recruitment CRM */}
                        <div className="col-md-6">
                            <div
                                className="project-card bg-dark text-white position-relative overflow-hidden rounded shadow-sm"
                                style={{
                                    backgroundImage: "url('/images/crm1.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    minHeight: "350px",
                                }}
                                data-aos="fade-up-right"
                            >
                                {/* Dark overlay */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
                                ></div>

                                {/* Content */}
                                <div className="position-relative p-4 h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 className="text-info fs-5 mb-3">RiddTech Landing Page</h3>
                                        <ul className="text-light list-unstyled">
                                            <li>The RiddTech website is built using technologies including React for the frontend, Node.js for the backend, Nginx as the web server, JavaScript for interactivity, and integrates AI tools like ChatGPT;
                                                it also uses secure APIs for communication and tracking features.</li>
                                            {/* <li>• Improved load speed by 20%</li>
                                            <li>• Added secure Node.js authentication</li>
                                            <li>• Resolved responsive/styling issues</li> */}
                                        </ul>
                                    </div>
                                    <div className="d-flex flex-column align-items-center gap-2 mt-3">
                                        {/* <button
                                            className="btn btn-info btn-sm w-75"
                                            onClick={() => (window.location.href = "/crm-gallery")}
                                        >
                                            Project Gallery
                                        </button> */}
                                        <button
                                            className="btn btn-info btn-sm w-75"
                                            onClick={() =>
                                                window.open("https://ridd.in/", "_blank")
                                            }
                                        >
                                            Visit Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div
                                className="project-card bg-dark text-white position-relative overflow-hidden rounded shadow-sm"
                                style={{
                                    backgroundImage: "url('/images/eff.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    minHeight: "350px",
                                }}
                                data-aos="fade-up-left"
                            >
                                {/* Dark overlay */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
                                ></div>

                                {/* Content */}
                                <div className="position-relative p-4 h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 className="text-info fs-5 mb-3">Efflairs - Landing Page</h3>
                                        <ul className="text-light list-unstyled">
                                            <li>Efflair is a premium lifestyle and wellness brand offering aphrodisiac and luxury products through a sleek, 
                                                responsive Shopify site. Developed using VS Code with Shopify (Liquid), HTML, CSS, and JavaScript.</li>
                                            {/* <li>• Improved load speed by 20%</li>
                                            <li>• Added secure Node.js authentication</li>
                                            <li>• Resolved responsive/styling issues</li> */}
                                        </ul>
                                    </div>
                                    <div className="d-flex flex-column align-items-center gap-2 mt-3">
                                        {/* <button
                                            className="btn btn-info btn-sm w-75"
                                            onClick={() => (window.location.href = "/crm-gallery")}
                                        >
                                            Project Gallery
                                        </button> */}
                                        <button
                                            className="btn btn-info btn-sm w-75"
                                            onClick={() =>
                                                window.open("https://efflair.com/?srsltid=AfmBOopLS-c976Mbh-aE-3VStJ_ywfJSn6bMB_bDof-Ypxejh2t5aBf-", "_blank")
                                            }
                                        >
                                            Visit Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-5" data-aos="fade-up">
                    <h2 className="text-center text-info fs-2 fw-bold mb-4">💼 Experience</h2>
                    <div className="text-light fs-5">
                        <div className="mb-4">
                            <h5 className="text-info">Adtek – Frontend Developer</h5>
                            <p className="mb-1"><em>Nov 2023 – Present</em></p>
                            <ul>
                                •  Develop responsive, SEO-friendly websites using HTML, CSS, JS, and React. <br/>
                                •  Build backend services and APIs with Node.js .<br/>
                                •  Optimize performance, scalability, and cross-browser compatibility.<br/>
                                •  Integrate third-party APIs & Collaborate with teams to deliver user-focused web solutions.<br/>

                                {/* <li>Developed and maintained scalable components using React and Material UI.</li>
                                <li>Collaborated with backend developers to integrate REST APIs.</li>
                                <li>Enhanced performance and responsiveness across devices.</li> */}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-info">DISYS - US IT Recruiter</h5>
                            <p className="mb-1"><em>Jan 2022 – Sep 2022</em></p>
                            <ul>
                              •   Led end-to-end recruitment for technical and senior roles across the US and Canada.<br/>
                              •   Sourced candidates via LinkedIn, Dice, Bullhorn, and Boolean searches.<br/>
                              •   Managed W2, C2C, and 1099 contracts.<br/>
                              •   Built strong talent pipelines through CRM tools and networking events.<br/>

                                {/* <li>Managed full-cycle recruitment for tech and non-tech roles.</li>
                                <li>Used CRM tools to streamline candidate tracking and client engagement.</li>
                                <li>Improved hiring efficiency by 30% through automation strategies.</li> */}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-info">Q1 Technologies - Technical Recruiter</h5>
                            <p className="mb-1"><em>Nov 2020 – Dec 2021</em></p>
                            <ul>
                              •   Partnered with hiring managers to define technical job requirements.<br/>
                              •   Created and posted engaging job descriptions across multiple platforms.<br/>

                                {/* <li>Managed full-cycle recruitment for tech and non-tech roles.</li>
                                <li>Used CRM tools to streamline candidate tracking and client engagement.</li>
                                <li>Improved hiring efficiency by 30% through automation strategies.</li> */}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Our Clients Section */}
                <section className="mb-5" data-aos="fade-up">
                    <h2 className="text-center text-info fs-2 fw-bold mb-4">🤝Clients</h2>
                    <div className="row text-center text-white">
                        <div className="col-6 col-md-3 mb-4">
                            //<img src="/clients/client1.png" alt="Client 1" className="img-fluid mb-2" style={{ maxHeight: "45px" }} />
                            <p className="mb-0">RiddTech</p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                           // <img src="/clients/client2.png" alt="Client 2" className="img-fluid mb-2" style={{ maxHeight: "45px" }} />
                            <p className="mb-0">Meat Amingo</p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            //<img src="/clients/client3.png" alt="Client 3" className="img-fluid mb-2" style={{ maxHeight: "45px" }} />
                            <p className="mb-0">Mafias Studioz</p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            //<img src="/clients/client4.png" alt="Client 4" className="img-fluid mb-2" style={{ maxHeight: "45px" }} />
                            <p className="mb-0">Adtek</p>
                        </div>
                    </div>
                </section>



                <footer className="text-center text-white mt-5" data-aos="fade-up">
                    <p>📞 +91 7906478405 | 📧 amaan.sid.101@gmail.com</p>
                    <p className="mt-2">Designed & Built with 💻 by Mohd Amaan Siddiqui</p>
                </footer>
            </div>
        </div>
    );
}
