import { useState } from 'react';
import { ArrowLeft, Clock, Calendar, Tag, User } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';

interface BlogProps {
  onBack: () => void;
  language: 'en' | 'bn';
}

const Blog = ({ onBack, language }: BlogProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'bn') {
      return date.toLocaleDateString('bn-BD');
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
        {/* Navigation Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">
                  {language === 'bn' ? 'ব্লগে ফিরে যান' : 'Back to Blog'}
                </span>
              </button>
              
              <h1 className="text-xl font-bold text-slate-900">
                {language === 'bn' ? 'ব্লগ' : 'Blog'}
              </h1>
              
              <button 
                onClick={onBack}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <ArrowLeft size={16} />
                {language === 'bn' ? 'হোম' : 'Home'}
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <main className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {selectedPost.title[language]}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{selectedPost.author[language]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{formatDate(selectedPost.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{selectedPost.readTime[language]}</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed mb-8">
                  {selectedPost.content[language].split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags[language].map((tag, index) => (
                    <span 
                      key={index}
                      className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">
                {language === 'bn' ? 'হোম' : 'Home'}
              </span>
            </button>
            
            <h1 className="text-2xl font-bold text-slate-900">
              {language === 'bn' ? 'ব্লগ' : 'Blog'}
            </h1>
            
            <div className="w-20" /> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:gap-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                      {post.title[language]}
                    </h2>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                      {post.excerpt[language]}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author[language]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime[language]}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags[language].slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-500 mb-2">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {language === 'bn' ? 'ব্লগ পোস্ট' : 'Blog Post'}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;