import React, { useState } from 'react';
import { Clock, User, Tag, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { blogPosts } from '../mockData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Development', 'AI/ML', 'Design', 'DevOps', 'Mobile'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white text-blue-600 border-blue-200">
            Latest Updates
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Insights & <span className="text-blue-600">Tech Articles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest insights, tech trends, and industry expertise
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'hover:border-blue-600'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get the latest insights, tech trends, and industry news delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900"
            />
            <button className="px-6 py-2 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;