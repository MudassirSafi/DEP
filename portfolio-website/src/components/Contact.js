import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service or email API here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'muhammedmudassir40@gmail.com',
      link: 'mailto:muhammedmudassir40@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '03209820283',
      link: 'tel:03209820283'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Ghocia Chowk, Rawalpindi',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com',
      color: 'hover:text-pink-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200 group"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-primary-600">
                        {info.title}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Availability</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Available for new projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Open to internship opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Interested in collaborations</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <div className="text-primary-800 font-medium mb-2">
                  Response Time
                </div>
                <div className="text-primary-700 text-sm">
                  I typically respond to messages within 24 hours. For urgent matters, please call directly.
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200 ${social.color}`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <div className="card p-8 text-center bg-gradient-to-r from-primary-500 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together!</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
              I'd love to hear from you. Let's turn your ideas into reality!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:muhammedmudassir40@gmail.com"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Email Me Directly
              </a>
              <a 
                href="tel:03209820283"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
              >
                Call Me Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;