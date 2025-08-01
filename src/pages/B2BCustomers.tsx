import React, { useState } from 'react';
import { Building, Users, Truck, Award, CheckCircle, ArrowRight, FileText, Calculator } from 'lucide-react';

const B2BCustomers: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    annualVolume: '',
    products: [],
    message: ''
  });

  const businessTypes = [
    'Distributor',
    'Wholesaler',
    'OEM Manufacturer',
    'Electrical Contractor',
    'System Integrator',
    'Export House'
  ];

  const volumeRanges = [
    '< 10,000 units/year',
    '10,000 - 50,000 units/year',
    '50,000 - 100,000 units/year',
    '100,000 - 500,000 units/year',
    '> 500,000 units/year'
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Competitive Pricing',
      description: 'Volume-based pricing with attractive margins for partners'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Reliable Supply Chain',
      description: 'Consistent inventory levels and on-time delivery guarantee'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: 'Dedicated account managers and technical support team'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Territory Protection',
      description: 'Exclusive territory rights for authorized distributors'
    }
  ];

  const capabilities = [
    {
      title: 'Manufacturing Capacity',
      value: '1M+ units/month',
      description: 'Scalable production to meet large orders'
    },
    {
      title: 'Quality Assurance',
      value: '99.5%',
      description: 'Defect-free delivery rate'
    },
    {
      title: 'Delivery Network',
      value: 'Pan-India',
      description: 'Coverage across all major cities'
    },
    {
      title: 'Lead Time',
      value: '7-14 days',
      description: 'Standard delivery time for bulk orders'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductChange = (product: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Business Partnership Inquiry');
    const body = encodeURIComponent(`
Company Name: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Business Type: ${formData.businessType}
Expected Annual Volume: ${formData.annualVolume}
Products of Interest: ${formData.products.join(', ')}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:kalikaindustries26@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your partnership inquiry! Your default email client will open to send the message.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner with 
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Kalika Industries</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Join our network of successful distributors, wholesalers, and OEM partners. 
              Access premium products, competitive pricing, and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#partner-form"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 inline-flex items-center justify-center"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/kalika-brochure.pdf"
                download
                 className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200 inline-flex items-center justify-center"
                >
                 Download Brochure
                 <FileText className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Access exclusive benefits designed to help your business grow and succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Manufacturing Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Robust manufacturing infrastructure to support your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-3xl font-bold text-yellow-600 mb-2">{capability.value}</h3>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{capability.title}</h4>
                <p className="text-slate-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multiple partnership models to suit different business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Distributors</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Exclusive territory rights</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Marketing support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Volume-based incentives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Technical training</span>
                </li>
              </ul>
              <p className="text-slate-600">Minimum order: ₹5 Lakhs/month</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Wholesalers</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Bulk pricing tiers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Credit facilities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Direct factory supply</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Priority delivery</span>
                </li>
              </ul>
              <p className="text-slate-600">Minimum order: ₹2 Lakhs/month</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">OEM Partners</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Custom manufacturing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Private labeling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Design collaboration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Long-term contracts</span>
                </li>
              </ul>
              <p className="text-slate-600">Custom terms based on volume</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section id="partner-form" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Business Partnership Inquiry
            </h2>
            <p className="text-lg text-slate-600">
              Fill out the form below and our business development team will contact you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-slate-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Select Business Type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="annualVolume" className="block text-sm font-medium text-slate-700 mb-2">
                    Expected Annual Volume *
                  </label>
                  <select
                    id="annualVolume"
                    name="annualVolume"
                    required
                    value={formData.annualVolume}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Select Volume Range</option>
                    {volumeRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Products of Interest *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Modular Boxes', 'Saddle Clamps', 'General Clamps', 'Metal Flowers'].map((product) => (
                    <label key={product} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.products.includes(product)}
                        onChange={() => handleProductChange(product)}
                        className="rounded border-slate-300 text-yellow-600 focus:ring-yellow-500"
                      />
                      <span className="ml-2 text-sm text-slate-700">{product}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business requirements, territory of interest, or any specific questions..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 flex items-center justify-center"
                >
                  Submit Partnership Inquiry
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                {/* <button
                  type="button"
                  className="px-8 py-4 border-2 border-yellow-500 text-yellow-600 rounded-lg font-semibold text-lg hover:bg-yellow-50 transition-all duration-200 flex items-center justify-center"
                >
                  <Calculator className="mr-2 w-5 h-5" />
                  Get Price Calculator
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Partner Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from our successful partners about their experience working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-800">ElectroMax Distributors</h3>
                <p className="text-yellow-600">Mumbai - Distributor Partner</p>
              </div>
              <p className="text-slate-600 italic mb-4">
                "Partnership with Kalika Industries has transformed our business. Their quality products 
                and reliable support have helped us grow our revenue by 300% in just 2 years."
              </p>
              <div className="text-sm text-slate-500">
                Partner since 2020 • Annual volume: 500K+ units
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-800">TechBuild Solutions</h3>
                <p className="text-yellow-600">Delhi - OEM Partner</p>
              </div>
              <p className="text-slate-600 italic mb-4">
                "Kalika's custom manufacturing capabilities and quality consistency have made them 
                our preferred supplier. Their technical support is outstanding."
              </p>
              <div className="text-sm text-slate-500">
                Partner since 2018 • Annual volume: 1M+ units
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Industrial Components Co.</h3>
                <p className="text-yellow-600">Bangalore - Wholesaler</p>
              </div>
              <p className="text-slate-600 italic mb-4">
                "The credit facilities and competitive pricing from Kalika Industries have 
                significantly improved our cash flow and profit margins."
              </p>
              <div className="text-sm text-slate-500">
                Partner since 2019 • Annual volume: 250K+ units
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2BCustomers;