// Exporting the type so other components can use it
export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  category: string;
  description: string;
  caseStudy?: {
    heroImage?: string; // Optional: for the main logo/image
    galleryImages?: string[]; // Optional: for extra photos
    problem: string;
    solution: string;
    myRole: string;
    outcomes: string[];
    techStack?: string[];
  };
}

const timelineData: TimelineEvent[] = [
    {
        id: 'resilead',
        date: '2024 - Present',
        title: 'Resilead',
        category: 'Founder & CEO | Global Microfinance',
        description: 'Launched a UN-recognized, high-school-led business incubator, empowering over 1,100 young entrepreneurs across 35+ countries.',
        caseStudy: {
            // heroImage: 'https://placehold.co/1200x600/1E1E1E/E0E0E0?text=Resilead+Logo',
            // galleryImages: [
            //     'https://placehold.co/600x400/1E1E1E/E0E0E0?text=UN+Forum',
            //     'https://placehold.co/600x400/1E1E1E/E0E0E0?text=Workshop',
            //     'https://placehold.co/600x400/1E1E1E/E0E0E0?text=Team+Photo'
            // ],
            problem: 'Young entrepreneurs, especially in developing or post-conflict regions, face insurmountable barriers to accessing capital, mentorship, and global platforms to scale their ventures.',
            solution: 'Resilead was created to provide accessible micro-loans, need-based financing, and a structured support system. We established the COLLABOR8 Framework for advocacy and education, and partnered with the UN Department of Peacekeeping Operations to give youth from war-torn regions a voice at major UN forums.',
            myRole: 'As Founder and CEO, I drove the strategic vision, from establishing the organization\'s legal structure to leading fundraising initiatives. I forged key partnerships, including with the UN, and oversaw the design and implementation of our microgrant programs, such as the South Sudan Women\'s Economic Empowerment Initiative.',
            outcomes: [
                'Empowered over 1,100 young leaders across 35+ countries.',
                'Successfully funded more than 20 distinct youth-led entrepreneurial projects.',
                'Raised over $5,000 USD for the UN Youth Office, enabling representation for leaders from Liberia, Kosovo, and Côte d\'Ivoire.',
                'Recognized by the UN DPO as the world’s first high-school-led business incubator program.'
            ]
        }
    },
    {
        id: 'safeplay',
        date: 'July 2025 - Present',
        title: 'SafePlay AI',
        category: 'Co-Founder & CPO | AI Startup',
        description: 'Co-founded an AI venture to protect young gamers from online threats, winning Best Pitch and Entrepreneurial Excellence at LaunchX.',
        caseStudy: {
            // heroImage: 'https://placehold.co/1200x600/1E1E1E/E0E0E0?text=SafePlay+AI',
            problem: 'Online gaming communities are rife with sophisticated threats, including coded predatory language, grooming, and cyberbullying, which traditional moderation tools often miss.',
            solution: 'SafePlay AI is a comprehensive safety platform that uses a multi-modal approach—processing in-game text, voice (future), and screen content (OCR) in real-time. Our NLP models are fine-tuned to detect nuanced and coded threats, providing immediate alerts to a parent-controlled dashboard.',
            myRole: 'As Co-Founder and Chief Product Officer, I led the product strategy from ideation to MVP. I conducted market research, defined the core feature set, designed the user experience for the parent dashboard, and managed the development sprints. I was also responsible for crafting our winning pitch at LaunchX.',
            outcomes: [
                'Awarded "Best Pitch" and "Entrepreneurial Excellence" at the 2025 LaunchX Bay Area Program.',
                'Successfully developed and launched a validated MVP with initial customer sales and traction.',
                'Built a robust technical foundation for future feature expansion, including voice analysis.'
            ],
            techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Flask', 'Supabase', 'Stripe', 'Custom NLP Models']
        }
    },
     {
        id: 'rise-debate',
        date: '2022 - Present',
        title: 'Rise Youth Debate Academy',
        category: 'Founder & CEO | Educational Venture',
        description: 'Scaled a debate coaching academy across Canada and Indonesia, generating over CAD $2.7 million in cost savings for 320+ families.',
        caseStudy: {
            problem: 'Elite-level debate coaching is often prohibitively expensive, creating a high barrier to entry and limiting access for talented students from diverse socioeconomic backgrounds.',
            solution: 'Rise Youth Debate Academy was founded on the principle of accessibility. We developed a high-quality, scalable curriculum and a train-the-trainer model that allowed us to offer coaching at a fraction of the cost of private tutors, making competitive debate a viable option for hundreds of students.',
            myRole: 'As Founder and CEO, I managed all aspects of the business. I developed the core curriculum, recruited and trained coaches, led expansion efforts into four Canadian provinces and Indonesia, and managed international logistics for teams competing in the World Scholar\'s Cup in China and the USA.',
            outcomes: [
                'Generated over $2.7 million in calculated cost savings for more than 320 families.',
                'Coached students to over 400 total awards, including 169 Gold Medals and 8 Trophies in major international tournaments.',
                'Expanded operations internationally, establishing a strong presence in the Canadian and Indonesian youth debate circuits.'
            ]
        }
    },
    {
        id: 'author',
        date: 'Spring 2025',
        title: 'Bestselling Author, "Big Pharmamania"',
        category: 'Legal Studies & Social Commentary',
        description: 'Authored and published a #1 Amazon Bestselling book on the corruption within the pharmaceutical industry, earning endorsements from academics at York and Cambridge.',
        caseStudy: {
            // heroImage: 'https://placehold.co/1200x600/1E1E1E/E0E0E0?text=Book+Cover',
            problem: 'Public discourse surrounding the pharmaceutical industry and its role in global health crises is often polarized and lacks a clear, evidence-based analysis accessible to a general audience.',
            solution: 'I undertook a rigorous research process to write "Big Pharmamania," a book that breaks down complex legal and ethical issues into a compelling narrative. It combines business ethics, scientific analysis, and social commentary to expose monopolistic practices and advocate for systemic reform in public health.',
            myRole: 'As the sole author, I was responsible for the entire project lifecycle: conducting in-depth research, writing and editing the manuscript, designing the cover, and managing the publishing and distribution process on Amazon KDP. I also led the marketing efforts to drive the book to bestseller status.',
            outcomes: [
                'Achieved #1 Bestseller status in the Legal Studies category on Amazon.ca in Spring 2025.',
                'Received powerful endorsements from respected academics, including a Ph.D. from York University and an M.A. from St. John\'s College, Cambridge.',
                'Successfully distributed and signed copies for students, fostering dialogue on public health and corporate ethics.'
            ]
        }
    }
];

interface TimelineProps {
  onNavigate: (project: TimelineEvent) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onNavigate }) => {
  return (
    <div className="timeline-wrapper">
      {timelineData.map((item) => (
        <div key={item.id} className="timeline-item" onClick={() => item.caseStudy && onNavigate(item)}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-date">{item.date}</p>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-category">{item.category}</p>
            <p className="timeline-description">{item.description}</p>
            {item.caseStudy && <span className="timeline-link">View Case Study →</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

