import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with API call
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white text-blue-600 border-blue-200">
            Get In Touch
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help transform your ideas into reality
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>Send us an email anytime</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="mailto:contact@appdost.in" className="block text-blue-600 hover:underline">
                    contact@appdost.in
                  </a>
                  <a href="mailto:hr@appdost.in" className="block text-blue-600 hover:underline">
                    hr@appdost.in
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Mon - Sat: 9:00 AM - 6:00 PM IST</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="tel:+917635075422" className="block text-blue-600 hover:underline">
                    +91 76350 75422
                  </a>
                  <a href="tel:+911169290750" className="block text-blue-600 hover:underline">
                    +91 11 6929 0750
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Visit Us</CardTitle>
                  <CardDescription>Our office locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold">HQ: Banka, Bihar</p>
                    <p>Motihari, Bihar</p>
                    <p>Patna, Bihar</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 1234567890"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="How can we help?"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={8}
                        placeholder="Tell us about your project or inquiry..."
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2876845544803!2d86.92249931501362!3d25.574089583743765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f04a4a76b7f7a7%3A0x8f84d83c2b4c6e2e!2sBanka%2C%20Bihar!5e0!3m2!1sen!2sin!4v1642345678901!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="AppDost Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;