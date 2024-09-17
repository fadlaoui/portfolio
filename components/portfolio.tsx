

'use client'

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { Mail, Github, Linkedin, Twitter, Globe } from 'lucide-react'
import Image from 'next/image'

export function PortfolioComponent() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
            <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed bottom-4 right-4 p-5 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        ) }
      </button>
      <header className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mohamed FADLAOUI</h1>
          <p className="text-gray-600 mb-2 max-w-md font-mono text-sm">
          Passionate Full Stack Engineer dedicated to delivering high-quality products with meticulous attention to detail.
          </p>
          <a 
            href="https://www.google.com/maps/place/Casablanca,+Morocco/" 
            rel="noopener noreferrer" 
            target="_blank" 
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline text-gray-500"
          >
            <Globe className="h-4 w-4" />
            Casablanca, Morocco 🇲🇦
          </a>
          <div className="flex space-x-2 mt-4">
            <a href="mailto:mohameedfadlaoui@gmail.com" className="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              <Mail className="w-5 h-5 text-gray-600" />
            </a>
            <a href="https://github.com/fadlaoui" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              <Github className="w-5 h-5 text-gray-600" />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-fadlaoui/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              <Linkedin className="w-5 h-5 text-gray-600" />
            </a>
            <a href="https://twitter.com/fadlaouime" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              <Twitter className="w-5 h-5 text-gray-600" />
            </a>
          </div>
        </div>
        <Image
          src="/images/mohamed-fadlaoui.jpg"
          alt="Mohamed FADLAOUI"
          width={100}
          height={100}
          className="rounded-full"
        />
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-600 font-mono text-sm">
        As a Senior Software Engineer, I have been instrumental in driving the successful delivery of complex products from concept to production, ensuring both technical excellence and alignment with business goals. I specialize in guiding and mentoring development teams, creating a collaborative and high-performing environment that fosters innovation and efficiency. My current expertise lies in modern technologies such as Java, Spring Boot, Kafka, React, Angular, Next.js and AWS technologies, where I focus on building scalable, robust solutions. With over eight years of experience working remotely, I have had the privilege of collaborating with diverse global teams, adapting to varied project requirements and cultural dynamics, while consistently delivering high-quality results.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-xl font-semibold">HPS Worldwide - Hightech Payment Systems <span className="bg-gray-200 text-black rounded-full px-3 py-1 text-xs font-semibold mr-2">
                Remote
              </span></h3>
              <span className="bg-gray-200 text-black px-3 py-1 text-xs font-semibold mr-2 inline-block">
                POWERCARD V4
              </span>
              <p className="text-black-600">Senior Software Engineer – Full Stack</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500">2021 - Present</span>
            </div>
          </div>
          <p className="text-gray-600 mt-2 font-mono text-xs">
          As a Senior Software Engineer, I develop end-to-end solutions for card issuers using PowerCARD-Issuer, focusing on managing credit, debit, commercial, prepaid cards, and loan products throughout their lifecycle. My work involves creating systems that handle various loan types—such as personal, auto, and business loans—and payment instruments, including physical cards, virtual cards, mobile payments, and digital wallets.
<br/>
I design and implement features that manage key processes like transactions management, authorizations, settlements, and cutoff batch operations, essential for accurate billing, loan management, and compliance with industry standards. Additionally, I develop loyalty program solutions integrated with card and loan products, enhancing customer engagement and retention.
<br/>

