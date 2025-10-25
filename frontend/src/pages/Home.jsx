import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Laptop, Smartphone, Target, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { stats, coreExpertise, whyChooseUs, processSteps, projectsData, openSourceProjects, blogPosts } from '../mockData';
import * as Icons from 'lucide-react';

const Home = () => {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
  const latestBlogs = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 lg:pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-white text-blue-600 border-blue-200 hover:bg-blue-50">
                <Rocket className="w-4 h-4 mr-2" />
                Complete IT Solution Provider Since 2025
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your <br />
                <span className="text-blue-600">Ideas</span> Into{' '}
                <span className="text-purple-600">Digital Reality</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project with our expert team of developers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Explore Our Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute top-4 right-8 w-72 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform animate-float-slow">
                <Laptop className="w-10 h-10 text-blue-600 mb-3" />
                <div className="text-3xl font-bold text-blue-600">+10 Projects</div>
                <div className="text-sm text-gray-600 mt-1">Web Development</div>
              </div>
              <div className="absolute top-40 right-24 w-64 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform animate-float-medium">
                <Smartphone className="w-10 h-10 text-purple-600 mb-3" />
                <div className="text-3xl font-bold text-purple-600">+4 Apps</div>
                <div className="text-sm text-gray-600 mt-1">Mobile Apps</div>
              </div>
              <div className="absolute bottom-12 right-12 w-64 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform animate-float-fast">
                <Rocket className="w-10 h-10 text-orange-500 mb-3" />
                <div className="text-3xl font-bold text-orange-500">On Time</div>
                <div className="text-sm text-gray-600 mt-1">Fast Delivery</div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-700 font-medium">100% Client Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-700 font-medium">Secure & Scalable</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span className="text-sm text-gray-700 font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = Icons[stat.icon];
                return (
                  <div key={index} className="text-center space-y-3">
                    <div className="flex justify-center">
                      <IconComponent className="w-12 h-12 text-blue-600" />
                    </div>
                    <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Rocket className="w-4 h-4 mr-2" />
              ABOUT APPDOST
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Trusted Partner for <span className="text-blue-600">Complete Digital Transformation</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              AppDost is your trusted partner for complete digital transformation. We are a dynamic, innovation-driven IT solutions provider specializing in turning visionary ideas into powerful, market-ready products.
            </p>
          </div>

          {/* Core Expertise */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-gray-900">What We Do</span>
              <br />
              <span className="text-gray-600 text-xl font-normal">Our Core Expertise</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreExpertise.map((item, index) => {
                const IconComponent = Icons[item.icon];
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200">
                    <CardHeader>
                      <IconComponent className="w-10 h-10 text-blue-600 mb-3" />
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Choose AppDost?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Real solutions for real businesses - explore our successful projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Latest Updates
              </h2>
              <p className="text-lg text-gray-600">
                Insights & Tech Articles
              </p>
            </div>
            <Link to="/blog">
              <Button variant="outline">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestBlogs.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
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
            Let's discuss how we can help transform your ideas into reality with cutting-edge technology and expert development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;