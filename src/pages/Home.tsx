import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, Users, CheckCircle, Star } from 'lucide-react';

const Home: React.FC = () => {
  const products = [
    {
      name: 'Electrical Modular Boxes',
      description: 'High-quality modular electrical boxes for industrial and residential use',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Weather Resistant', 'Multiple Sizes', 'Easy Installation']
    },
    {
      name: 'Saddle Clamps',
      description: 'Durable saddle clamps for secure pipe and conduit mounting',
      image: '/pic/saddleclamp.png',
      features: ['Corrosion Resistant', 'Heavy Duty', 'Precision Fit']
    },
    {
      name: 'General Clamps',
      description: 'Versatile clamping solutions for various industrial applications',
      image: '/pic/hoseclamp.png',
      features: ['Multi-Purpose', 'Strong Grip', 'Long Lasting']
    },
    {
      name: 'Metal Flowers',
      description: 'Decorative metal flowers for architectural and design applications',
      image: '/pic/metal flower.png',
      features: ['Handcrafted', 'Custom Designs', 'Premium Finish']
    }
  ];

  const usps = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'ISO certified manufacturing processes ensuring consistent quality'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Pan-India delivery network with quick turnaround times'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Experience',
      description: '20+ years of manufacturing excellence and innovation'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Focus',
      description: 'Dedicated support team for all your industrial needs'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'ElectroTech Solutions',
      text: 'Outstanding quality products with excellent customer service. Their modular boxes have exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Industrial Components Ltd',
      text: 'Reliable supplier with consistent quality. The saddle clamps are perfectly engineered for our requirements.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      company: 'Construction Dynamics',
      text: 'Fast delivery and competitive pricing. Kalika Industries has become our go-to supplier for all clamp requirements.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Manufacturing
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Excellence </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
              Leading manufacturer of electrical modular boxes, saddle clamps, general clamps, 
              and decorative metal flowers. Quality products engineered for durability and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200 inline-flex items-center justify-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Kalika Industries?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine decades of manufacturing expertise with modern technology 
              to deliver products that exceed industry standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{usp.title}</h3>
                <p className="text-slate-600">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive range of industrial components designed for reliability and performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trusted by businesses across India for quality and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
            Get in touch for bulk orders, custom requirements, or to become a distributor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Request Quote
            </Link>
            <Link
              to="/b2b-customers"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              B2B Partnership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;