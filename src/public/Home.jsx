import React, { useEffect, useState } from 'react'
import axios from "axios"

import { GrProjects } from "react-icons/gr";
import { IoMdCodeDownload } from "react-icons/io";
import { FaGithub, FaInstagramSquare, FaInstagram, FaLinkedin, FaPhoneAlt, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { MdEmail } from 'react-icons/md';


import vivek from '../assets/vivek.png'
import hero from '../assets/hero.png'
import aboutimg from '../assets/about.png'
import projectimg from '../assets/project.png'

const Home = () => {
    const [projects, setProjects] = useState([])
    const [details, setDetails] = useState({})

    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "REST API",
        "MongoDB",
        "JWT",
        "Git",
        "GitHub",
    ];
    // === Education ===
    const education = [
        {
            degree: "Bachelor of Arts (B.A.)",
            institute: "Indira Gandhi National Open University (IGNOU)",
            duration: "2023 - Present",
            description:
                "Currently pursuing a Bachelor of Arts while continuously improving my Full Stack Development skills through hands-on projects and self-learning.",
        },
        {
            degree: "Full Stack Web Development",
            institute: "Coding Age, Patna",
            duration: "Completed",
            description:
                "Completed practical training in React.js, Tailwind CSS, Python, FastAPI, MongoDB, REST APIs, Git, GitHub, and Deployment.",
        },
    ];

    const certificates = [
        {
            title: "Full Stack Web Development",
            issuer: "Coding Age",
        },
        {
            title: "Python Programming",
            issuer: "Coding Age",
        },
        {
            title: "React.js Development",
            issuer: "Coding Age",
        },
    ];
    // ------------------------
    const api_base = "https://my-portfolio-32s5.onrender.com"

    // ======== Projects =========
    const fetch_projects = async () => {
        try {
            const response = await axios.get(`${api_base}/projects`)
            setProjects(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    // ========= Details ==========
    const fetch_details = async () => {
        try {
            const response = await axios.get(`${api_base}/details`)
            setDetails(response.data[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetch_projects()
        fetch_details()
    }, [])

    return (
        <>
            <div className=' w-full h-auto bg-[#11121F] text-white flex flex-col gap-2 ' >
                {/* ======= Hero Section ======= */}
                <section className=' w-full h-[80vh] flex justify-center items-center gap-2 ' >
                    <div className=' w-[50%] h-full p-6 flex flex-col justify-center gap-2 ' >
                        <h1 className='text-[5rem] uppercase font-semibold font-mono ' >Vivek <span>Anand</span></h1>
                        <h1 className=' text-[3rem] leading-12 font-bold   ' >FULL STACK DEVELOPER · <span className=' text-[#04b3a8] ' >PYTHON & REACT</span></h1>
                        <p>Building end-to-end web applications with React, Python, FastAPI, and MongoDB, with a focus on responsive design, secure APIs, clean code, and practical user experiences.</p>
                        <div className=' flex gap-2 m-2 ' >
                            <button className=' flex items-center gap-2 text-[0.8rem] bg-[#05716d] text-white font-semibold p-1 rounded cursor-pointer ' >View My Work <GrProjects /> </button>
                            <button className=' flex items-center gap-2 text-[0.8rem] bg-[#05716d] text-white font-semibold p-1 rounded cursor-pointer '>Download CV <IoMdCodeDownload /> </button>
                        </div>
                        {/* ======== Social Links ======== */}
                        <div className=' w-full flex justify-center items-center gap-3 text-[1.5rem] mt-10 ' >
                            <a href={details.socialLinks?.github}><FaGithub /></a>
                            <a href={details.socialLinks?.linkedin}><FaLinkedin /></a>
                            <a href={details.socialLinks?.instagram}><FaInstagramSquare /></a>
                        </div>
                    </div>
                    <div className=' w-[50%] h-full flex justify-center items-centern relative ' >
                        <div className=' bg-[#0bd1a9] w-[40%] h-[50%] rounded-b-4xl ' >
                            <img src={vivek} alt="hero" className=" absolute z-50 w-80 bottom-20 drop-shadow-[0_0_22px_#05b28d]  " />
                        </div>
                    </div>
                </section>

                {/* ========= About Section ======== */}
                <section className="bg-[#024d4d] text-white w-[80%] min-h-[60vh] mx-auto rounded-2xl flex justify-center items-center gap-2 p-2">

                    <div className="w-[50%] h-full flex flex-col justify-center p-2 ">

                        <span className="text-sm uppercase tracking-[5px] font-semibold  mb-2">
                            About Me
                        </span>

                        <h2 className="text-5xl font-bold leading-tight mb-2">
                            About Me
                        </h2>

                        <p className="text-[1rem] max-w-xl">
                            {details.about}
                        </p>

                    </div>

                    <div className="w-[50%] h-full flex justify-center items-center">
                        <img
                            src={aboutimg}
                            alt="about"
                            className="w-[80%] object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]"
                        />
                    </div>

                </section>

                {/* ============ Skills ============ */}
                <section className="bg-[#ffffff] text-black w-[80%] min-h-[60vh] mx-auto rounded-2xl p-2 border border-[#024d4d] border-dashed mb-2 ">
                    <div className="mb-10">
                        <span className="text-sm uppercase tracking-[5px] text-gray-500">
                            Skills
                        </span>

                        <h2 className="text-5xl font-bold mt-3">
                            My Skills
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {details.skills?.map((skill, index) => (
                            <div
                                key={index}
                                className="px-6 py-4 border border-black/20 rounded-xl text-lg font-medium hover:bg-[#024d4d] hover:text-white transition-all duration-300 cursor-default " >
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>
                {/* =========== Projects ======== */}
                <section className="bg-[#ffffff] text-black w-full min-h-[60vh] mx-auto rounded-2xl p-4 border border-[#024d4d] mb-2">

                    {/* Heading */}
                    <div className="mb-5">
                        <h2 className="text-3xl font-bold text-[#024d4d]">
                            My Projects
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Some of the projects I have built and worked on.
                        </p>
                    </div>

                    {/* ================= Project Card ================ */}
                    <div className=' w-full flex flex-wrap gap-2 ' >
                        {
                            projects?.map((project, index) => (
                                <div key={index} className="bg-white block max-w-70 p-2 border border-gray-300 rounded-xl shadow-sm">

                                    <a href="#">
                                        <img
                                            className="rounded-lg w-full"
                                            src={projectimg}
                                            alt="Portfolio Project"
                                        />
                                    </a>

                                    <a href="#">
                                        <h5 className="mt-2 mb-2 text-2xl font-semibold">
                                            {project.title}
                                        </h5>
                                    </a>

                                    <p className="mb-2 text-[0.8rem] text-gray-600">
                                        {project.details}
                                    </p>

                                    {/* Skills */}
                                    <div className="w-full flex flex-wrap gap-2">
                                        {project.techstacks?.map((skill, index) => (
                                            <p
                                                key={index}
                                                className="bg-[#04665a] text-[0.8rem] px-2 py-1 rounded-2xl text-white"
                                            >
                                                {skill}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex justify-around items-center mt-3">
                                        <a
                                            href={project.gitlink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-gray-300 flex justify-center items-center p-1.5 gap-1 cursor-pointer rounded-md hover:bg-gray-100"
                                        >
                                            GitHub <FaGithub />
                                        </a>

                                        <a
                                            href={project.livelink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-gray-300 flex justify-center items-center p-1.5 gap-1 cursor-pointer rounded-md hover:bg-gray-100"
                                        >
                                            Live Demo <IoLogoVercel />
                                        </a>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </section>
                {/* =========== Services ======== */}
                <section className="bg-[#ffffff] text-black w-[80%] min-h-[60vh] mx-auto rounded-2xl p-4 border border-[#024d4d] mb-2">
                    <div className="mb-5">
                        <h2 className="text-3xl font-bold text-[#024d4d]">
                            My Services
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Delivering full-stack web solutions with clean and efficient code.
                        </p>
                    </div>
                    {/* ----------- Service Card --------- */}
                    <div className=' w-full flex flex-wrap gap-2  ' >
                        {
                            details.services?.length === 0 ? (
                                <p>No Services Provide</p>
                            ) :
                                (
                                    details.services?.map((service, index) => (
                                        <div key={index} className=' border rounded-[0.2rem] p-2 ' >
                                            <h1 className=' text-[2rem] font-bold font-mono ' >{service.title}</h1>
                                            <h1>{service.description}</h1>
                                        </div>
                                    ))
                                )
                        }
                    </div>
                </section>
                {/* ========== Contact ======= */}
                <section className='bg-white text-black w-full min-h-[60vh] mx-auto rounded-2xl p-4 border border-[#024d4d] mb-2'>

                    {/* Heading */}
                    <div className='mb-6'>
                        <h2 className='text-3xl font-bold text-[#024d4d]'>Contact Me</h2>
                        <p className='text-sm text-gray-600 mt-1'>
                            Let’s build something amazing together.
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6'>

                        {/* Left Side - Contact Info */}
                        <div className='flex-1 bg-[#f8fefe] border border-[#024d4d] rounded-2xl p-5 flex flex-col gap-4'>

                            <div className='flex items-center gap-3'>
                                <div className='bg-[#04665a] text-white p-3 rounded-full'>
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>Phone</p>
                                    <p className='font-semibold'>{details.contacts?.number}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div className='bg-[#04665a] text-white p-3 rounded-full'>
                                    <MdEmail />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>Email</p>
                                    <p className='font-semibold'>{details.contacts?.email}</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className='mt-2'>
                                <p className='font-semibold mb-3'>Follow Me</p>

                                <div className='flex gap-3 flex-wrap'>

                                    <a
                                        href={details.socialLinks?.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='border border-[#024d4d] p-3 rounded-xl hover:bg-[#04665a] hover:text-white transition'
                                    >
                                        <FaGithub size={20} />
                                    </a>

                                    <a
                                        href={details.socialLinks?.linkedin}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='border border-[#024d4d] p-3 rounded-xl hover:bg-[#04665a] hover:text-white transition'
                                    >
                                        <FaLinkedin size={20} />
                                    </a>

                                    <a
                                        href={details.socialLinks?.instagram}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='border border-[#024d4d] p-3 rounded-xl hover:bg-[#04665a] hover:text-white transition'
                                    >
                                        <FaInstagram size={20} />
                                    </a>

                                </div>
                            </div>

                        </div>

                        {/* Right Side - Contact Form */}
                        <div className='flex-1 bg-[#f8fefe] border border-[#024d4d] rounded-2xl p-5 flex flex-col gap-4'>

                            <h3 className='text-xl font-bold text-[#024d4d]'>Send a Message</h3>

                            <input
                                type='text'
                                placeholder='Your Name'
                                className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#04665a]'
                            />

                            <input
                                type='email'
                                placeholder='Your Email'
                                className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#04665a]'
                            />

                            <textarea
                                rows='5'
                                placeholder='Your Message'
                                className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#04665a]'
                            />

                            <button className='bg-[#04665a] text-white py-3 rounded-xl font-semibold hover:bg-[#024d4d] transition'>
                                Send Message
                            </button>

                        </div>

                    </div>

                </section>
                {/* ============  */}
                <section className="w-full bg-white border border-[#024d4d] rounded-2xl p-6 mb-3">

                    {/* Heading */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-[#024d4d]">
                            Education & Certifications
                        </h2>
                        <p className="text-gray-600 mt-1">
                            My academic background and professional learning journey.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Education */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-5 flex items-center gap-2">
                                <FaGraduationCap className="text-[#04665a]" />
                                Education
                            </h3>

                            <div className="flex flex-col gap-5">
                                {education.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-xl p-4 hover:shadow-md duration-300"
                                    >
                                        <h4 className="text-xl font-semibold">{item.degree}</h4>

                                        <p className="text-[#04665a] font-medium">
                                            {item.institute}
                                        </p>

                                        <p className="text-sm text-gray-500 mb-2">
                                            {item.duration}
                                        </p>

                                        <p className="text-gray-600 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-5 flex items-center gap-2">
                                <FaCertificate className="text-[#04665a]" />
                                Certifications
                            </h3>

                            <div className="flex flex-col gap-4">
                                {certificates.map((certificate, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-xl p-4 hover:shadow-md duration-300 flex justify-between items-center"
                                    >
                                        <div>
                                            <h4 className="font-semibold text-lg">
                                                {certificate.title}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {certificate.issuer}
                                            </p>
                                        </div>

                                        <FaCertificate className="text-2xl text-[#04665a]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Home