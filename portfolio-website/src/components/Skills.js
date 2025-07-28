import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', level: 95, icon: '🌐' },
    { name: 'Tailwind CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 85, icon: '⚡' },
    { name: 'React.js', level: 88, icon: '⚛️' },
    { name: '.NET Core', level: 75, icon: '🔧' },
    { name: 'SQL Server', level: 80, icon: '🗄️' },
  ];

  const tools = [
    { name: 'Git & GitHub', icon: '📝' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '🚀' },
    { name: 'Chrome DevTools', icon: '🔍' },
    { name: 'npm/yarn', icon: '📦' },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-primary-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200">
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="font-medium text-gray-900">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Categories */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Areas of Expertise
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend Development</h4>
                  <p className="text-gray-600 text-sm">
                    Building responsive and interactive user interfaces with modern frameworks
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Backend Development</h4>
                  <p className="text-gray-600 text-sm">
                    Creating robust APIs and server-side logic with .NET Core
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Database Management</h4>
                  <p className="text-gray-600 text-sm">
                    Designing and optimizing database structures with SQL Server
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">UI/UX Design</h4>
                  <p className="text-gray-600 text-sm">
                    Creating user-centered designs with modern design principles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-16">
          <div className="card p-8 text-center bg-gradient-to-r from-primary-500 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg mb-6 opacity-90">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                MongoDB
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                Docker
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;