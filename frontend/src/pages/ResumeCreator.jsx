import React, { useState } from 'react';
import { Download, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';

const ResumeCreator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [{ company: '', position: '', duration: '', description: '' }],
    education: [{ institution: '', degree: '', year: '', gpa: '' }],
    skills: [''],
    projects: [{ title: '', description: '', technologies: '' }]
  });

  const handleInputChange = (section, index, field, value) => {
    if (section === 'basic') {
      setFormData(prev => ({ ...prev, [field]: value }));
    } else if (section === 'skills') {
      const newSkills = [...formData.skills];
      newSkills[index] = value;
      setFormData(prev => ({ ...prev, skills: newSkills }));
    } else {
      const newArray = [...formData[section]];
      newArray[index][field] = value;
      setFormData(prev => ({ ...prev, [section]: newArray }));
    }
  };

  const addItem = (section) => {
    if (section === 'skills') {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, ''] }));
    } else {
      const templates = {
        experience: { company: '', position: '', duration: '', description: '' },
        education: { institution: '', degree: '', year: '', gpa: '' },
        projects: { title: '', description: '', technologies: '' }
      };
      setFormData(prev => ({
        ...prev,
        [section]: [...prev[section], templates[section]]
      }));
    }
  };

  const removeItem = (section, index) => {
    if (section === 'skills') {
      setFormData(prev => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [section]: prev[section].filter((_, i) => i !== index)
      }));
    }
  };

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF
    toast({
      title: "Resume Downloaded!",
      description: "Your resume has been generated and downloaded successfully.",
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/careers" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resume <span className="text-blue-600">Creator</span>
          </h1>
          <p className="text-lg text-gray-600">
            Create a professional resume in minutes
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('basic', null, 'fullName', e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('basic', null, 'email', e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('basic', null, 'phone', e.target.value)}
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('basic', null, 'address', e.target.value)}
                      placeholder="City, Country"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea
                    id="summary"
                    value={formData.summary}
                    onChange={(e) => handleInputChange('basic', null, 'summary', e.target.value)}
                    rows={4}
                    placeholder="Brief professional summary..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Work Experience</CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => addItem('experience')}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Experience
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.experience.map((exp, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4 relative">
                    {formData.experience.length > 1 && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => removeItem('experience', index)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    )}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Company Name</Label>
                        <Input
                          value={exp.company}
                          onChange={(e) => handleInputChange('experience', index, 'company', e.target.value)}
                          placeholder="Company Inc."
                        />
                      </div>
                      <div>
                        <Label>Position</Label>
                        <Input
                          value={exp.position}
                          onChange={(e) => handleInputChange('experience', index, 'position', e.target.value)}
                          placeholder="Software Engineer"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Duration</Label>
                      <Input
                        value={exp.duration}
                        onChange={(e) => handleInputChange('experience', index, 'duration', e.target.value)}
                        placeholder="Jan 2020 - Present"
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => handleInputChange('experience', index, 'description', e.target.value)}
                        rows={3}
                        placeholder="Key responsibilities and achievements..."
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Education</CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => addItem('education')}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Education
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.education.map((edu, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4 relative">
                    {formData.education.length > 1 && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => removeItem('education', index)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    )}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Institution</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) => handleInputChange('education', index, 'institution', e.target.value)}
                          placeholder="University Name"
                        />
                      </div>
                      <div>
                        <Label>Degree</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => handleInputChange('education', index, 'degree', e.target.value)}
                          placeholder="Bachelor of Science"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Year</Label>
                        <Input
                          value={edu.year}
                          onChange={(e) => handleInputChange('education', index, 'year', e.target.value)}
                          placeholder="2020 - 2024"
                        />
                      </div>
                      <div>
                        <Label>GPA/Percentage</Label>
                        <Input
                          value={edu.gpa}
                          onChange={(e) => handleInputChange('education', index, 'gpa', e.target.value)}
                          placeholder="3.8/4.0 or 85%"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Skills</CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => addItem('skills')}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Skill
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        value={skill}
                        onChange={(e) => handleInputChange('skills', index, null, e.target.value)}
                        placeholder="e.g., React, Python, AWS"
                      />
                      {formData.skills.length > 1 && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeItem('skills', index)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Projects</CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => addItem('projects')}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.projects.map((project, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4 relative">
                    {formData.projects.length > 1 && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => removeItem('projects', index)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    )}
                    <div>
                      <Label>Project Title</Label>
                      <Input
                        value={project.title}
                        onChange={(e) => handleInputChange('projects', index, 'title', e.target.value)}
                        placeholder="My Awesome Project"
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => handleInputChange('projects', index, 'description', e.target.value)}
                        rows={3}
                        placeholder="Project details and achievements..."
                      />
                    </div>
                    <div>
                      <Label>Technologies Used</Label>
                      <Input
                        value={project.technologies}
                        onChange={(e) => handleInputChange('projects', index, 'technologies', e.target.value)}
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <Link to="/careers">
                <Button variant="outline">Cancel</Button>
              </Link>
              <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeCreator;
