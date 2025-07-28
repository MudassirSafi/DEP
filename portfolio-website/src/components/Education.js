import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'ARID Agriculture University',
      period: '2021 - 2025',
      status: 'Current',
      description: 'Comprehensive program covering software development, computer science fundamentals, and modern programming practices.',
      subjects: [
        'Data Structures & Algorithms',
        'Software Engineering Principles',
        'Database Management Systems',
        'Web Development',
        'Object-Oriented Programming',
        'Software Project Management'
      ],
      icon: '🎓',
      gpa: 'CGPA: 3.5/4.0'
    },
    {
      degree: 'Intermediate of Computer Science',
      institution: 'HIST College',
      period: '2019 - 2021',
      status: 'Completed',
      description: 'Foundation in computer science with focus on programming fundamentals and mathematical concepts.',
      subjects: [
        'Computer Programming',
        'Mathematics',
        'Physics',
        'English',
        'Computer Science Theory',
        'Statistics'
      ],
      icon: '📚',
      gpa: 'Grade: A'
    }
  ];

  const certifications = [
    {
      title: 'React.js Development',
      issuer: 'Online Course',
      year: '2024',
      description: 'Advanced React.js concepts including hooks, context API, and modern development practices.',
      icon: '⚛️'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Self-Learning',
      year: '2024',
      description: 'Comprehensive understanding of both frontend and backend development technologies.',
      icon: '💻'
    },
    {
      title: 'Database Design & Management',
      issuer: 'Academic Project',
      year: '2023',
      description: 'Advanced database concepts, SQL optimization, and database architecture design.',
      icon: '🗄️'
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey and continuous learning path in software engineering
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Formal Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="card p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Icon and Status */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-4xl">{edu.icon}</div>
                      <div>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          edu.status === 'Current' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {edu.status}
                        </span>
                        <div className="text-sm text-gray-500 mt-1">{edu.period}</div>
                      </div>
                    </div>
                    <div className="text-primary-600 font-semibold">{edu.gpa}</div>
                  </div>

                  {/* Education Details */}
                  <div className="lg:col-span-2">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <h5 className="text-lg font-semibold text-primary-600 mb-4">
                      {edu.institution}
                    </h5>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    {/* Key Subjects */}
                    <div>
                      <h6 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Subjects:
                      </h6>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {edu.subjects.map((subject, idx) => (
                          <div key={idx} className="bg-primary-50 text-primary-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Additional Learning */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certifications & Additional Learning
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.title}
                </h4>
                <div className="text-primary-600 font-semibold mb-2">
                  {cert.issuer}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  {cert.year}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mb-16">
          <div className="card p-8 bg-gradient-to-r from-primary-500 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Academic Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3.5/4.0</div>
                <div className="text-sm opacity-90">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Courses Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-90">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2024</div>
                <div className="text-sm opacity-90">Expected Graduation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Developed */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Skills Developed Through Education
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">🧠</div>
              <h4 className="font-bold text-gray-900 mb-2">Problem Solving</h4>
              <p className="text-gray-600 text-sm">
                Analytical thinking and systematic approach to complex problems
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">👥</div>
              <h4 className="font-bold text-gray-900 mb-2">Team Collaboration</h4>
              <p className="text-gray-600 text-sm">
                Working effectively in teams on group projects and assignments
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">🔬</div>
              <h4 className="font-bold text-gray-900 mb-2">Research & Analysis</h4>
              <p className="text-gray-600 text-sm">
                Independent research and critical analysis of technical concepts
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="font-bold text-gray-900 mb-2">Project Management</h4>
              <p className="text-gray-600 text-sm">
                Planning, executing, and delivering projects within deadlines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;