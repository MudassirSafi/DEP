import React from 'react';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="space-y-6">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Profile Summary</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I am a highly motivated software engineer with a solid foundation in computer science principles 
                and programming languages. Proficient in HTML, CSS, JavaScript, and ReactJS, I possess hands-on 
                experience through numerous academic and personal projects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am eager to apply my skills in an internship while contributing to innovative software solutions. 
                My passion lies in creating user-friendly, efficient, and scalable web applications that solve 
                real-world problems.
              </p>
            </div>

            {/* Contact Info */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">03209820283</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">muhammedmudassir40@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Ghocia Chowk, Rawalpindi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Languages */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">My Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">English</span>
                    <span className="text-gray-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">Urdu</span>
                    <span className="text-gray-600">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Project Management', 'Public Relations', 'Teamwork', 'Problem Solving', 'Communication', 'Leadership'].map((skill, index) => (
                  <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;