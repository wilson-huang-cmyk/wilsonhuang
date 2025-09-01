import Portrait from '../assets/portrait.png';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const Bio: React.FC = () => {
  return (
    <div className="bio-container">
      <img src={Portrait} alt="Wilson Huang" className="bio-image" />
      <h1 className="bio-name">Wilson Huang</h1>
      <h3 className="bio-title">Social Impact Leader | AI Researcher | Bestselling Author</h3>
      <p className="bio-description">
        I build and scale ventures that empower communities, from launching a global microfinance fund to pioneering AI solutions for online safety. My work is driven by a commitment to leveraging technology and strategic partnerships to create sustainable, human-centric impact.
      </p>
      <div className="social-icons">
        <a 
          href="mailto:wilson.huang252@gmail.com" 
          className="social-icon-link" 
          aria-label="Email Wilson Huang"
        >
          <FaEnvelope />
        </a>
        <a 
          href="https://www.linkedin.com/in/wilson-bohan-huang" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon-link"
          aria-label="Wilson Huang's LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};