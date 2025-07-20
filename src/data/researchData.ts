export interface ResearchPaper {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  abstract: {
    en: string;
    bn: string;
  };
  authors: {
    en: string[];
    bn: string[];
  };
  publication: {
    en: string;
    bn: string;
  };
  date: string;
  status: {
    en: string;
    bn: string;
  };
  keywords: {
    en: string[];
    bn: string[];
  };
  doi?: string;
  pdfUrl?: string;
  category: {
    en: string;
    bn: string;
  };
}

export const researchPapers: ResearchPaper[] = [
  {
    id: '1',
    title: {
      en: 'Machine Learning Applications in Web Development',
      bn: 'ওয়েব ডেভেলপমেন্টে মেশিন লার্নিং প্রয়োগ'
    },
    abstract: {
      en: 'This research explores the integration of machine learning algorithms in modern web development practices, focusing on automated testing, intelligent user interfaces, and personalized content delivery systems.',
      bn: 'এই গবেষণাটি আধুনিক ওয়েব ডেভেলপমেন্ট অনুশীলনে মেশিন লার্নিং অ্যালগরিদমের একীকরণ অন্বেষণ করে, যা স্বয়ংক্রিয় পরীক্ষা, বুদ্ধিমান ব্যবহারকারী ইন্টারফেস এবং ব্যক্তিগত কন্টেন্ট ডেলিভারি সিস্টেমের উপর দৃষ্টি নিবদ্ধ করে।'
    },
    authors: {
      en: ['Mohammad Ridwan Mahmud Jisan', 'Dr. Sarah Johnson'],
      bn: ['মোহাম্মদ রিদোয়ান মাহমুদ জিসান', 'ডক্টর সারাহ জনসন']
    },
    publication: {
      en: 'International Journal of Web Technologies',
      bn: 'ইন্টারন্যাশনাল জার্নাল অব ওয়েব টেকনোলজিস'
    },
    date: '2024-02-15',
    status: {
      en: 'Under Review',
      bn: 'পর্যালোচনাধীন'
    },
    keywords: {
      en: ['Machine Learning', 'Web Development', 'AI', 'User Experience'],
      bn: ['মেশিন লার্নিং', 'ওয়েব ডেভেলপমেন্ট', 'এআই', 'ব্যবহারকারীর অভিজ্ঞতা']
    },
    category: {
      en: 'Computer Science',
      bn: 'কম্পিউটার বিজ্ঞান'
    }
  },
  {
    id: '2',
    title: {
      en: 'Sustainable Software Development Practices',
      bn: 'টেকসই সফটওয়্যার ডেভেলপমেন্ট অনুশীলন'
    },
    abstract: {
      en: 'An investigation into environmentally sustainable software development practices, examining energy-efficient coding patterns, green hosting solutions, and carbon footprint reduction in digital products.',
      bn: 'পরিবেশগতভাবে টেকসই সফটওয়্যার ডেভেলপমেন্ট অনুশীলনের একটি তদন্ত, যা শক্তি-দক্ষ কোডিং প্যাটার্ন, সবুজ হোস্টিং সমাধান এবং ডিজিটাল পণ্যগুলিতে কার্বন ফুটপ্রিন্ট হ্রাস পরীক্ষা করে।'
    },
    authors: {
      en: ['Mohammad Ridwan Mahmud Jisan', 'Prof. Michael Green', 'Dr. Lisa Chen'],
      bn: ['মোহাম্মদ রিদোয়ান মাহমুদ জিসান', 'প্রফেসর মাইকেল গ্রিন', 'ডক্টর লিসা চেন']
    },
    publication: {
      en: 'Sustainable Computing Conference 2024',
      bn: 'টেকসই কম্পিউটিং কনফারেন্স ২০২৪'
    },
    date: '2024-01-20',
    status: {
      en: 'Published',
      bn: 'প্রকাশিত'
    },
    keywords: {
      en: ['Sustainability', 'Green Computing', 'Software Engineering', 'Environment'],
      bn: ['টেকসইতা', 'সবুজ কম্পিউটিং', 'সফটওয়্যার ইঞ্জিনিয়ারিং', 'পরিবেশ']
    },
    doi: '10.1000/xyz123',
    category: {
      en: 'Environmental Science',
      bn: 'পরিবেশ বিজ্ঞান'
    }
  },
  {
    id: '3',
    title: {
      en: 'Cybersecurity in Modern Web Applications',
      bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনে সাইবার নিরাপত্তা'
    },
    abstract: {
      en: 'A comprehensive study of security vulnerabilities in contemporary web applications, proposing novel detection methods and mitigation strategies for common attack vectors.',
      bn: 'সমসাময়িক ওয়েব অ্যাপ্লিকেশনগুলিতে নিরাপত্তা দুর্বলতার একটি বিস্তৃত অধ্যয়ন, সাধারণ আক্রমণ ভেক্টরগুলির জন্য অভিনব সনাক্তকরণ পদ্ধতি এবং প্রশমন কৌশল প্রস্তাব করে।'
    },
    authors: {
      en: ['Mohammad Ridwan Mahmud Jisan', 'Dr. Robert Security'],
      bn: ['মোহাম্মদ রিদোয়ান মাহমুদ জিসান', 'ডক্টর রবার্ট সিকিউরিটি']
    },
    publication: {
      en: 'Cybersecurity Research Journal',
      bn: 'সাইবার নিরাপত্তা গবেষণা জার্নাল'
    },
    date: '2023-12-10',
    status: {
      en: 'Published',
      bn: 'প্রকাশিত'
    },
    keywords: {
      en: ['Cybersecurity', 'Web Security', 'Vulnerability Assessment', 'Penetration Testing'],
      bn: ['সাইবার নিরাপত্তা', 'ওয়েব নিরাপত্তা', 'দুর্বলতা মূল্যায়ন', 'পেনিট্রেশন টেস্টিং']
    },
    doi: '10.1000/sec456',
    category: {
      en: 'Information Security',
      bn: 'তথ্য নিরাপত্তা'
    }
  }
];