import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Junior Web Developer',
      period: '2024 - 2025',
      type: 'Current Position',
      description: 'Building responsive and dynamic user interfaces using React.js, enhancing performance and user experience.',
      responsibilities: [
        'Built responsive and dynamic user interfaces using React.js, enhancing performance and user experience',
        'Developed and styled reusable UI components with Tailwind CSS and HTML5, ensuring mobile-first and accessible designs',
        'Integrated React Router for seamless navigation and implemented component-based architecture',
        'Collaborated on projects involving API integration, state management (using hooks), and basic animations'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'HTML5', 'JavaScript', 'React Router'],
      icon: '💼'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
              
              {/* Experience Card */}
              <div className="relative mb-12">
                <div className="md:flex md:items-center">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                    {exp.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pr-8">
                    <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                            {exp.type}
                          </span>
                          <span className="text-sm text-gray-500 font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 text-sm leading-relaxed">
                                {responsibility}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Goals */}
        <div className="mt-16">
          <div className="card p-8 bg-gradient-to-r from-primary-500 to-purple-600 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Career Goals</h3>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto leading-relaxed">
              I'm actively seeking opportunities to grow as a software engineer, contribute to innovative projects, 
              and work with talented teams to build solutions that make a real impact. My goal is to continue 
              learning cutting-edge technologies while delivering high-quality software solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-sm font-medium">Full-Stack Development</div>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl mb-1">🚀</div>
                <div className="text-sm font-medium">Team Leadership</div>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl mb-1">💡</div>
                <div className="text-sm font-medium">Innovation</div>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl mb-1">🌟</div>
                <div className="text-sm font-medium">Continuous Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;