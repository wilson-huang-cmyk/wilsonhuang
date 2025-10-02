import rise from '../assets/rise.png';
import risevan2024 from '../assets/risevan2024.png';
import risedalian2024 from '../assets/risedalian2024.png';
import risetoc2024 from '../assets/risetoc2024.png';
import risevan2025 from '../assets/risevan2025.png';
import riseLjubljana2025 from '../assets/riseljubljana2025.png';

export const RiseYouth = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <p className="project-category">Founder & CEO | Educational Venture</p>
        <h1 className="project-title">Rise Youth Debate Academy</h1>
        <p className="project-date">2022 - Present</p>
      </header>

      <img src={rise} alt="Rise Youth Debate Academy" className="project-hero-image" />

      <div className="project-content">
        <div className="project-section">
          <h2>Overview</h2>
          <p>
            Founded and scaled an international debate academy across Canada (BC, AB, ON, QC) and Indonesia, mentoring 320+ students and generating over $2.7 million in family cost savings.
          </p>
        </div>

        <div className="project-section">
          <h2>The Challenge</h2>
          <p>
            Elite-level debate coaching is often prohibitively expensive, creating a high barrier to entry and limiting access for talented students from diverse socioeconomic backgrounds.
          </p>
        </div>

        <div className="project-section">
          <h2>Our Solution</h2>
          <p>
            Rise Youth Debate Academy was founded on the principle of accessibility. We developed a high-quality, scalable curriculum and a train-the-trainer model that allowed us to offer coaching at a fraction of the cost of private tutors, making competitive debate a viable option for hundreds of students.
          </p>
        </div>

        <div className="project-section">
          <h2>My Role & Contribution</h2>
          <p>
            As Founder and CEO, I directed the academy's strategic growth, scaling operations across four Canadian provinces (BC, Alberta, Ontario, Quebec) and internationally to Indonesia. I developed a proprietary curriculum now used in two schools. In my capacity as Head of Debate, I directly mentored over 320 students and managed all international logistics for a 20-person team competing in the World Scholar's Cup in China and the USA, handling everything from travel and accommodations to team supervision.
          </p>
        </div>

        <div className="project-section">
          <h2>Key Outcomes</h2>
          <ul>
            <li>Generated over $2.7 million in calculated cost savings for more than 320 families by providing an accessible alternative to private coaching.</li>
            <li>Coached 320+ students to 400+ total awards, including 169 Gold Medals, 228 Silver Medals, and 8 Trophies.</li>
            <li>In 500-Competitor Tournaments: Achieved 39 Top 10, 68 Top 20, and 68 Top 50 placements.</li>
            <li>In 1000-Competitor Tournaments: Secured 7 Top 10, 13 Top 20, and 44 Top 50 placements.</li>
            <li>In 1500-Competitor Tournaments: Earned 7 Top 10, 12 Top 20, and 28 Top 50 placements.</li>
            <li>Expanded operations across British Columbia, Alberta, Ontario, Quebec, and Indonesia.</li>
            <li>Developed a core curriculum that has been adopted by 2 schools for their debate programs.</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Photo Gallery</h2>
          <div className="photo-gallery-grid">
            <div className="gallery-item-container">
              <img src={risevan2025} alt="Vancouver 2025" className="gallery-image" />
              <span className="gallery-caption">Vancouver Round (2025): 88 Silver, 65 Gold, 6 Trophies, and 22 Top 5 placements in a 500+ competitor field.</span>
            </div>
            <div className="gallery-item-container">
              <img src={risedalian2024} alt="Dalian 2024" className="gallery-image" />
              <span className="gallery-caption">Dalian Round (2024): 58 Silver, 49 Gold, 2 Trophies, and 7 Top 10 placements among 1000+ competitors.</span>
            </div>
            <div className="gallery-item-container">
              <img src={riseLjubljana2025} alt="Ljubljana 2025" className="gallery-image" />
              <span className="gallery-caption">Ljubljana Round (2025): 23 Silver, 23 Gold, and 6 Top 10 placements in a 1500+ competitor international tournament.</span>
            </div>
            <div className="gallery-item-container">
              <img src={risetoc2024} alt="Tournament of Champions 2024" className="gallery-image" />
              <span className="gallery-caption">Tournament of Champions (2024): 31 Silver, 18 Gold, and a Top 10 finish in a global field of 1500+ competitors.</span>
            </div>
            <div className="gallery-item-container">
              <img src={risevan2024} alt="Vancouver 2024" className="gallery-image" />
              <span className="gallery-caption">Vancouver Round (2024): 28 Silver, 14 Gold, and 8 Top 10 placements against 500+ competitors.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
