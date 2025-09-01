import type { TimelineEvent } from './Timeline';

interface CaseStudyProps {
  project: TimelineEvent;
  onBack: () => void;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ project, onBack }) => {
  if (!project.caseStudy) {
    return (
      <div className="case-study-page">
        <button onClick={onBack} className="back-button">← Back to Timeline</button>
        <p>Case study details are not available for this project.</p>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <button onClick={onBack} className="back-button">← Back to Timeline</button>
      
      <header className="case-study-header">
        <p className="case-study-category">{project.category}</p>
        <h1 className="case-study-title">{project.title}</h1>
        <p className="case-study-date">{project.date}</p>
      </header>

      {/* Optional Hero Image */}
      {project.caseStudy.heroImage && (
        <img src={project.caseStudy.heroImage} alt={`${project.title} hero`} className="case-study-hero-image" />
      )}

      <div className="case-study-content">
        <div className="case-study-section">
          <h2>The Challenge</h2>
          <p>{project.caseStudy.problem}</p>
        </div>

        <div className="case-study-section">
          <h2>Our Solution</h2>
          <p>{project.caseStudy.solution}</p>
        </div>
        
        <div className="case-study-section">
          <h2>My Role & Contribution</h2>
          <p>{project.caseStudy.myRole}</p>
        </div>

        <div className="case-study-section">
          <h2>Key Outcomes</h2>
          <ul>
            {project.caseStudy.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
        
        {project.caseStudy.techStack && (
           <div className="case-study-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
                {project.caseStudy.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
          </div>
        )}

        {/* Optional Photo Gallery */}

        {project.caseStudy.galleryImages && project.caseStudy.galleryImages.length > 0 && (
          <div className="case-study-section">
            <h2>Photo Gallery</h2>
            <div className="photo-gallery-grid">
              {project.caseStudy.galleryImages.map((image, index) => (
                <div key={index} className="gallery-item-container">
                  {/* Access the .src property here */}
                  <img src={image.src} alt={`Gallery image ${index + 1}`} className="gallery-image" />
                  {/* And add the caption logic */}
                  {image.caption && (
                    <span className="gallery-caption">{image.caption}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

