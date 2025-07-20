import { useState } from 'react';
import { ArrowLeft, Users, Calendar, BookOpen, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import { researchPapers, ResearchPaper } from '../data/researchData';

interface ResearchProps {
  onBack: () => void;
  language: 'en' | 'bn';
}

const Research = ({ onBack, language }: ResearchProps) => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [copiedDoi, setCopiedDoi] = useState<string | null>(null);

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

  const copyDoi = async (doi: string) => {
    try {
      await navigator.clipboard.writeText(doi);
      setCopiedDoi(doi);
      setTimeout(() => setCopiedDoi(null), 2000);
    } catch (err) {
      console.error('Failed to copy DOI:', err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'published':
      case 'প্রকাশিত':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'under review':
      case 'পর্যালোচনাধীন':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  if (selectedPaper) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30">
        {/* Navigation Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setSelectedPaper(null)}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">
                  {language === 'bn' ? 'গবেষণায় ফিরে যান' : 'Back to Research'}
                </span>
              </button>
              
              <h1 className="text-xl font-bold text-slate-900">
                {language === 'bn' ? 'গবেষণা' : 'Research'}
              </h1>
              
              <button 
                onClick={onBack}
                className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <ArrowLeft size={16} />
                {language === 'bn' ? 'হোম' : 'Home'}
              </button>
            </div>
          </div>
        </header>

        {/* Paper Details */}
        <main className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-start justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(selectedPaper.status[language])}`}>
                    {selectedPaper.status[language]}
                  </span>
                  <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {selectedPaper.category[language]}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {selectedPaper.title[language]}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{selectedPaper.authors[language].join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{formatDate(selectedPaper.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>{selectedPaper.publication[language]}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'bn' ? 'সারসংক্ষেপ' : 'Abstract'}
                  </h2>
                  <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                    {selectedPaper.abstract[language].split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {language === 'bn' ? 'মূল শব্দ' : 'Keywords'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPaper.keywords[language].map((keyword, index) => (
                      <span 
                        key={index}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedPaper.doi && (
                  <div className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg">
                    <span className="font-medium text-slate-700">DOI:</span>
                    <code className="text-sm text-slate-600 flex-1">{selectedPaper.doi}</code>
                    <button
                      onClick={() => copyDoi(selectedPaper.doi!)}
                      className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {copiedDoi === selectedPaper.doi ? (
                        <CheckCircle size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30">
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
              {language === 'bn' ? 'গবেষণা' : 'Research'}
            </h1>
            
            <div className="w-20" /> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Research Papers Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:gap-12">
          {researchPapers.map((paper, index) => (
            <article 
              key={paper.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedPaper(paper)}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(paper.status[language])}`}>
                    {paper.status[language]}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-500 mb-1">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {paper.category[language]}
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight hover:text-purple-600 transition-colors">
                  {paper.title[language]}
                </h2>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {paper.abstract[language].substring(0, 200)}...
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{paper.authors[language].slice(0, 2).join(', ')}{paper.authors[language].length > 2 ? ` +${paper.authors[language].length - 2}` : ''}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(paper.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} />
                    <span className="truncate max-w-xs">{paper.publication[language]}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {paper.keywords[language].slice(0, 4).map((keyword, keywordIndex) => (
                    <span 
                      key={keywordIndex}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                  {paper.keywords[language].length > 4 && (
                    <span className="text-slate-500 text-sm px-2 py-1">
                      +{paper.keywords[language].length - 4} more
                    </span>
                  )}
                </div>

                {paper.doi && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <ExternalLink size={14} />
                      <span>DOI: {paper.doi}</span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Research;