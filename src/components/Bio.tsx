import Portrait from '../assets/portrait.png'

interface BioProps {
  onNavigateHome: () => void;
}

export const Bio: React.FC<BioProps> = ({ onNavigateHome }) => {
  return (
    <div className="bio-container">
      <img src={Portrait} alt="Wilson Huang" className="bio-image" />
      <h1 className="bio-name">Wilson Huang</h1>
      <h3 className="bio-title">Social Impact Leader | AI Researcher | Bestselling Author</h3>
      <p className="bio-description">
        I build and scale ventures that empower communities, from launching a global microfinance fund to pioneering AI solutions for online safety. My work is driven by a commitment to leveraging technology and strategic partnerships to create sustainable, human-centric impact.
      </p>
      <div className="bio-buttons">
        <button onClick={onNavigateHome} className="btn btn-primary">View My Work</button>
        <a href="mailto:your.email@example.com" className="btn btn-secondary">Get In Touch</a>
      </div>
    </div>
  );
};

