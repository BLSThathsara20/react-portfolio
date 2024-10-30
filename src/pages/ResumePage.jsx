import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Loader2, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe,
  Award,
  BookOpen,
  Briefcase,
  Code,
  ExternalLink
} from 'lucide-react';
import SEO from '../components/SEO';
import Notification from '../components/Notification';

const ResumePage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/src/assets/B.L.S. Thathsara - web developer old cv.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Savindu_Thaththsara_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const personalInfo = {
    name: "B.L.S. Thaththsara",
    role: "Frontend Developer",
    email: "blsthathsara@gmail.com",
    // phone: "0764067093",
    address: "Nugehena, Kondagala, Beliaththa road, Weeraketiya",
    social: {
      github: "BLSThathsara20",
      linkedin: "blsthathsara",
      medium: "blsthathsara",
      website: "blsthathsara.com"
    },
    profile: "I am a self-motivated and dedicated individual with a flexible approach to teamwork and a strong willingness to learn new technologies. I eagerly seek new challenges and thrive in dynamic environments."
  };

  const education = [
    {
      school: "Sri Lanka Institute Of Advanced Technical Education",
      degree: "HND in Information Technology",
      period: "Expected 2022 May",
      projects: [
        "Complain Management System for Sri Lanka police (Final group project)",
        "National PCR Data Analysis module (Final Individual project)"
      ],
      courses: [
        "Java SE Development",
        "Web Technologies (HTML, CSS, Javascript, NodeJS)"
      ]
    },
    {
      school: "IJSE | Institute of Software Engineering",
      degree: "Diploma in Software Engineering",
      period: "Expected 2022 August"
    },
    {
      school: "H/ Rajapaksha Central College - Weeraketiya",
      degree: "G.C.E. Advanced Level : Technology Stream",
      period: "2018",
      results: "Z-Score - 0.7148"
    }
  ];

  const workExperience = [
    {
      company: "HexaCode Solution (PVT) Ltd",
      role: "Front End Developer & Social Media Marketer",
      period: "April 2019 - Present",
      projects: [
        { name: "metrob2b.lk Website", url: "https://metrob2b.lk" },
        { name: "watchinglanka.com Website", url: "https://watchinglanka.com" },
        { name: "dizifxm.com Website", url: "https://dizifxm.com" },
        { name: "lagamakade.com Website", url: "https://lagamakade.com" }
      ],
      technologies: ["Wordpress", "Elementor", "Woocommerce", "HTML", "CSS", "Javascript", "PHP"]
    },
    {
      company: "Ministry of Health Sri Lanka",
      role: "Volunteer Software Developer",
      period: "2021",
      project: "National Covid-19 Health Information System",
      technologies: [
        "Java EE", "XHTML", "Bootstrap", "SCSS", "JSF", "JPA", "Primefaces", "AJAX", "MySQL"
      ]
    },
    {
      company: "Rightplace.lk",
      role: "Backend Manager & Social Media Marketer",
      project: "rightplace.lk Website"
    }
  ];

  const skills = {
    programming: {
      title: "Programming Languages",
      items: ["JavaScript", "PHP", "Java", "C#", "Visual Basic", "C++"]
    },
    webDev: {
      title: "Web Development",
      items: ["HTML", "CSS", "SCSS", "PHP", "Bootstrap", "Tailwind CSS", "Vue.js", "Electron.js", "WordPress"]
    },
    tools: {
      title: "Tools & Software",
      items: ["Figma", "Adobe Photoshop", "Git", "Visual Studio Code", "IntelliJ IDEA"]
    },
    database: {
      title: "Databases",
      items: ["MySQL", "SQL Server", "Firebase"]
    },
    personal: {
      title: "Personal Skills",
      items: ["Leadership", "Self Learning", "Team work", "Hardworking", "Quick Learner"]
    }
  };

  const projects = [
    {
      name: "National Covid-19 Health Information System",
      description: "Java EE web-based project by the Information Unit of the Ministry of Health to manage covid 19 situation in Sri Lanka",
      type: "Ministry Project"
    },
    {
      name: "Complain Management System for Sri Lanka Police",
      description: "Desktop application for managing the Complaints Division of the Sri Lanka Police - Galle branch",
      type: "Final Group Project"
    },
    {
      name: "Vehicle SparePart Ordering System",
      description: "An e-commerce web application designed to order vehicle spare parts",
      type: "Personal Vue.js Project (Ongoing)"
    },
    {
      name: "Tuition Class Web Application",
      description: "A project created for a tuition class to manage the students relevant to the courses",
      type: "Personal PHP Project"
    }
  ];

  const achievements = [
    "Participated in Nasa Space App Challenge 2020",
    "Achieved Global Connection Award in Nasa Space App Challenge 2021",
    "Participated in Home Alone hackathon by University of Moratuwa",
    "Participated in Designthon Challenge by SLIT",
    "Created an arduino project for an arduino competition",
    "Organized an arduino workshop",
    "Member of HNDIT Web development team",
    "Volunteer works at sumagaasapuwa.com"
  ];

  const interests = ["Photography", "Hiking", "Music", "Reading"];

  const referees = [
    {
      name: "Mr. Buddhi Prasan",
      title: "Senior Software Engineer",
      address: "No 360, Janaraja Mv, Matara",
      phone: "0712517775",
      email: "buddhiprasan12@gmail.com"
    },
    {
      name: "Mr. Thamara Waidyarathne",
      title: "Lecturer at SLIATE",
      address: "Galle",
      phone: "0713949501",
      email: "thamara@sliate.ac.lk"
    }
  ];

  return (
    <>
      <SEO
        title="Resume - Savindu Thaththsara"
        description={personalInfo.profile}
        keywords={['frontend developer', 'web developer', 'react developer', 'vue.js developer']}
        author={personalInfo.name}
      />

      <Notification
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        message="🎉 Resume downloaded! Thanks for your interest!"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen p-4 sm:p-8"
      >
        <div className="max-w-4xl mx-auto pt-20">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">{personalInfo.name}</h1>
              <p className="text-xl text-white/60">{personalInfo.role}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-2 px-6 py-3 bg-white/10
                       hover:bg-white/20 rounded-lg transition-colors w-full sm:w-auto
                       justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download CV
                </>
              )}
            </motion.button>
          </div>

          {/* Profile */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8"
          >
            <p className="text-lg text-white/80 leading-relaxed">{personalInfo.profile}</p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white/60" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white/80">
                  {personalInfo.email}
                </a>
              </div>
              {/* <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white/60" />
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div> */}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white/60" />
                <span className="text-sm">{personalInfo.address}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-white/60" />
                <a 
                  href={`https://${personalInfo.social.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white/80"
                >
                  {personalInfo.social.website}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-white/60" />
                <a 
                  href={`https://github.com/${personalInfo.social.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white/80"
                >
                  github.com/{personalInfo.social.github}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-white/60" />
                <a 
                  href={`https://linkedin.com/in/${personalInfo.social.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white/80"
                >
                  linkedin.com/in/{personalInfo.social.linkedin}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <p className="text-white/60">{exp.company}</p>
                    </div>
                    <span className="text-white/40 text-sm">{exp.period}</span>
                  </div>
                  {exp.projects && (
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Projects:</h4>
                      <ul className="space-y-2">
                        {Array.isArray(exp.projects) ? exp.projects.map((project, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span>{project.name}</span>
                            {project.url && (
                              <a 
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-white"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </li>
                        )) : (
                          <li>{exp.project}</li>
                        )}
                      </ul>
                    </div>
                  )}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <span className="text-white/40 text-sm">{edu.date}</span>
                  </div>
                  <p className="text-white/60 mb-4">{edu.school}</p>
                  {edu.details && (
                    <ul className="list-disc list-inside space-y-1 text-white/80">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Achievements</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 mt-1 flex-shrink-0 text-white/60" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default ResumePage;