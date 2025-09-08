"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import NavCards from "../ui/navCard"
import ServicesCard from '../ui/servicesCard'
import ProjectCard from "./projectCard";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); 
  const [openSubIndex, setOpenSubIndex] = useState({});
  
    const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const toggleSubAccordion = (mainIdx, subIdx) => {
    setOpenSubIndex((prev) => ({
      ...prev,
      [mainIdx]: prev[mainIdx] === subIdx ? null : subIdx,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const links = [
    {
      name: "Services",
      href: "#",
      icon: ChevronDown,
      card: <ServicesCard />,
      subHeadings: [
        {
          title: "Core Audit",
          description: "In-depth analysis of your digital systems and workflows.",
        },
        {
          title: "Design Audit",
          description: "Evaluate UX/UI designs and suggest improvements.",
        },
        {
          title: "Digital Product Design",
          description: "From wireframes to polished prototypes for your product.",
        },
        {
          title: "Web Development",
          description: "Modern, scalable websites tailored to your business needs.",
        },
        {
          title: "Mobile App Development",
          description: "Cross-platform mobile apps with high performance.",
        },
      ],
    },
    {
      name: "Products",
      href: "#",
      icon: ChevronDown,
      card: <NavCards />,
      subHeadings: [
        { title: "ERP Services", description: "Full ERP setup & customization." },
        { title: "Odoo", description: "Flexible Odoo-based ERP solutions." },
        { title: "SAP Business One", description: "Enterprise-ready SAP tools." },
        { title: "Microsoft Business Central", description: "Integrated Microsoft ERP." },
      ],
    },
    {
      name: "Projects",
      href: "#",
      icon: ChevronDown,
      card: <ProjectCard />,
      subHeadings: [
        { title: "DevOps", description: "CI/CD pipelines and automation." },
        { title: "Public & Private Cloud", description: "Cloud migration & optimization." },
        { title: "Bare-Metal Server Setup", description: "Custom hardware deployments." },
        { title: "NOC - SOC & Helpdesk", description: "24/7 monitoring and support." },
      ],
    },
    { name: "Blogs", href: "#", icon: null },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/60 shadow-md text-black hidden md:block"
      : "bg-transparent text-orange-500 md:text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile Menu Icon */}
           {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl text-orange-500  md:text-left absolute left-4 md:static">
            MyLogo
          </div>
          <div className="flex items-center md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} className="text-orange-500" /> : <Menu size={28} className="text-orange-500" />}
            </button>
          </div>

         

         {/* Center Menu (Desktop) */}
<div className="hidden md:flex space-x-10 relative">
  {links.map((item) => (
    <div key={item.name} className="group">
      {/* Trigger */}
      <button className="flex items-center gap-2 font-medium transition cursor-pointer">
        {item.name}
        {item.icon && (
          <item.icon className="w-5 h-5" />
        )}
      </button>

      {/* Dropdown */}
      {item.name !== "Blogs" && (
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-6 z-50
                     invisible opacity-0 group-hover:visible group-hover:opacity-100 
                     transition-all duration-200"
        >
          <div className="max-w-7xl mx-auto px-8 pt-8 overflow-hidden my-10 md:mt-0 
                          bg-white text-black rounded-4xl shadow-lg 
                          min-h-[250px] w-[80vw] h-[380px]">
            <div className="text-gray-700">
              {item.card}
            </div>
          </div>
        </div>
      )}
    </div>
  ))}
</div>

          {/* Right Side Button */}
          <div className="hidden md:flex">
            <button className="px-5 py-2 rounded-full bg-orange-500 text-white font-medium transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
          {/* Mobile Accordion Menu */}
      {isOpen && (
        <div className="md:hidden bg-white h-screen shadow-lg overflow-y-auto">
          <div className="w-full max-w-2xl mx-auto rounded-xl">
            {links.map((item, i) => (
              <div key={i}>
                {/* Main Accordion Header */}
                <button
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-xl font-bold text-gray-800 hover:bg-gray-100 transition"
                  onClick={() => toggleAccordion(i)}
                >
                  {item.name}
                  {openIndex === i ? (
                    <ChevronUp className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${item.name === "Blogs" ? "hidden" : "block"}`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${item.name === "Blogs" ? "hidden" : "block"}`} />
                  )}
                </button>

                {/* Main Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === i ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {item.subHeadings && (
                    <div className="flex flex-col">
                      {item.subHeadings.map((sub, idx) => (
                        <div key={idx} className="border-t">
                          {/* Subheading Accordion */}
                          <button
                            className="flex w-full items-center justify-between px-6 py-2 text-gray-700 hover:bg-gray-100 transition"
                            onClick={() => toggleSubAccordion(i, idx)}
                          >
                            {sub.title}
                            {openSubIndex[i] === idx ? (
                              <ChevronUp className="w-4 h-4 text-gray-600 transition-transform duration-300" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-600 transition-transform duration-300" />
                            )}
                          </button>

                          {/* Subheading Description */}
                          <div
                            className={`px-8 text-sm text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                              openSubIndex[i] === idx ? "max-h-40 py-2" : "max-h-0"
                            }`}
                          >
                            {sub.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <button className="mt-4 px-5 py-2 rounded-md bg-transparent md:bg-blue-600 text-black font-medium text-lg hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
