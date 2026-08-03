import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaGithub } from "react-icons/fa"
import { IoLogoVercel } from "react-icons/io5"
import { FiEdit2, FiTrash2 } from "react-icons/fi"
import { useNavigate } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'

const AdminHome = () => {
    const navigate = useNavigate()
    const api_base = "https://my-portfolio-32s5.onrender.com"

    const [projects, setProjects] = useState([])
    const [details, setDetails] = useState({})

    const fetch_projects = async () => {
        try {
            const response = await axios.get(`${api_base}/admin/getprojects`)
            setProjects(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetch_details = async () => {
        try {
            const response = await axios.get(`${api_base}/admin/getdetails`)
            setDetails(response.data[0])
        } catch (error) {
            console.log(error)
        }
    }
    // ============== Update Project ===========
    const [showProject, setShowProject] = useState(false)
    const [formdata, setFormdata] = useState({
        title: "",
        details: "",
        gitlink: "",
        livelink: "",
        createdAt: ""
    })

    const [techInput, setTechInput] = useState("")
    const [techstacks, setTechstacks] = useState([])
    const [pId, setPId] = useState("")

    const handle_change = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const add_tech = () => {
        if (techInput.trim() === "") return
        setTechstacks([...techstacks, techInput.trim()])
        setTechInput("")
    }

    const remove_tech = (index) => {
        setTechstacks(techstacks.filter((_, i) => i !== index))
    }

    const handle_key_down = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            add_tech()
        }
    }

    const handle_submit = async (e) => {
        e.preventDefault()
        try {
            const payload = { ...formdata, techstacks }
            const response = await axios.put(`${api_base}/admin/updateproject/${pId}`, payload)
            alert("Project Updated")
            setPId("")
            setShowProject(false)
            await fetch_projects()
            setFormdata({ title: "", details: "", gitlink: "", livelink: "", createdAt: "" })
            setTechstacks([])
        } catch (error) {
            alert("Something went wrong")
            console.log(error.response?.data?.detail || "Something went wrong")
        }
    }

    // ============= About Update ===============
    const [showAbout, setShowAbout] = useState("")


    // ---------- Delete handlers ----------
    const delete_project = async (id) => {
        if (!window.confirm("Delete this project?")) return
        try {
            await axios.delete(`${api_base}/admin/deleteproject/${id}`)
            setProjects(projects.filter((p) => p._id !== id))
            await fetch_projects()
        } catch (error) {
            alert("Something went wrong")
        }
    }

    const delete_skill = async (id) => {
        if (!window.confirm("Delete this skill?")) return
        try {
            await axios.delete(`${api_base}/admin/deleteskill/${id}`)
            fetch_details()
        } catch (error) {
            alert("Something went wrong")
        }
    }

    const delete_service = async (id) => {
        if (!window.confirm("Delete this service?")) return
        try {
            await axios.delete(`${api_base}/admin/deleteservice/${id}`)
            fetch_details()
        } catch (error) {
            alert("Something went wrong")
        }
    }

    const delete_education = async (id) => {
        if (!window.confirm("Delete this education entry?")) return
        try {
            await axios.delete(`${api_base}/admin/deleteeducation/${id}`)
            fetch_details()
        } catch (error) {
            alert("Something went wrong")
        }
    }

    const delete_certification = async (id) => {
        if (!window.confirm("Delete this certificate?")) return
        try {
            await axios.delete(`${api_base}/admin/deletecertofocatopn/${id}`)
            fetch_details()
        } catch (error) {
            alert("Something went wrong")
        }
    }

    const row = 'flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0'
    const iconBtn = 'w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300'
    const updateBtn = 'flex items-center gap-1 bg-[#0b16e3] text-white text-xs px-3 py-1.5 rounded cursor-pointer'

    useEffect(() => {
        fetch_projects()
        fetch_details()
    }, [])

    return (
        <div className='w-[95%] sm:w-[85%] max-w-4xl mx-auto my-8 flex flex-col gap-6'>

            {/* Projects */}
            <div className='bg-white rounded-2xl p-5 border border-gray-200'>
                <div className='w-full flex justify-between items-center mb-2'>
                    <h3 className='text-lg font-semibold text-[#024d4d]'>Projects</h3>
                    <button onClick={() => navigate("/addproject")} className='bg-[#0b12e0] text-white text-xs px-3 py-1.5 rounded cursor-pointer'>Add</button>
                </div>

                {projects?.map((project) => (
                    <div key={project._id} className={row}>
                        <div>
                            <p className='font-medium'>{project.title}</p>
                            <div className='flex gap-2 mt-1 flex-wrap'>
                                {project.techstacks?.map((tech, i) => (
                                    <span key={i} className='text-xs text-gray-500'>{tech}{i < project.techstacks.length - 1 ? ',' : ''}</span>
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center gap-1 shrink-0'>
                            <a href={project.gitlink} target='_blank' rel='noopener noreferrer' className={iconBtn}><FaGithub /></a>
                            <a href={project.livelink} target='_blank' rel='noopener noreferrer' className={iconBtn}><IoLogoVercel /></a>
                            <button className={iconBtn} onClick={() => {
                                setShowProject(true)
                                setPId(project._id)
                            }}><FiEdit2 /></button>
                            <button onClick={() => delete_project(project._id)} className={iconBtn + ' hover:text-red-600'}><FiTrash2 /></button>
                        </div>
                    </div>
                ))}
            </div>

            {/* About */}
            <div className='bg-white rounded-2xl p-5 border border-gray-200'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold text-[#024d4d]'>About</h3>
                    <button onClick={() => {
                        setShowAbout(project._id)
                    }} className={updateBtn}>Update <FiEdit2 /></button>
                </div>
                <p className='text-sm text-gray-600 mt-2'>{details.about}</p>
            </div>

            {/* Skills */}
            <div className='bg-white rounded-2xl p-5 border border-gray-200'>
                <div className='flex justify-between items-center mb-2'>
                    <h3 className='text-lg font-semibold text-[#024d4d]'>Skills</h3>
                    <button onClick={() => navigate(`/editskills/${details._id}`)} className={updateBtn}>Update <FiEdit2 /></button>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {details.skills?.map((skill, i) => (
                        <span key={i} className='flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full'>
                            {skill}
                            <FiTrash2 className='cursor-pointer hover:text-red-600' onClick={() => delete_skill(details._id)} />
                        </span>
                    ))}
                </div>
            </div>

            {/* Services */}
            <div className='bg-white rounded-2xl p-5 border border-gray-200'>
                <h3 className='text-lg font-semibold text-[#024d4d] mb-2'>Services</h3>
                {details.services?.map((service, index) => (
                    <div key={index} className={row}>
                        <div>
                            <p className='font-medium'>{service.title}</p>
                            <p className='text-xs text-gray-500'>{service.description}</p>
                        </div>
                        <div className='flex items-center gap-1 shrink-0'>
                            <button className={iconBtn} onClick={() => navigate(`/editservice/${service._id}`)}><FiEdit2 /></button>
                            <button onClick={() => delete_service(service._id)} className={iconBtn + ' hover:text-red-600'}><FiTrash2 /></button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Links */}
            <div className='bg-white rounded-2xl p-5 border border-gray-200'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold text-[#024d4d]'>Social Links</h3>
                    <button onClick={() => navigate(`/editsociallinks/${details._id}`)} className={updateBtn}>Update <FiEdit2 /></button>
                </div>
                <div className='flex flex-col gap-1 mt-2 text-sm text-gray-600'>
                    <p>GitHub: {details.socialLinks?.github}</p>
                    <p>LinkedIn: {details.socialLinks?.linkedin}</p>
                    <p>Instagram: {details.socialLinks?.instagram}</p>
                </div>
            </div>

            {/* Education */}
            <div className='bg-white rounded-2xl p-5 border border-gray-200'>
                <h3 className='text-lg font-semibold text-[#024d4d] mb-2'>Education</h3>
                {details.education?.map((item) => (
                    <div key={item._id} className={row}>
                        <div>
                            <p className='font-medium'>{item.degree}</p>
                            <p className='text-xs text-gray-500'>{item.institute} · {item.start_year} - {item.end_year}</p>
                        </div>
                        <div className='flex items-center gap-1 shrink-0'>
                            <button className={iconBtn} onClick={() => navigate(`/editeducation/${item._id}`)}><FiEdit2 /></button>
                            <button onClick={() => delete_education(item._id)} className={iconBtn + ' hover:text-red-600'}><FiTrash2 /></button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Certification */}
            <div className='bg-white rounded-2xl p-5 border border-gray-200'>
                <h3 className='text-lg font-semibold text-[#024d4d] mb-2'>Certification</h3>
                {details.certification?.map((cert) => (
                    <div key={cert._id} className={row}>
                        <div>
                            <p className='font-medium'>{cert.title}</p>
                            <p className='text-xs text-gray-500'>{cert.organization}</p>
                        </div>
                        <div className='flex items-center gap-1 shrink-0'>
                            <button className={iconBtn} onClick={() => navigate(`/editcertification/${cert._id}`)}><FiEdit2 /></button>
                            <button onClick={() => delete_certification(cert._id)} className={iconBtn + ' hover:text-red-600'}><FiTrash2 /></button>
                        </div>
                    </div>
                ))}
            </div>
            {/* ---------------- Updates ----------------- */}
            {/* =================== Update Project ============ */}
            {
                showProject && (
                    <section className='w-[95%] sm:w-[85%] max-w-2xl mx-auto my-8 bg-[#ffffff] absolute flex flex-col  left-68 top-10 p-2 rounded-2xl border '>
                        <button className=' p-2 rounded cursor-pointer self-end  text-white mr-0 ' onClick={() => setShowProject(false)} >❌</button>
                        <form
                            onSubmit={handle_submit}
                            className='bg-[#f8fefe] rounded-3xl p-5 sm:p-6 flex flex-col gap-3 border border-[#024d4d]/20  '
                        >
                            <h3 className='text-xl sm:text-2xl font-bold text-[#024d4d] mb-1'>Add New Project</h3>

                            <input
                                type='text' name='title' value={formdata.title} onChange={handle_change}
                                placeholder='Project Title'
                                className='w-full border-b-2 border-gray-300 focus:border-[#04665a] px-2 py-2 outline-none bg-transparent transition-colors duration-300'
                            />

                            <textarea
                                name='details' value={formdata.details} onChange={handle_change}
                                placeholder='Project Details'
                                rows={3}
                                className='w-full border-b-2 border-gray-300 focus:border-[#04665a] px-2 py-2 outline-none resize-none bg-transparent transition-colors duration-300'
                            />

                            {/* Techstacks tag input */}
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2 border-b-2 border-gray-300 focus-within:border-[#04665a] transition-colors duration-300'>
                                    <input
                                        type='text'
                                        value={techInput}
                                        onChange={(e) => setTechInput(e.target.value)}
                                        onKeyDown={handle_key_down}
                                        placeholder='Type a tech and press Enter'
                                        className='flex-1 px-2 py-2 outline-none bg-transparent'
                                    />
                                    <button
                                        type='button'
                                        onClick={add_tech}
                                        className='text-sm font-semibold text-[#04665a] hover:text-[#024d4d] transition-colors duration-300 px-2'
                                    >
                                        Add
                                    </button>
                                </div>

                                {techstacks.length > 0 && (
                                    <div className='flex flex-wrap gap-2'>
                                        {techstacks.map((tech, index) => (
                                            <span
                                                key={index}
                                                className='flex items-center gap-1 bg-[#d1ca0b] text-black text-[0.75rem] px-2 py-1 rounded-full'
                                            >
                                                {tech}
                                                <IoClose
                                                    onClick={() => remove_tech(index)}
                                                    className='cursor-pointer hover:text-[#024d4d] transition-colors duration-300'
                                                />
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className='flex items-center gap-2 border-b-2 border-gray-300 focus-within:border-[#04665a] transition-colors duration-300'>
                                <FaGithub className='text-gray-500' />
                                <input
                                    type='text' name='gitlink' value={formdata.gitlink} onChange={handle_change}
                                    placeholder='GitHub Link'
                                    className='flex-1 px-2 py-2 outline-none bg-transparent'
                                />
                            </div>

                            <div className='flex items-center gap-2 border-b-2 border-gray-300 focus-within:border-[#04665a] transition-colors duration-300'>
                                <IoLogoVercel className='text-gray-500' />
                                <input
                                    type='text' name='livelink' value={formdata.livelink} onChange={handle_change}
                                    placeholder='Live Demo Link'
                                    className='flex-1 px-2 py-2 outline-none bg-transparent'
                                />
                            </div>

                            <input
                                type='date' name='createdAt' value={formdata.createdAt} onChange={handle_change}
                                className='w-full border-b-2 border-gray-300 focus:border-[#04665a] px-2 py-2 outline-none bg-transparent transition-colors duration-300'
                            />

                            <button
                                type='submit'
                                className='self-start bg-[#04665a] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#024d4d] hover:pr-8 transition-all duration-300'>
                                Save Project
                            </button>
                        </form>
                    </section>
                )
            }
            {/* ========= Update About ======= */}
            <section className='w-[95%] sm:w-[85%] max-w-2xl mx-auto my-8 bg-[#ffffff] absolute flex flex-col  left-68 top-10 p-2 rounded-2xl border '>
                <button className=' p-2 rounded cursor-pointer self-end  text-white mr-0 ' onClick={() => setShowAbout("")} >❌</button>
                <input type="text" placeholder='Write about yourself.......'  />
                {/* ====== Ye raha hai about wala and ye pura portfolio kl tk complete krna hai  */}

            </section>

        </div>
    )
}

export default AdminHome