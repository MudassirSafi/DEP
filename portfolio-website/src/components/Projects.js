import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'MealTimes - Employee Cuisine System',
      category: 'Final Year Project',
      description: 'A comprehensive full-stack corporate meal ordering system designed to streamline food ordering processes for employees, chefs, and administrators.',
      longDescription: 'Built a complete corporate meal ordering ecosystem using modern web technologies. The system features role-based dashboards, real-time order tracking, and secure authentication. Implemented using the Incremental Development Model to ensure modular and scalable architecture.',
      features: [
        'Role-based dashboards for employees, chefs, and admins',
        'Secure authentication and authorization system',
        'Real-time meal tracking and order history',
        'Customizable menu selection interface',
        'Responsive, mobile-friendly design',
        'Admin panel for menu and user management'
      ],
      technologies: ['React.js', '.NET Core', 'SQL Server', 'Tailwind CSS', 'JWT Authentication'],
      image: '🍽️',
      status: 'Completed',
      year: '2024',
      github: '#',
      demo: '#'
    },
    {
      title: 'Cartoonish Animated Website',
      category: 'Self Project',
      description: 'A fun and interactive website featuring smooth animations and playful design elements to create an engaging user experience.',
      longDescription: 'Developed a creative website with cartoon-style animations and interactive elements. Focused on creating smooth transitions, hover effects, and engaging micro-interactions using modern CSS and JavaScript techniques.',
      features: [
        'Smooth CSS animations and transitions',
        'Interactive hover effects and micro-interactions',
        'Responsive cartoon-style design',
        'Optimized performance and loading times',
        'Cross-browser compatibility',
        'Mobile-first responsive design'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive Design'],
      image: '🎨',
      status: 'Completed',
      year: '2024',
      github: '#',
      demo: '#'
    },
    {
      title: 'E-Commerce Website',
      category: 'Self Project',
      description: 'A modern e-commerce platform with shopping cart functionality, product catalog, and user authentication features.',
      longDescription: 'Created a full-featured e-commerce website with modern design principles. Includes product browsing, shopping cart management, user authentication, and responsive design for optimal user experience across all devices.',
      features: [
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'User authentication and profiles',
        'Responsive design for all devices',
        'Product image galleries',
        'Order history and tracking'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      image: '🛒',
      status: 'In Progress',
      year: '2024',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`card p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeProject === index ? 'ring-2 ring-primary-600' : ''
              }`}
              onClick={() => setActiveProject(index)}
            >
              {/* Project Image/Icon */}
              <div className="text-6xl text-center mb-4">
                {project.image}
              </div>

              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <a 
                  href={project.github}
                  className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
                <a 
                  href={project.demo}
                  className="flex-1 text-center btn-primary py-2 px-4 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="mt-16">
          <div className="card p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Project Info */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {projects[activeProject].title}
                  </h3>
                  <span className="text-gray-500 font-medium">
                    {projects[activeProject].year}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {projects[activeProject].longDescription}
                </p>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, idx) => (
                      <span key={idx} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={projects[activeProject].github}
                    className="btn-secondary"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  <a 
                    href={projects[activeProject].demo}
                    className="btn-primary"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Features */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features:
                </h4>
                <ul className="space-y-3">
                  {projects[activeProject].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-gradient-to-r from-primary-500 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-lg mb-6 opacity-90">
              I'm always excited to work on new projects and collaborate with talented teams.
            </p>
            <a href="#contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;