import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { servicesData } from '../mockData';
import * as Icons from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white text-blue-600 border-blue-200">
            What We Offer
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver end-to-end IT solutions that drive business growth and digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = Icons[service.icon];
              return (
                <Card key={service.id} className="hover:shadow-xl transition-all duration-300 group border-2 border-gray-100 hover:border-blue-400">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icons.CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600">
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: 'React', icon: 'react', color: 'from-cyan-500 to-blue-600' },
              { name: 'Node.js', icon: 'nodejs', color: 'from-green-500 to-green-700' },
              { name: 'Python', icon: 'python', color: 'from-blue-500 to-yellow-500' },
              { name: 'MongoDB', icon: 'mongodb', color: 'from-green-600 to-green-800' },
              { name: 'AWS', icon: 'aws', color: 'from-orange-500 to-orange-700' },
              { name: 'Docker', icon: 'docker', color: 'from-blue-500 to-blue-700' },
              { name: 'Kotlin', icon: 'kotlin', color: 'from-purple-500 to-purple-700' },
              { name: 'TypeScript', icon: 'typescript', color: 'from-blue-600 to-blue-800' }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center`}>
                  <Icons.Code className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business with innovative technology solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;