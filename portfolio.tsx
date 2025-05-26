"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  GraduationCap,
  Calendar,
  Award,
  Download,
  Zap,
  Rocket,
  ArrowRight,
  Play,
  Coffee,
  BookOpen,
  Target,
  User,
  Home,
  FolderOpen,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState({})
  const [activeSection, setActiveSection] = useState("home")
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const words = ["Developer", "Designer", "Innovator", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const typeText = () => {
      const currentWord = words[currentWordIndex]
      if (typedText.length < currentWord.length) {
        setTypedText(currentWord.slice(0, typedText.length + 1))
      } else {
        setTimeout(() => {
          setTypedText("")
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 2000)
      }
    }

    const timer = setTimeout(typeText, 150)
    return () => clearTimeout(timer)
  }, [typedText, currentWordIndex, words])

  const skills = [
    { name: "JavaScript", level: 92, icon: "⚡", color: "from-yellow-400 to-orange-500" },
    { name: "Python", level: 88, icon: "🐍", color: "from-green-400 to-blue-500" },
    { name: "React.js", level: 90, icon: "⚛️", color: "from-blue-400 to-cyan-500" },
    { name: "Node.js", level: 85, icon: "🟢", color: "from-green-500 to-emerald-600" },
    { name: "TypeScript", level: 87, icon: "📘", color: "from-blue-500 to-indigo-600" },
    { name: "MongoDB", level: 82, icon: "🍃", color: "from-green-600 to-teal-500" },
    { name: "JAVA", level: 80, icon: "☕ ", color: "from-blue-600 to-purple-600" }
  ]

  const projects = [
    {
      title: "Recipe-Finder",
      description:
        "An application that helps users find recipes based on available ingredients, dietary preferences, and cooking time.",
      technologies: ["React", "Tailwind CSS", "Node.js", "JavaScript", "MongoDB"],
      github: "https://github.com/Manshi-Singh547075/Recipefinder",
      live: "https://recipefindertask.netlify.app/",
      image: "/recipe.png?height=200&width=300",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      featured: false,
    },
    {
      title: "Customer Support Chatbot",
      description:
        "A support chatbot designed to assist customers with common queries, provide support, and improve customer satisfaction.",
      technologies: ["React", "Node", "Typescript", "Next.js"],
      github: "https://github.com/Manshi-Singh547075/customer-support-chatbot--1-",
      live: "https://customersupportchatbot.netlify.app/",
      image: "/bot.png?height=300&width=400",
      gradient: "from-green-500 via-teal-500 to-blue-500",
      featured: false,
    },
    {
      title: "Sustainability Platform",
      description:
        "A platform promoting sustainable living by tracking carbon footprints, suggesting eco-friendly alternatives, and community engagement.",
      technologies: ["React", "Next.js", "PostgreSQL", "Vercel", "Express"],
      github: "https://github.com/Manshi-Singh547075/EcoTips",
      live: "https://sustainabilityecotips.netlify.app/",
      image: "/eco.png?height=300&width=400",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      featured: false,
    },
    {
      title: "Kanban Task Manager",
      description:
        "A web-based Kanban board application for task management, team collaboration, and productivity tracking.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Manshi-Singh547075/Kanban-Task-Board",
      live: "https://girlytaskboard.netlify.app/",
      image: "/task.png?height=300&width=400",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      featured: false,
    },
  ]

  const achievements = [
    { text: "Hackathons & Coding Competitions", icon: "⭐", color: "text-yellow-400" },
    { text: "GirlScript Summer of Code 2024 Contributor", icon: "🚀", color: "text-blue-400" },
    { text: "AICTE TechSaksham Internship on AI – by Microsoft & SAP", icon: "📚", color: "text-purple-400" },
    { text: "Open Source Contributor", icon: "💻", color: "text-orange-400" },
  ]

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: FolderOpen, label: "Projects" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "contact", icon: MessageCircle, label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`relative p-2 rounded-full transition-all duration-300 group ${
                  activeSection === item.id ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
                }`}
                
              >
                <item.icon className="w-5 h-5" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <Image
                src="/pic2.jpeg?height=200&width=200"
                alt="Profile Picture"
                width={200}
                height={200}
                className="relative rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-sm animate-float"
                
              />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient-x">
              Manshi
            </h1>

            <div className="text-2xl md:text-4xl text-white/80 mb-6 h-16 flex items-center justify-center">
              <span className="mr-3">I'm a</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold min-w-[200px] text-left">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </div>

            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate B.Tech CSE student crafting innovative digital experiences through code, design, and
              cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group"
                
                asChild
              >
                <Link
                  href="https://1drv.ms/b/c/650ddc10bd72dd4e/EUiyhzvlM-hMlmg-5ML4_T8BJaAvkk1NvMF58TDkqAAC1Q?e=Vbxmgb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-400 bg-purple-500/20 text-white hover:bg-purple-500/40 hover:border-purple-300 transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in-up">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Rocket className="mr-3 text-purple-400" />
                  My Journey
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  I'm a passionate B.Tech Computer Science Engineering student in my 3rd year (2022-2026), driven by an
                  insatiable curiosity for technology and innovation. My journey began with a simple "Hello World" and
                  has evolved into creating complex, impactful solutions.
                </p>
                <p className="text-white/80 leading-relaxed">
                  I specialize in full-stack development, AI/ML, and emerging technologies. My goal is to bridge the gap
                  between cutting-edge technology and real-world problems, creating solutions that matter.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, text: "Full-Stack Development", color: "from-blue-500 to-cyan-500" },
                  { icon: Database, text: "UI/UX Designer", color: "from-green-500 to-emerald-500" },
                  { icon: Smartphone, text: "Software Development", color: "from-purple-500 to-pink-500" },
                  { icon: Globe, text: "AI/ML Enthusiast", color: "from-orange-500 to-red-500" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-xl hover:scale-110 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-3 group-hover:animate-bounce`}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-3 text-yellow-400" />
                Achievements & Recognition
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                    
                  >
                    <div className="flex items-center">
                      <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </span>
                      <span className={`text-white/90 group-hover:${achievement.color} transition-colors duration-300`}>
                        {achievement.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 glass-card p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Coffee className="mr-2 text-orange-400" />
                  Fun Facts
                </h4>
                <ul className="space-y-2 text-white/80">
                  <li>☕ Powered by coffee and curiosity</li>
                  <li>🌙 Night owl developer (best code at 2 AM)</li>
                  <li>📚 Always learning something new</li>
                  <li>🛠️ Hackathons are my jam (code + chaos = fun)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-white/60 mt-4 text-lg">Technologies I've mastered and tools I wield</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-semibold text-white text-lg">{skill.name}</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center justify-center">
              <Zap className="mr-3 text-yellow-400 animate-bounce" />
              Tech Stack & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "Firebase",
                "Git",
                "TensorFlow",
                "Figma",
                "Tailwind CSS",
              ].map((tech, index) => (
                <Badge
                  key={tech}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                  
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-white/60 mt-4 text-lg">Showcasing innovation through code</p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden glass-card border-0 hover:scale-105 transition-all duration-500 group cursor-pointer"
                  
                >
                  <div className="aspect-video relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="relative">
                    <CardTitle className="flex items-center justify-between text-white group-hover:text-purple-300 transition-colors duration-300 text-xl">
                      {project.title}
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-purple-500/20 hover:scale-110 transition-all duration-300"
                          asChild
                        >
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5 text-white" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-purple-500/20 hover:scale-110 transition-all duration-300"
                          asChild
                        >
                          <Link href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5 text-white" />
                          </Link>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-white/70 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs bg-white/10 border-purple-400/30 text-purple-300 hover:bg-purple-400/20 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden glass-card border-0 hover:scale-105 transition-all duration-500 group cursor-pointer"
                  
                >
                  <div className="aspect-video relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white text-lg">
                      {project.title}
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="hover:bg-purple-500/20">
                          <Github className="h-4 w-4 text-white" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-purple-500/20">
                          <ExternalLink className="h-4 w-4 text-white" />
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-white/70 text-sm">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs bg-white/10 border-purple-400/30 text-purple-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs bg-white/10 border-purple-400/30 text-purple-300">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-400/50 text-white hover:bg-purple-400/10 transform hover:scale-105 transition-all duration-300 group"
              
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Education Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            <Card className="glass-card border-0 hover:scale-105 transition-all duration-500 ml-16 relative">
              <div className="absolute -left-20 top-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>

              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">
                      Bachelor of Technology - Computer Science Engineering
                    </CardTitle>
                    <CardDescription className="text-purple-300 text-lg font-medium">
                      Guru Gobind Singh Indraprastha University
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center glass-card p-4 rounded-lg">
                      <Calendar className="h-5 w-5 text-purple-400 mr-3" />
                      <span className="text-white/90 font-medium">2022 - 2026</span>
                    </div>
                    <div className="flex items-center glass-card p-4 rounded-lg">
                      <Award className="h-5 w-5 text-yellow-400 mr-3" />
                      <span className="text-white/90 font-medium">Current CGPA: 8.7/10</span>
                    </div>
                    <div className="flex items-center glass-card p-4 rounded-lg">
                      <Target className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-white/90 font-medium">Specialization: WEB Development</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-white flex items-center text-lg">
                      <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                      Core Coursework
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Machine Learning & AI",
                        "Database Management Systems",
                        "Computer Networks",
                        "Operating Systems",
                        "Software Engineering",
                        "Distributed Systems",
                        "Object Oriented Programming",
                      ].map((course, index) => (
                        <div
                          key={index}
                          className="flex items-center text-white/80 hover:text-purple-300 transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                        >
                          <div
                            className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse"
                            style={{ animationDelay: `${index * 200}ms` }}
                          ></div>
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-white/60 mt-4 text-lg">Ready to collaborate on something amazing?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "manshi547075@gmail.com",
                gradient: "from-blue-500 to-cyan-500",
                action: "mailto:manshi547075@gmail.com",
              },
              {
                icon: Phone,
                title: "Phone",
                info: "+91 88823 02389",
                gradient: "from-green-500 to-emerald-500",
                action: "tel:+918882302389",
              },
              {
                icon: MapPin,
                title: "Location",
                info: "Delhi, India",
                gradient: "from-purple-500 to-pink-500",
                action: "#",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="glass-card border-0 p-8 text-center hover:scale-110 transition-all duration-500 group cursor-pointer"
                
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce`}
                >
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-white text-xl mb-3">{contact.title}</h3>
                <p className="text-white/70 group-hover:text-purple-300 transition-colors duration-300 text-lg">
                  {contact.info}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-8">
            <div className="flex justify-center gap-6">
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/Manshi-Singh547075",
                  color: "hover:text-gray-400",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/manshi-singh-a94282257/",
                  color: "hover:text-blue-400",
                },
                { icon: Mail, label: "Email", href: "mailto:manshi547075@gmail.com", color: "hover:text-red-400" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-400/50 text-blue hover:bg-pink-400/20 transform hover:scale-110 transition-all duration-300 group w-16 h-16 rounded-full p-0"
                  
                  asChild
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className={`h-6 w-6 ${social.color} transition-colors duration-300`} />
                  </Link>
                </Button>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group px-8 py-4 text-lg"
              
              asChild
            >
              <Link href="mailto:manshi547075@gmail.com">
                <Mail className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Start a Conversation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 relative">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Manshi
            </h3>
            <p className="text-white/60">Crafting the future, one line of code at a time.</p>
          </div>
          <p className="text-white/40">
            © 2024 Manshi. Designed & Built with <span className="text-red-400 animate-pulse">❤️</span> using Next.js &
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