By building secure Open APIs, I ensure issuers can meet the demands of third-party providers while adhering to regulatory requirements. My solutions empower issuers to define and customize their products, streamline operational costs, and offer innovative, competitive services in a rapidly evolving payments industry.
          </p>
          <div className="mt-2 space-x-1">
            {["Microservices", "Spring Boot", "Spring Cloud", "Kafka", "ELK Stack", "AWS technologies", "Docker", "Kubernetes"].map((tech) => (
              <div key={tech} className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 text-[11px] py-0 px-1">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">HPS Worldwide - Hightech Payment Systems <span className="bg-gray-200 text-black rounded-full px-3 py-1 text-xs font-semibold mr-2">
                Remote
              </span></h3>
            <span className="text-gray-500">2019 - 2021</span>
          </div>
          <span className="bg-gray-200 text-black px-3 py-1 text-xs font-semibold mr-2 inline-block">
                POWERCARD V3.5
              </span>
          <p className="text-black-600 mb-2">Software Engineer – Full Stack</p>
         
          <p className="text-gray-600 mt-2 font-mono text-xs">
          As a pivotal member of a 20-person team within a medium-sized project, my role includes designing and developing new features, resolving bugs, and providing technical support, training, and supervision. I also drive initiatives to propose and implement new methodologies, actions, and best practices to enhance the final product's quality. A key accomplishment is the development of a sophisticated Boarding Management function that streamlines the onboarding process for new and existing customers across various financial contract elements
          <br/>
          Additionally, I developed the corporate module for managing corporate payment instruments.
          </p>
          <div className="mt-2 space-x-1">
            {["Angular", "Spring Boot", "Spring Cloud", "Kafka", "ELK Stack", "AWS technologies" , "PLSQL"].map((tech) => (
              <div key={tech} className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 text-[11px] py-0 px-1">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-xl font-semibold">Deeplinq <span className="bg-gray-200 text-black rounded-full px-3 py-1 text-xs font-semibold mr-2">
                Remote
              </span></h3>
              <p className="text-black-600">Software Engineer – Full Stack</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500">2018 - 2019</span>
            </div>
          </div>
          <p className="text-gray-600 mt-2 font-mono text-xs">
          As a software engineer working on Deeplinq, I've focused on integrating and enhancing several key features that elevate the platform's capabilities. Our natural language processing system enables Deeplinq to interpret and respond to user queries with direct answers rather than mere links, delivering relevant results like rich snippets and FAQs. The Query Recommendations feature dynamically refines search suggestions with each keystroke, guiding users towards more precise searches. I've also contributed to the development of our automated document classification, which streamlines document discovery, reduces duplication, and supports repurposing for future use. The Smart Search Filters provide users with customizable options to narrow search results based on various criteria, including language, file types, and access permissions, while our AI-powered image recognition analyzes pixel metadata to improve image search accuracy. Additionally, I've worked on the insights generation feature, which tailors reports and information to user-specific needs, and the data integration functionality that consolidates content from diverse organizational sources into a cohesive data ecosystem.
<br/>
          </p>
          <div className="mt-2 space-x-1">
            {["Microservices", "Spring boot", "spaCy", "TensorFlow", "Elasticsearch", "Algolia", "Apache Tika", "Scikit-learn", "SQL databases", "NoSQL databases", "OpenCV", "Google Cloud Vision", "Power BI", "Tableau", "Apache Nifi", "Talend"].map((tech) => (
              <div key={tech} className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 text-[11px] py-0 px-1">
                {tech}
              </div>
            ))}
          </div>
        </div>
          <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">Brams<span className="bg-gray-200 text-black rounded-full px-3 py-1 text-xs font-semibold mr-2">
                Hybrid
              </span></h3>
            <span className="text-gray-500">2017 - 2018</span>
          </div>
          <p className="text-black-600 mb-2">Software Engineer – Full Stack</p>
          <div className="text-gray-600 mt-2 font-mono text-xs">
            <div className="mt-2">
              <span className="bg-gray-200 text-black px-3 py-1 text-xs font-semibold mr-2 inline-block">
                Vroom
              </span>
              <p className="mt-1 ml-4">
              A collaborative platform that enables individuals to lend and borrow vehicles using a virtual points system, eliminating the need for monetary transactions at the point of exchange. Suppliers earn virtual points by lending their vehicles, which can later be converted into real money. Borrowers use these points to access vehicles, with the entire process covered by integrated insurance partnerships. The platform includes user profiles, a booking system, and security features to ensure smooth transactions and trustworthiness. Revenue is generated through service fees and optional premium features, with future enhancements including global expansion
              </p>
              <div className=" ml-4 mt-2 space-x-1">
            {["Java 8", "Spring Boot/Security", "JWT", "Firebase", "ELK", "GAE","Angular"].map((tech) => (
              <div key={tech} className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 text-[11px] py-0 px-1 m-0.5">
                {tech}
              </div>
            ))}
          </div>
            </div>
            <div className="mt-2">
              <span className="bg-gray-200 text-black  px-3 py-1 text-xs font-semibold mr-2 inline-block">
                Brams Checkout
              </span>
              <p className="mt-1 ml-4">
              Integrating real-time exchange rates into the Brams Checkout Gateway to handle accurate currency conversion and developed functionality for managing transactions and settlements in various currencies. I've ensured compliance with international regulations and implemented dynamic pricing and localized interfaces to enhance user experience. The system features robust APIs and has undergone extensive testing to ensure accuracy.
              </p>
              <div className=" ml-4 mt-2 space-x-1">
            {["Spring boot", "CMI", "Javascript", "Java"].map((tech) => (
              <div key={tech} className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 text-[11px] py-0 px-1 m-0.5">
                {tech}
              </div>
            ))}
          </div>
            </div>
            <div className="mt-2">
              <span className="bg-gray-200 text-black  px-3 py-1 text-xs font-semibold mr-2 inline-block">
                GCP Projects Monitoring
              </span>
              <p className="mt-1 ml-4">
              As a software engineer, I developed a solution to monitor GCP project consumption by integrating BigQuery for data aggregation and Google Data Studio for interactive dashboards. I created a Node.js Cloud Function to track and trigger alerts based on quota usage, using Google Cloud Pub/Sub for managing notifications and Cloud Firestore for storing alert details. Additionally, I set up SendGrid to send automated email notifications to management when projects exceed their quotas, ensuring effective real-time monitoring and alerting.              
              </p>
                            <div className=" ml-4 mt-2 space-x-1">
            {["Node.js", "BigQuery", "Google Cloud Functions", "Google Cloud Pub/Sub", "Cloud Firestore", "SendGrid"].map((tech) => (
              <div key={tech} className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 text-[11px] py-0 px-1 m-0.5">
                {tech}
              </div>
            ))}
            </div>
            
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">ENSET Mohammedia</h3>
          <span className="text-gray-500">2014 - 2017</span>
        </div>
        <p className="text-gray-600 font-mono text-xs">Engineer's degree, Software Engineering</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="space-x-1">
          {["Java", "Spring boot", "React/Next.js", "Node.js", "GraphQL", "Kafka", "Elasticsearch", "PostgreSQL", "Kubernetes", "Docker", "GCP", "AWS", "BigQuery", "Google Cloud Functions", "Google Cloud Pub/Sub", "Cloud Firestore"].map((skill) => (
            <div key={skill} className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 text-[14px] py-0 px-1">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects (SaaS)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <a href="https://call-sync.framer.website/"> Syncall.io </a>
            </h3>
            <p className="text-gray-600 mb-4 text-xs font-mono text-pretty">
              An AI powered platform that effortlessly manage order confirmations, cold calling, appointment bookings,  rescheduling, and customer communications—integrated seamlessly with your CRM.
            </p>
            <div className="space-x-1">
              {["Side Project","TypeScript", "Next.js", "tRPC", "LLM"].map((tech) => (
                <div key={tech} className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-[#e5e7eb] text-black hover:bg-[#f3f4f6] text-[11px] py-0 px-1">
                  {tech}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
    
  )
}