import React from 'react';
import { Target, Eye, Award, Users, Factory, Zap } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    // { year: '2004', event: 'Company Founded', description: 'Started manufacturing electrical components' },
    // { year: '2008', event: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification' },
    // { year: '2012', event: 'Expanded Product Range', description: 'Added decorative metal flowers to portfolio' },
    // { year: '2016', event: 'Pan-India Distribution', description: 'Established nationwide distribution network' },
    // { year: '2020', event: 'Technology Upgrade', description: 'Invested in advanced manufacturing equipment' },
    // { year: '2024', event: 'Export Excellence', description: 'Started exporting to 5+ countries' }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'BIS (Bureau of Indian Standards)',
    'CE Marking Compliance',
    'RoHS Compliant Manufacturing',
    'Environmental Management ISO 14001'
  ];

  const leadership = [
    {
      name: 'Mr. Rajesh Kalika',
      position: 'Managing Director',
      experience: '25+ years in manufacturing',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mrs. Priya Kalika',
      position: 'Operations Director',
      experience: '20+ years in operations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mr. Amit Sharma',
      position: 'Technical Director',
      experience: '18+ years in engineering',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kalika Industries</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Two decades of manufacturing excellence, innovation, and unwavering commitment to quality
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                To manufacture world-class industrial components that meet the highest standards of 
                quality, durability, and performance. We are committed to delivering innovative solutions 
                that enable our customers to achieve their goals while maintaining environmental 
                responsibility and ethical business practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">Our Vision</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be India's leading manufacturer of electrical and industrial components, 
                recognized globally for innovation, quality, and customer satisfaction. We envision 
                a future where Kalika Industries products are the first choice for professionals 
                across various industries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      {/* <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership - the Kalika Industries story
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full max-w-lg`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-800">{milestone.event}</h3>
                      </div>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 border-4 border-white rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced leaders driving innovation and excellence in manufacturing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">{leader.name}</h3>
                  <p className="text-yellow-600 font-medium mb-2">{leader.position}</p>
                  <p className="text-slate-600">{leader.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Quality Standards & Certifications
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We maintain the highest quality standards through rigorous testing, 
                certified processes, and continuous improvement initiatives.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="w-5 h-5 text-yellow-600 mr-3" />
                    <span className="text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Factory className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">50,000+</h3>
                <p className="text-slate-600">Units Manufactured Monthly</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">500+</h3>
                <p className="text-slate-600">Satisfied Customers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">99.5%</h3>
                <p className="text-slate-600">Quality Assurance Rate</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">20+</h3>
                <p className="text-slate-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Kalika Industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Quality First</h3>
              <p className="text-slate-600">
                Never compromising on quality, ensuring every product meets the highest standards
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Customer Focus</h3>
              <p className="text-slate-600">
                Putting customer needs at the center of everything we design and manufacture
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Innovation</h3>
              <p className="text-slate-600">
                Continuously improving and innovating to stay ahead in the industry
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;