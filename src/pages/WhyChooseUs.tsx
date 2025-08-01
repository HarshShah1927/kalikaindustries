import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, Award, Truck, Factory, Globe, CheckCircle } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Uncompromising Quality',
      description: 'ISO 9001:2015 certified manufacturing processes with rigorous quality control at every step',
      details: [
        'Multi-stage quality inspection',
        'Certified raw materials only',
        'Advanced testing equipment',
        '99.5% defect-free delivery rate'
      ]
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art production facilities with cutting-edge technology and precision machinery',
      details: [
        'CNC machining capabilities',
        'Automated production lines',
        'Real-time quality monitoring',
        '1M+ units monthly capacity'
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Fast Delivery',
      description: 'Efficient supply chain management ensuring quick turnaround times across India',
      details: [
        'Pan-India distribution network',
        '7-14 days standard delivery',
        'Express delivery options',
        'Real-time order tracking'
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Expert Support',
      description: 'Dedicated customer service and technical support team available for all your needs',
      details: [
        '24/7 customer support hotline',
        'Technical consultation services',
        'Installation guidance',
        'Post-sales support'
      ]
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Industry Experience',
      description: 'Over 20 years of manufacturing excellence with deep understanding of industry requirements',
      details: [
        '20+ years in manufacturing',
        '500+ satisfied customers',
        'Industry best practices',
        'Continuous innovation'
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Global Standards',
      description: 'Products meet international quality standards and compliance requirements',
      details: [
        'CE marking compliance',
        'RoHS compliant manufacturing',
        'International quality standards',
        'Export quality assurance'
      ]
    }
  ];

  const stats = [
    { number: '20+', label: 'Years of Excellence', description: 'Decades of manufacturing expertise' },
    { number: '1M+', label: 'Units Produced Monthly', description: 'Large-scale production capacity' },
    { number: '500+', label: 'Happy Customers', description: 'Businesses trust our products' },
    { number: '99.5%', label: 'Quality Rate', description: 'Consistent quality delivery' },
    { number: '24/7', label: 'Customer Support', description: 'Always available for you' },
    { number: '15+', label: 'Product Categories', description: 'Comprehensive product range' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Mehta',
      company: 'ElectroTech Industries',
      role: 'Procurement Manager',
      text: 'Kalika Industries has been our trusted partner for 5 years. Their consistent quality and reliability have helped us maintain our reputation in the market.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Sharma',
      company: 'BuildTech Solutions',
      role: 'Technical Director',
      text: 'The technical support from Kalika Industries is exceptional. They understand our requirements and always deliver products that exceed our expectations.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Amit Kumar',
      company: 'Industrial Components Ltd',
      role: 'CEO',
      text: 'Fast delivery, competitive pricing, and outstanding quality - Kalika Industries delivers on all fronts. They are truly a reliable manufacturing partner.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const certifications = [
    // 'ISO 9001:2015 Quality Management System',
    // 'ISO 14001:2015 Environmental Management',
    // 'BIS (Bureau of Indian Standards) Certification',
    // 'CE Marking for European Compliance',
    // 'RoHS Compliance Certificate',
    // 'OHSAS 18001 Occupational Health & Safety'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Kalika Industries?</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for thousands of businesses across India. 
            Our commitment to quality, innovation, and customer satisfaction sets us apart.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Track Record</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-slate-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Six Compelling Reasons to Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every aspect of our business is designed to deliver exceptional value to our customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 group">
                <div className="text-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{reason.title}</h3>
                <p className="text-slate-600 mb-6">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Quality Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A systematic approach to ensuring every product meets the highest standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Raw Material Inspection</h3>
              <p className="text-slate-600">Every batch of raw materials undergoes thorough quality checks before production</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">In-Process Monitoring</h3>
              <p className="text-slate-600">Real-time quality control during manufacturing with automated monitoring systems</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Final Product Testing</h3>
              <p className="text-slate-600">Comprehensive testing of finished products including stress, durability, and performance tests</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Packaging & Dispatch</h3>
              <p className="text-slate-600">Careful packaging and final inspection before dispatch to ensure damage-free delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real feedback from businesses who trust Kalika Industries for their manufacturing needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{testimonial.name}</h3>
                    <p className="text-yellow-600 font-medium">{testimonial.role}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Certifications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Recognized standards and certifications that validate our commitment to quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                <Award className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Innovation Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Continuous Innovation & Improvement
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                We invest heavily in research and development to stay ahead of industry trends 
                and continuously improve our products and processes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Advanced Technology</h3>
                    <p className="text-slate-600">Latest manufacturing technology and automation for precision and efficiency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Skilled Workforce</h3>
                    <p className="text-slate-600">Experienced engineers and technicians committed to excellence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Factory className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Modern Facilities</h3>
                    <p className="text-slate-600">State-of-the-art manufacturing facilities with clean room environments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">₹2Cr+</div>
                  <p className="text-slate-700 font-medium">Annual R&D Investment</p>
                </div> */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
                  <p className="text-slate-700 font-medium">New Products Launched</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
                  <p className="text-slate-700 font-medium">Process Improvements</p>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">10+</div>
                  <p className="text-slate-700 font-medium">Patents Filed</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Kalika Industries Difference
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made us their trusted manufacturing partner. 
            Discover quality, reliability, and service excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 inline-flex items-center justify-center"
            >
              Get Your Quote Today
            </Link>
            <a 
              href="mailto:kalikaindustries26@gmail.com?subject=Factory Visit Request"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200 inline-flex items-center justify-center"
            >
              Schedule Factory Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;