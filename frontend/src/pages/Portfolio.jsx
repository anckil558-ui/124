import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { projectsData, openSourceProjects } from '../mockData';
import * as Icons from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'Educational Platform', 'Wedding Planning Portal', 'Web Application', 'Enterprise Software', 'Mobile Application'];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white text-blue-600 border-blue-200">
            Our Work
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Featured <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions for real businesses - explore our successful projects and see how we've helped clients achieve their digital goals
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'bg-blue-600 hover:bg-blue-700' : 'border-gray-300 hover:border-blue-600'}
              >
                {category === 'all' ? 'All Projects' : category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900">{project.category}</Badge>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-500 text-white">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.websiteUrl && (
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <Icons.Globe className="w-4 h-4 mr-2" />
                            Website
                          </a>
                        </Button>
                      )}
                      {project.playStoreUrl && (
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                            <Icons.Smartphone className="w-4 h-4 mr-2" />
                            Play Store
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Source & Innovation Projects
            </h2>
            <p className="text-lg text-gray-600">
              Explore our contributions to AI, automation, and educational technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {openSourceProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-blue-400">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Icons.Code className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Icons.Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in working with us on your next project?
          </h2>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <a href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;