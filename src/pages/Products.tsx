import React, { useState } from 'react';
import { Search, CheckCircle } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'modular-boxes', name: 'Modular Boxes' },
    { id: 'saddle-clamps', name: 'Saddle Clamps' },
    { id: 'general-clamps', name: 'General Clamps' },
    { id: 'metal-flowers', name: 'Metal Flowers' }
  ];

  const products = [
    // Modular Boxes
    {
      id: 1,
      name: 'Surface Mount Box - Single Gang',
      category: 'modular-boxes',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400',
      specifications: {
        material: 'High-grade PVC',
        dimensions: '86mm x 86mm x 35mm',
        rating: 'IP54',
        voltage: '250V',
        current: '16A'
      },
      features: ['Weather Resistant', 'Easy Installation', 'Multiple Mounting Options', 'Flame Retardant'],
      useCases: ['Residential Wiring', 'Commercial Buildings', 'Industrial Applications'],
      price: '₹45'
    },
    {
      id: 2,
      name: 'Junction Box - 4x4 inch',
      category: 'modular-boxes',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400',
      specifications: {
        material: 'Galvanized Steel',
        dimensions: '100mm x 100mm x 50mm',
        rating: 'IP65',
        voltage: '440V',
        current: '25A'
      },
      features: ['Corrosion Resistant', 'Deep Design', 'Knockouts Pre-cut', 'Powder Coated'],
      useCases: ['Panel Connections', 'Junction Points', 'Cable Management'],
      price: '₹85'
    },
    // Saddle Clamps
    {
      id: 3,
      name: 'PVC Pipe Hose Clamp - 25mm',
      category: 'saddle-clamps',
      image: '/pic/hoseclamp.png',
      specifications: {
        material: 'High-grade PP',
        pipeSize: '25mm',
        mountingHole: '6mm',
        color: 'White/Black',
        temperature: '-20°C to +80°C'
      },
      features: ['UV Resistant', 'Chemical Resistant', 'Easy Installation', 'Secure Grip'],
      useCases: ['Conduit Mounting', 'Cable Routing', 'Pipe Support'],
      price: '₹12'
    },
    {
      id: 4,
      name: 'Metal Saddle Clamp - 32mm',
      category: 'saddle-clamps',
      image: '/pic/saddleclamp.png',
      specifications: {
        material: 'Galvanized Steel',
        pipeSize: '32mm',
        mountingHole: '8mm',
        finish: 'Zinc Plated',
        loadCapacity: '70kg'
      },
      features: ['Heavy Duty', 'Corrosion Resistant', 'Precision Fit', 'Long Lasting'],
      useCases: ['Industrial Piping', 'HVAC Systems', 'Structural Support'],
      price: '₹25'
    },
    // General Clamps
    // {
    //   id: 5,
    //   name: 'Cable Tie Clamp - 20mm',
    //   category: 'general-clamps',
    //   image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   specifications: {
    //     material: 'Nylon 66',
    //     bundleDiameter: '20mm max',
    //     mountingHole: '5mm',
    //     tensileStrength: '50lbs',
    //     temperature: '-40°C to +85°C'
    //   },
    //   features: ['Self-Locking', 'Vibration Resistant', 'Multiple Colors', 'Easy Installation'],
    //   useCases: ['Cable Management', 'Wire Bundling', 'Automotive Applications'],
    //   price: '₹8'
    // },
    // {
    //   id: 6,
    //   name: 'Beam Clamp - Adjustable',
    //   category: 'general-clamps',
    //   image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   specifications: {
    //     material: 'Mild Steel',
    //     beamSize: '50-200mm',
    //     threadSize: 'M8/M10',
    //     finish: 'Galvanized',
    //     loadCapacity: '200kg'
    //   },
    //   features: ['Adjustable Jaw', 'High Load Capacity', 'Easy Installation', 'Versatile Mounting'],
    //   useCases: ['Structural Mounting', 'Suspended Systems', 'Equipment Support'],
    //   price: '₹150'
    // },
    // Metal Flowers
    // {
    //   id: 7,
    //   name: 'Decorative Rose - Large',
    //   category: 'metal-flowers',
    //   image: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   specifications: {
    //     material: 'Mild Steel',
    //     diameter: '150mm',
    //     height: '300mm',
    //     finish: 'Powder Coated',
    //     colors: 'Multiple Options'
    //   },
    //   features: ['Handcrafted', 'Weather Resistant', 'Custom Colors', 'Artistic Design'],
    //   useCases: ['Garden Decoration', 'Architectural Elements', 'Interior Design'],
    //   price: '₹1,200'
    // },
    {
      id: 8,
      name: 'Metal Flower',
      category: 'metal-flowers',
      image: '/pic/metal flower.png',
      specifications: {
        material: 'Stainless Steel',
        dimensions: '600mm x 400mm',
        thickness: '2mm',
        finish: 'Brushed/Mirror',
        mounting: 'Wall Mount'
      },
      features: ['Premium Finish', 'Corrosion Resistant', 'Artistic Detail', 'Easy Installation'],
      useCases: ['Wall Art', 'Partition Panels', 'Corporate Interiors'],
      price: '₹70/kg'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Comprehensive range of industrial components engineered for durability and performance
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-yellow-500 text-white'
                      : 'bg-white text-slate-700 hover:bg-yellow-50 border border-slate-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-slate-600">
              Showing {filteredProducts.length} products
              {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {product.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{product.name}</h3>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specifications Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Specifications:</h4>
                    <div className="space-y-1 text-sm">
                      {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="text-slate-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Quote
                    </button>
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                      <Download className="w-4 h-4" />
                    </button>
                  </div> */}
                </div>

                {/* Expandable Details */}
                <div className="border-t border-slate-200 p-6 bg-slate-50">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-slate-700 flex items-center justify-between">
                      Full Specifications & Use Cases
                      <span className="group-open:rotate-180 transition-transform duration-200">▼</span>
                    </summary>
                    
                    <div className="mt-4 space-y-4">
                      {/* Complete Specifications */}
                      <div>
                        <h5 className="font-medium text-slate-800 mb-2">Complete Specifications:</h5>
                        <div className="grid grid-cols-1 gap-1 text-sm">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                              <span className="text-slate-800 font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* All Features */}
                      <div>
                        <h5 className="font-medium text-slate-800 mb-2">All Features:</h5>
                        <div className="space-y-1">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              <span className="text-slate-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h5 className="font-medium text-slate-800 mb-2">Common Use Cases:</h5>
                        <div className="space-y-1">
                          {product.useCases.map((useCase, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                              <span className="text-slate-700">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Products?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            We can manufacture custom components according to your specifications. 
            Contact us for bulk orders and custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kalikaindustries26@gmail.com?subject=Custom Product Inquiry"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 inline-flex items-center justify-center"
            >
              Request Custom Quote
            </a>
            {/* <a 
              href="mailto:kalikaindustries26@gmail.com?subject=Catalog Request"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-800 transition-all duration-200 inline-flex items-center justify-center"
            >
              Download Catalog
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;