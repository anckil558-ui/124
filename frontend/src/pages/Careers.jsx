import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { careersData, workCulture } from '../mockData';
import * as Icons from 'lucide-react';

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with API call
    toast({
      title: "Application Submitted!",
      description: "Thank you for applying. We'll review your application and get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', resume: null, coverLetter: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white text-blue-600 border-blue-200">
            Join Our Team
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build Your <span className="text-blue-600">Career</span> With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a dynamic team of innovators and help shape the future of technology. We're always looking for talented individuals who are passionate about creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Work Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Work Culture & Values
            </h2>
            <p className="text-lg text-gray-600">
              At AppDost, we believe in creating an environment where talent thrives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workCulture.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-300">
                  <CardHeader>
                    <IconComponent className="w-10 h-10 text-blue-600 mb-3" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Explore current opportunities and find your perfect role
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {careersData.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.description}</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setSelectedJob(job)}>
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Apply for {job.title}</DialogTitle>
                          <DialogDescription>
                            Fill out the form below to submit your application
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              placeholder="+91 1234567890"
                            />
                          </div>
                          <div>
                            <Label htmlFor="resume">Resume (PDF) *</Label>
                            <Input
                              id="resume"
                              name="resume"
                              type="file"
                              accept=".pdf"
                              onChange={(e) => setFormData(prev => ({ ...prev, resume: e.target.files[0] }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="coverLetter">Cover Letter</Label>
                            <Textarea
                              id="coverLetter"
                              name="coverLetter"
                              value={formData.coverLetter}
                              onChange={handleInputChange}
                              rows={6}
                              placeholder="Tell us why you're a great fit for this role..."
                            />
                          </div>
                          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                            Submit Application
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{job.experience}</span>
                    </div>
                    <Badge variant="secondary">{job.department}</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                          <Icons.CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            Don't see a position that fits?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            We're always looking for talented individuals. Send us your resume!
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;