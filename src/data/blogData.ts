export interface BlogPost {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  excerpt: {
    en: string;
    bn: string;
  };
  content: {
    en: string;
    bn: string;
  };
  date: string;
  author: {
    en: string;
    bn: string;
  };
  tags: {
    en: string[];
    bn: string[];
  };
  readTime: {
    en: string;
    bn: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: 'The Future of Web Development',
      bn: 'ওয়েব ডেভেলপমেন্টের ভবিষ্যৎ'
    },
    excerpt: {
      en: 'Exploring the latest trends and technologies that are shaping the future of web development.',
      bn: 'ওয়েব ডেভেলপমেন্টের ভবিষ্যৎ গঠনে সহায়ক সর্বশেষ ট্রেন্ড এবং প্রযুক্তি নিয়ে আলোচনা।'
    },
    content: {
      en: 'Web development is rapidly evolving with new technologies emerging every year. From AI-powered tools to advanced frameworks, the landscape is constantly changing. In this post, we explore the key trends that will define the future of web development.',
      bn: 'ওয়েব ডেভেলপমেন্ট প্রতি বছর নতুন প্রযুক্তির সাথে দ্রুত বিকশিত হচ্ছে। AI-চালিত টুল থেকে শুরু করে উন্নত ফ্রেমওয়ার্ক পর্যন্ত, ল্যান্ডস্কেপ ক্রমাগত পরিবর্তিত হচ্ছে। এই পোস্টে, আমরা ওয়েব ডেভেলপমেন্টের ভবিষ্যৎ নির্ধারণ করবে এমন মূল ট্রেন্ডগুলি অন্বেষণ করি।'
    },
    date: '2024-03-15',
    author: {
      en: 'Mohammad Ridwan Mahmud Jisan',
      bn: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান'
    },
    tags: {
      en: ['Web Development', 'Technology', 'Future'],
      bn: ['ওয়েব ডেভেলপমেন্ট', 'প্রযুক্তি', 'ভবিষ্যৎ']
    },
    readTime: {
      en: '5 min read',
      bn: '৫ মিনিট পড়া'
    }
  },
  {
    id: '2',
    title: {
      en: 'Building Scalable React Applications',
      bn: 'স্কেলেবল রিয়েক্ট অ্যাপ্লিকেশন তৈরি করা'
    },
    excerpt: {
      en: 'Best practices and patterns for building maintainable and scalable React applications.',
      bn: 'রক্ষণাবেক্ষণযোগ্য এবং স্কেলেবল রিয়েক্ট অ্যাপ্লিকেশন তৈরির সেরা অনুশীলন এবং প্যাটার্ন।'
    },
    content: {
      en: 'Creating scalable React applications requires careful planning and implementation of best practices. This article covers component architecture, state management, and performance optimization techniques.',
      bn: 'স্কেলেবল রিয়েক্ট অ্যাপ্লিকেশন তৈরি করতে যত্নশীল পরিকল্পনা এবং সেরা অনুশীলনের বাস্তবায়ন প্রয়োজন। এই নিবন্ধটি কম্পোনেন্ট আর্কিটেকচার, স্টেট ম্যানেজমেন্ট এবং পারফরমেন্স অপ্টিমাইজেশন কৌশল কভার করে।'
    },
    date: '2024-03-10',
    author: {
      en: 'Mohammad Ridwan Mahmud Jisan',
      bn: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান'
    },
    tags: {
      en: ['React', 'JavaScript', 'Architecture'],
      bn: ['রিয়েক্ট', 'জাভাস্ক্রিপ্ট', 'আর্কিটেকচার']
    },
    readTime: {
      en: '7 min read',
      bn: '৭ মিনিট পড়া'
    }
  },
  {
    id: '3',
    title: {
      en: 'Modern CSS Techniques',
      bn: 'আধুনিক CSS কৌশল'
    },
    excerpt: {
      en: 'Exploring advanced CSS features and techniques for modern web design.',
      bn: 'আধুনিক ওয়েব ডিজাইনের জন্য উন্নত CSS বৈশিষ্ট্য এবং কৌশল অন্বেষণ।'
    },
    content: {
      en: 'CSS has evolved significantly with new features like Grid, Flexbox, and custom properties. This post explores how to use these modern techniques effectively.',
      bn: 'গ্রিড, ফ্লেক্সবক্স এবং কাস্টম প্রপার্টিগুলির মতো নতুন বৈশিষ্ট্যগুলির সাথে CSS উল্লেখযোগ্যভাবে বিকশিত হয়েছে। এই পোস্টটি এই আধুনিক কৌশলগুলি কার্যকরভাবে ব্যবহার করার উপায় অন্বেষণ করে।'
    },
    date: '2024-03-05',
    author: {
      en: 'Mohammad Ridwan Mahmud Jisan',
      bn: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান'
    },
    tags: {
      en: ['CSS', 'Design', 'Frontend'],
      bn: ['CSS', 'ডিজাইন', 'ফ্রন্টএন্ড']
    },
    readTime: {
      en: '4 min read',
      bn: '৪ মিনিট পড়া'
    }
  }
];