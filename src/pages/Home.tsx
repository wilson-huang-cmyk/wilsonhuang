import Portrait from '../assets/portrait.png';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const Home = () => {
  return (
    <div className="home-page">
      <div className="home-hero">
        <img src={Portrait} alt="Wilson Huang" className="home-image" />
        <h1 className="home-name">Wilson Huang</h1>
        <p className="home-title">Social Impact Leader • AI Researcher • Bestselling Author</p>
        <p className="home-description">
          I build and scale ventures that empower communities, from launching a global microfinance fund to pioneering AI solutions for online safety. My work is driven by a commitment to leveraging technology and strategic partnerships to create sustainable, human-centric impact.
        </p>
        <div className="home-social-icons">
          <a
            href="mailto:wilson.huang252@gmail.com"
            className="home-social-link"
            aria-label="Email Wilson Huang"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/wilson-bohan-huang"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-link"
            aria-label="Wilson Huang's LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};
