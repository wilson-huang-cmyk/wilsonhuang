// src/components/Hero.tsx
import Portrait from '../assets/portrait.png';

export const Hero = () => {
  return (
    <section className="container">
      <div className="hero">
        <img src={Portrait} alt="Wilson Huang" className="hero-image" />
        <div className="hero-content">
          <h1>Wilson Huang</h1>
          <h3>Social Impact Leader | AI Researcher | Bestselling Author</h3>
          <p>
            I build and scale ventures that empower communities, from launching a global microfinance fund for youth entrepreneurs to pioneering AI solutions for online safety. My work is driven by a commitment to leveraging technology and strategic partnerships to create sustainable, human-centric impact.
          </p>
          <div className="hero-buttons">
            {/* Added btn and btn-primary/btn-secondary classes */}
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="mailto:your.email@example.com" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};