import resilead from '../assets/resilead.png';
import book from '../assets/book-cover.png';
import rise from '../assets/rise.png';
import safeplay from '../assets/safeplay.png';
import bookimg1 from '../assets/bookimg1.png';
import bookimg2 from '../assets/bookimg2.png';
// Imports for new debate images
import risevan2024 from '../assets/risevan2024.png';
import risedalian2024 from '../assets/risedalian2024.png';
import risetoc2024 from '../assets/risetoc2024.png';
import risevan2025 from '../assets/risevan2025.png';
import riseLjubljana2025 from '../assets/riseljubljana2025.png';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

// Fade each timeline item in from the bottom when it scrolls into view.
const FadeInOnView: React.FC<{ children: React.ReactNode; index?: number }> = ({ children, index = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: Math.min(index * 0.02, 0.2) }}
    >
      {children}
    </motion.div>
  );
};



// Exporting the type so other components can use it
export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  category: string;
  description: string;
  caseStudy?: {
    heroImage?: string;
    galleryImages?: { src: string; caption?: string }[];
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
        description: 'Launched a UN-recognized business incubator, empowering 1,100+ young entrepreneurs in 35+ countries through microfinance and advocacy.',
        caseStudy: {
            heroImage: resilead,
            problem: 'Young entrepreneurs, especially in developing or post-conflict regions, face insurmountable barriers to accessing capital, mentorship, and global platforms to scale their ventures.',
            solution: 'Resilead provides accessible microloans and need-based financing through a structured support system. We established the COLLABOR8 Framework for advocacy and education, and as a founding partner with the UN Department of Peacekeeping Operations, we amplify youth voices from war-torn regions at major UN forums.',
            myRole: 'As Founder and CEO, I drove the strategic vision, from establishing partnerships with 6+ international organizations to leading fundraising and program design. I assisted a collaboration with the UN DPO, raising over $5,000 for youth representation, and launched the South Sudan Women\'s Economic Empowerment Microgrant Program to provide capital and training to female entrepreneurs.',
            outcomes: [
                'Empowered over 1,100 young leaders across 35+ countries.',
                'Recognized by the UN DPO as the South Sudan’s first high-school-led business incubator program.',
                'Successfully funded more than 20 distinct youth-led entrepreneurial projects.',
                'Raised over $5,000 USD, enabling UN forum representation for leaders from Liberia, Kosovo, and Côte d\'Ivoire.',
                'Assisted in launching a microgrant program providing $150 grants and business training to 20 women in South Sudan.',
                'Planning expansion into Central Africa in 2026.'
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
            heroImage: safeplay,
            problem: 'Online gaming communities are rife with sophisticated threats, including coded predatory language, grooming, and cyberbullying, which traditional moderation tools often miss.',
            solution: 'SafePlay AI is a comprehensive safety platform that uses a multi-modal approach—processing in-game text, voice (future), and screen content (OCR) in real-time. Our NLP models are fine-tuned to detect nuanced and coded threats, providing immediate alerts to a parent-controlled dashboard.',
            myRole: 'As Co-Founder and Chief Product Officer, I led the product strategy from ideation to MVP. I conducted market research, defined the core feature set, and designed the user experience for the parent-facing web and mobile applications. I coordinated with the development team to ensure our product vision was realized and was also responsible for crafting our winning pitch at LaunchX.',
            outcomes: [
                'Awarded "Best Pitch" and "Entrepreneurial Excellence" at the 2025 LaunchX Bay Area Program.',
                'Successfully developed and launched a validated MVP with initial customer sales and traction.'
            ],
            techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Flask', 'Supabase', 'Stripe']
        }
    },
     {
        id: 'rise-debate',
        date: '2022 - Present',
        title: 'Rise Youth Debate Academy',
        category: 'Founder & CEO | Educational Venture',
        description: 'Founded and scaled an international debate academy across Canada (BC, AB, ON, QC) and Indonesia, mentoring 320+ students and generating over $2.7 million in family cost savings.',
        caseStudy: {
            heroImage: rise,
            galleryImages: [
                { src: risevan2025, caption: 'Vancouver Round (2025): 88 Silver, 65 Gold, 6 Trophies, and 22 Top 5 placements in a 500+ competitor field.' },
                { src: risedalian2024, caption: 'Dalian Round (2024): 58 Silver, 49 Gold, 2 Trophies, and 7 Top 10 placements among 1000+ competitors.' },
                { src: riseLjubljana2025, caption: 'Ljubljana Round (2025): 23 Silver, 23 Gold, and 6 Top 10 placements in a 1500+ competitor international tournament.' },
                { src: risetoc2024, caption: 'Tournament of Champions (2024): 31 Silver, 18 Gold, and a Top 10 finish in a global field of 1500+ competitors.' },
                { src: risevan2024, caption: 'Vancouver Round (2024): 28 Silver, 14 Gold, and 8 Top 10 placements against 500+ competitors.' }
            ],
            problem: 'Elite-level debate coaching is often prohibitively expensive, creating a high barrier to entry and limiting access for talented students from diverse socioeconomic backgrounds.',
            solution: 'Rise Youth Debate Academy was founded on the principle of accessibility. We developed a high-quality, scalable curriculum and a train-the-trainer model that allowed us to offer coaching at a fraction of the cost of private tutors, making competitive debate a viable option for hundreds of students.',
            myRole: 'As Founder and CEO, I directed the academy\'s strategic growth, scaling operations across four Canadian provinces (BC, Alberta, Ontario, Quebec) and internationally to Indonesia. I developed a proprietary curriculum now used in two schools. In my capacity as Head of Debate, I directly mentored over 320 students and managed all international logistics for a 20-person team competing in the World Scholar\'s Cup in China and the USA, handling everything from travel and accommodations to team supervision.',
            outcomes: [
                'Generated over $2.7 million in calculated cost savings for more than 320 families by providing an accessible alternative to private coaching.',
                'Coached 320+ students to 400+ total awards, including 169 Gold Medals, 228 Silver Medals, and 8 Trophies.',
                'In 500-Competitor Tournaments: Achieved 39 Top 10, 68 Top 20, and 68 Top 50 placements.',
                'In 1000-Competitor Tournaments: Secured 7 Top 10, 13 Top 20, and 44 Top 50 placements.',
                'In 1500-Competitor Tournaments: Earned 7 Top 10, 12 Top 20, and 28 Top 50 placements.',
                'Expanded operations across British Columbia, Alberta, Ontario, Quebec, and Indonesia.',
                'Developed a core curriculum that has been adopted by 2 schools for their debate programs.'
            ]
        }
    },
    {
        id: 'author',
        date: 'Spring 2025',
        title: '#1 Bestselling Author, "Big Pharmamania"',
        category: 'Legal Studies & Social Commentary',
        description: 'Authored and published a #1 Amazon Bestseller on pharmaceutical industry corruption, earning endorsements from academics at York and Cambridge and praise from over 260+ buyers.',
        caseStudy: {
            heroImage: book,
            galleryImages: [
                { src: bookimg1, caption: 'Students with signed copies of the book.' },
                { src: bookimg2, caption: 'Distributed and signed versions for students'}
            ],
            problem: 'Public discourse surrounding the pharmaceutical industry and its role in global health crises is often polarized and lacks a clear, evidence-based analysis accessible to a general audience.',
            solution: 'I undertook a rigorous research process to write "Big Pharmamania," a book that breaks down complex legal and ethical issues into a compelling narrative. It combines business ethics, scientific analysis, and social commentary to expose monopolistic practices and advocate for systemic reform in public health.',
            myRole: "As the author, I managed the entire project lifecycle, from initial concept to publication. My research and writing were assisted by two distinguished academic mentors — one holding an M.A. Hons from St. John’s College, Cambridge with over 25 years of experience in history and literature, and another with a Ph.D. in Philosophy from York University and more than a decade of expertise in ethics, political theory, and law. I personally handled the manuscript editing, cover design, Amazon KDP publishing, and distribution.",
            outcomes: [
                'Achieved #1 Bestseller status in the Legal Studies category on Amazon.ca in Spring 2025.',
                'Received powerful endorsements from academics at York University and Cambridge.',
                'Praised by over 260+ buyers for its factual, evidence-based analysis of a complex and politically divisive issue.',
                'Available on Amazon: https://www.amazon.ca/Big-Pharmamania-Corruption-Pharmaceutical-Industry/dp/B0DSV5MX5D'
            ]
        }
    },
    {
        id: 'leeds-research',
        date: 'Summer 2025',
        title: 'AI in the Gig Economy',
        category: 'Independent Researcher | University of Leeds',
        description: 'Led an independent research project under faculty mentorship, handling the full research lifecycle from literature review and data analysis (Excel, Jamovi) to writing a full paper for potential peer review.'
    }
];

interface TimelineProps {
  onNavigate: (project: TimelineEvent) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onNavigate }) => {
  return (
    <div className="timeline-wrapper">
      {timelineData.map((item, index) => (
        <FadeInOnView key={item.id} index={index}>
          <div className="timeline-item" onClick={() => item.caseStudy && onNavigate(item)}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-date">{item.date}</p>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-category">{item.category}</p>
            <p className="timeline-description">{item.description}</p>
            {item.caseStudy && <span className="timeline-link">View Case Study →</span>}
          </div>
        </div>
        </FadeInOnView>
      ))}
    </div>
  );
};