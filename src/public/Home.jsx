import React, { useEffect, useState } from 'react'
import axios from "axios"

import { GrProjects } from "react-icons/gr";
import { IoMdCodeDownload } from "react-icons/io";
import { FaGithub, FaInstagramSquare, FaInstagram, FaLinkedin, FaPhoneAlt, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { MdEmail } from 'react-icons/md';


import vivek from '../assets/vivek.png'
import aboutimg from '../assets/about.png'
import projectimg from '../assets/project.png'
import frontend from '../assets/frontend.png'
import fullstack from '../assets/fullstack.png'
import backend from '../assets/backend.png'
import bg from '../assets/bg.png'

const Home = () => {
    const [projects, setProjects] = useState([])
    const [details, setDetails] = useState({})

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

    // ========= Send Inquiry ================
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        phone: "",
        msg: ""
    })
    const handle_change = (e) => {
        setFormdata({
            ...formdata, [e.target.name]: e.target.value
        })
    }

    const handle_inquiry = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${api_base}/sendemail`, formdata)
            alert("Inquiry Send")
            setFormdata({
                name: "",
                email: "",
                phone: "",
                msg: ""
            })
        } catch (error) {
            alert("Something went wrong");
            console.log(error.response?.data?.detail || "Something went wrong");

        }
    }

    useEffect(() => {
        fetch_projects()
        fetch_details()
    }, [])

    return (
        <>
            <div className='w-full h-auto flex flex-col gap-3'>

                {/* ======= Hero Section ======= */}
                <section id='home'
                    className='w-[95vw] sm:w-[92vw] lg:w-[85vw] min-h-[70vh] lg:h-[85vh] mx-auto mt-2 rounded-2xl flex justify-center items-center bg-cover bg-center bg-no-repeat relative py-10 lg:py-0'
                    style={{ backgroundImage: `url(${bg})` }} >
                    <div className="absolute rounded-2xl inset-0 bg-[#0f110f75]"></div>

                    <div className='w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-5 sm:px-8 z-10'>

                        <div className='w-full lg:w-[55%] flex flex-col gap-3 sm:gap-4 text-center lg:text-left items-center lg:items-start'>
                            <div className='flex items-center gap-2'>
                                <span className='w-8 h-[2px] bg-[#d1ca0b]'></span>
                                <span className='text-[#d1ca0b] font-mono tracking-[4px] text-xs sm:text-sm uppercase'>Hey, I'm</span>
                            </div>

                            <h1 className='text-white text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] leading-[0.95] uppercase font-bold font-mono'>
                                Vivek<br /><span className='text-[#04b3a8]'>Anand</span>
                            </h1>

                            <h1 className='text-white text-base sm:text-[1.2rem] font-semibold border-l-2 border-[#04b3a8] pl-3'>
                                Full Stack Developer <span className='text-gray-400'>·</span> <span className='text-[#04b3a8]'>Python & React</span>
                            </h1>

                            <p className='text-gray-300 max-w-md text-sm sm:text-[0.95rem]'>
                                Building end-to-end web applications with React, Python, FastAPI, and MongoDB, with a focus on responsive design, secure APIs, clean code, and practical user experiences.
                            </p>

                            <div className='flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-5 mt-2 sm:mt-4'>
                                <button className='flex items-center gap-2 text-sm bg-[#d1ca0b] hover:bg-[#04b3a8] hover:text-white text-black font-semibold px-5 py-2.5 rounded-full transition-colors duration-300 cursor-pointer'>
                                    Download CV <IoMdCodeDownload />
                                </button>

                                <div className='flex gap-2 text-white text-[1.1rem]'>
                                    <a href={details.socialLinks?.github} target='blank'
                                        className='w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-[#d1ca0b] hover:text-black hover:border-[#d1ca0b] hover:-translate-y-1 transition-all duration-300'>
                                        <FaGithub />
                                    </a>
                                    <a href={details.socialLinks?.linkedin} target='blank'
                                        className='w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-[#d1ca0b] hover:text-black hover:border-[#d1ca0b] hover:-translate-y-1 transition-all duration-300'>
                                        <FaLinkedin />
                                    </a>
                                    <a href={details.socialLinks?.instagram} target='blank'
                                        className='w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-[#d1ca0b] hover:text-black hover:border-[#d1ca0b] hover:-translate-y-1 transition-all duration-300'>
                                        <FaInstagramSquare />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='w-[70%] sm:w-[55%] lg:w-[38%] flex justify-center items-center relative mt-6 lg:mt-0'>
                            <div className='absolute w-[75%] h-[80%] border-2 border-[#d1ca0b] rounded-3xl -bottom-4 -right-2'></div>
                            <div className='absolute w-[75%] h-[80%] bg-[#04b3a8]/90 rounded-3xl bottom-4 right-6'></div>

                            <img src={vivek} alt="hero" className="relative z-10 w-40 sm:w-56 lg:w-64 hover:scale-105 transition-transform duration-500" />

                            <div className='absolute -left-2 sm:-left-4 top-4 sm:top-6 flex flex-col gap-2 z-20'>
                                <span className='bg-white text-black px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold font-mono shadow-sm'>Full Stack</span>
                                <span className='bg-black text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold font-mono shadow-sm'>Backend</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========= About Section ======== */}
                <section id='about' className="bg-[#344C36] text-white w-[95%] sm:w-[92%] max-w-6xl mx-auto rounded-3xl flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-4 p-5 sm:p-6">

                    <div className="w-full lg:w-[55%] flex flex-col gap-3 text-center lg:text-left items-center lg:items-start">
                        <span className="text-xs sm:text-sm uppercase tracking-[5px] font-semibold text-[#d1ca0b]">-- About Me</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                            Who is <span className='text-[#d1ca0b] font-mono'>Vivek?</span>
                        </h2>
                        <p className="text-sm sm:text-[0.95rem] text-gray-200 max-w-xl">{details.about}</p>

                        <div className='flex items-center gap-2 mt-2'>
                            <div className='bg-[#d1ca0b] text-black rounded-2xl px-4 py-2 text-center font-semibold'>
                                <p className='font-mono text-lg sm:text-xl leading-none'>{projects?.length}</p>
                                <p className='text-xs'>Projects</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[60%] sm:w-[45%] flex justify-center items-center relative">
                        <div className='absolute bg-[#d1ca0b] w-[55%] h-[65%] rounded-[40%] -rotate-6'></div>
                        <img
                            src={aboutimg}
                            alt="about"
                            className="relative w-[65%] object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]"
                        />
                    </div>
                </section>

                {/* ============ Skills ============ */}
                <section id='skills' className="bg-white text-black w-[95%] sm:w-[92%] max-w-6xl mx-auto rounded-3xl p-5 sm:p-6 border border-dashed border-[#024d4d] mb-2">
                    <span className="text-xs sm:text-sm uppercase tracking-[5px] text-gray-500">-- Skills</span>
                    <h2 className="text-2xl sm:text-[2rem] font-bold mb-4">My Skills</h2>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {details.skills?.map((skill, index) => (
                            <div
                                key={index}
                                style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
                                className="px-3 sm:px-4 py-1.5 border border-[#024d4d] rounded-full text-sm sm:text-[1rem] font-medium hover:bg-[#024d4d] hover:text-white hover:rotate-0 transition-all duration-300 cursor-default">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* =========== Projects ======== */}
                <section id='projects' className="bg-[#344C36] w-full py-8 sm:py-10 px-4 sm:px-6 mb-2">
                    <div className="max-w-6xl mx-auto mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#d3c803]">-- My Latest Projects</h2>
                        <p className="text-sm text-gray-300 mt-1">Some of the projects I have built and worked on.</p>
                    </div>

                    <div className='max-w-6xl mx-auto w-full flex flex-wrap justify-center lg:justify-start items-start gap-5'>
                        {
                            projects?.map((project, index) => (
                                <div
                                    key={index}
                                    style={{ marginTop: index % 2 === 0 ? '0px' : '28px' }}
                                    className="bg-white w-full sm:w-72 p-3 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 lg:!mt-0 sm:[margin-top:inherit]">

                                    <a href="#">
                                        <img className="rounded-xl w-full" src={projectimg} alt="Portfolio Project" />
                                    </a>

                                    <a href="#">
                                        <h5 className="mt-3 mb-1 text-lg sm:text-xl font-semibold">{project.title}</h5>
                                    </a>

                                    <p className="mb-3 text-[0.8rem] text-gray-600">{project.details}</p>

                                    <div className="w-full flex flex-wrap gap-2 mb-3">
                                        {project.techstacks?.map((skill, index) => (
                                            <p key={index} className="bg-[#d1ca0b] text-[0.75rem] px-2 py-1 rounded-full text-black">
                                                {skill}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center gap-2">
                                        <a

                                            href={project.gitlink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 border border-gray-300 flex justify-center items-center py-1.5 gap-1 rounded-full hover:bg-[#024d4d] hover:text-white hover:border-[#024d4d] transition-colors duration-300"

                                        > GitHub <FaGithub />
                                        </a>

                                        <a
                                            href={project.livelink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 border border-gray-300 flex justify-center items-center py-1.5 gap-1 rounded-full hover:bg-[#04665a] hover:text-white hover:border-[#04665a] transition-colors duration-300"

                                        > Live <IoLogoVercel />
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div >
                </section >

                {/* =========== Services ======== */}
                < section id='services' className="bg-white text-black w-[95%] sm:w-[92%] max-w-6xl mx-auto rounded-3xl p-5 sm:p-6 border border-[#024d4d] mb-2" >
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#024d4d]">My Services</h2>
                    <p className="text-sm text-gray-600 mt-1 mb-5">Delivering full-stack web solutions with clean and efficient code.</p>

                    <div className='w-full flex flex-wrap gap-4'>
                        {
                            details.services?.length === 0 ? (
                                <p>No Services Provide</p>
                            ) : (
                                details.services?.map((service, index) => (
                                    <div
                                        key={index}
                                        className='flex-1 min-w-full sm:min-w-[220px] border-l-4 border-[#d1ca0b] bg-gray-50 rounded-r-2xl p-4 hover:bg-[#344C36] hover:text-white transition-colors duration-300'>
                                        <h1 className='text-lg sm:text-xl font-bold font-mono'>{service.title}</h1>
                                        <h1 className='text-sm font-normal mt-1'>{service.description}</h1>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </section >

                {/* ========== Contact ======= */}
                < section id='contact' className='bg-[#344C36] w-full py-8 sm:py-10 px-4 sm:px-6 mb-2' >

                    <div className='max-w-6xl mx-auto mb-6'>
                        <h2 className='text-2xl sm:text-3xl font-bold text-[#d6d207]'>-- Contact Me</h2>
                        <p className='text-sm text-white mt-1'>Let's build something amazing together.</p>
                    </div>

                    <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-5'>

                        {/* Left Side - Contact Info */}
                        <div className='w-full md:w-[38%] bg-[#f8fefe] rounded-3xl p-5 flex flex-col gap-4'>

                            <div className='flex items-center gap-3 hover:translate-x-1 transition-transform duration-300'>
                                <div className='bg-[#04665a] text-white p-3 rounded-full'><FaPhoneAlt /></div>
                                <div>
                                    <p className='text-sm text-gray-500'>Phone</p>
                                    <p className='font-semibold'>{details.contacts?.number}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-3 hover:translate-x-1 transition-transform duration-300'>
                                <div className='bg-[#04665a] text-white p-3 rounded-full'><MdEmail /></div>
                                <div>
                                    <p className='text-sm text-gray-500'>Email</p>
                                    <p className='font-semibold'>{details.contacts?.email}</p>
                                </div>
                            </div>

                            <div className='mt-2 pt-4 border-t border-gray-200'>
                                <p className='font-semibold mb-3'>Follow Me</p>
                                <div className='flex gap-3'>
                                    <a href={details.socialLinks?.github} target='_blank' rel='noopener noreferrer'
                                        className='bg-white border border-[#024d4d] p-3 rounded-full hover:bg-[#04665a] hover:text-white hover:-translate-y-1 transition-all duration-300'>
                                        <FaGithub size={18} />
                                    </a>
                                    <a href={details.socialLinks?.linkedin} target='_blank' rel='noopener noreferrer'
                                        className='bg-white border border-[#024d4d] p-3 rounded-full hover:bg-[#04665a] hover:text-white hover:-translate-y-1 transition-all duration-300'>
                                        <FaLinkedin size={18} />
                                    </a>
                                    <a href={details.socialLinks?.instagram} target='_blank' rel='noopener noreferrer'
                                        className='bg-white border border-[#024d4d] p-3 rounded-full hover:bg-[#04665a] hover:text-white hover:-translate-y-1 transition-all duration-300'>
                                        <FaInstagram size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <form
                            onSubmit={handle_inquiry}
                            className='w-full md:w-[62%] bg-[#f8fefe] rounded-3xl p-5 flex flex-col gap-3'>

                            <h3 className='text-lg sm:text-xl font-bold text-[#024d4d] mb-1'>Send a Message</h3>

                            <input
                                type='text' name='name' value={formdata.name} onChange={handle_change}
                                placeholder='Your Name'
                                className='w-full border-b-2 border-gray-300 focus:border-[#04665a] px-2 py-2 outline-none bg-transparent transition-colors duration-300'
                            />
                            <input
                                type='email' name='email' value={formdata.email} onChange={handle_change}
                                placeholder='Your Email'
                                className='w-full border-b-2 border-gray-300 focus:border-[#04665a] px-2 py-2 outline-none bg-transparent transition-colors duration-300'
                            />
                            <input
                                type='tel' name='phone' value={formdata.phone} onChange={handle_change}
                                placeholder='Mo Num'
                                className='w-full border-b-2 border-gray-300 focus:border-[#04665a] px-2 py-2 outline-none bg-transparent transition-colors duration-300'
                            />
                            <textarea
                                name='msg' value={formdata.msg} onChange={handle_change}
                                placeholder='Your Message'
                                className='w-full border-b-2 border-gray-300 focus:border-[#04665a] px-2 py-2 outline-none resize-none bg-transparent transition-colors duration-300'
                            />

                            <button
                                type='submit'
                                className='self-start bg-[#04665a] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#024d4d] hover:pr-8 transition-all duration-300'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </section >

                {/* ============ Education & Certifications ============ */}
                < section className="w-[95%] sm:w-[92%] max-w-6xl mx-auto bg-white rounded-3xl p-5 sm:p-6 mb-4" >
                    <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#024d4d]">Education & Certifications</h2>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base">My academic background and professional learning journey.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Education */}
                        <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
                                <FaGraduationCap className="text-[#04665a]" /> Education
                            </h3>

                            <div className="flex flex-col gap-4 border-l-2 border-[#04665a]/30 pl-4">
                                {details.education?.map((item, index) => (
                                    <div key={index} className="relative hover:pl-2 transition-all duration-300">
                                        <span className="absolute -left-[22px] top-1.5 w-2.5 h-2.5 bg-[#d1ca0b] rounded-full"></span>
                                        <h4 className="text-base sm:text-lg font-semibold">{item.degree}</h4>
                                        <p className="text-[#04665a] font-medium text-sm">{item.institute}</p>
                                        <p className="text-xs text-gray-500 mb-1">{item.start_year} - {item.end_year}</p>
                                        <p className="text-gray-600 text-sm">{item?.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
                                <FaCertificate className="text-[#04665a]" /> Certifications
                            </h3>

                            <div className="flex flex-col gap-3">
                                {details.certification?.map((certificate, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center hover:bg-[#04665a] hover:text-white transition-colors duration-300"
                                    >
                                        <div>
                                            <h4 className="font-semibold text-sm sm:text-base">{certificate.title}</h4>
                                            <p className="text-xs text-gray-500">{certificate.organization}</p>
                                        </div>
                                        <FaCertificate className="text-xl text-[#d1ca0b]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Home