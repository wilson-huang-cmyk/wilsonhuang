import book from '../assets/book-cover.png';
import bookimg1 from '../assets/bookimg1.png';
import bookimg2 from '../assets/bookimg2.png';

export const Research = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <p className="project-category">Author & Researcher</p>
        <h1 className="project-title">Book & Research</h1>
        <p className="project-date">2025</p>
      </header>

      <div className="project-content">
        <div className="project-section">
          <h2>#1 Bestselling Author: "Big Pharmamania"</h2>
          <img src={book} alt="Big Pharmamania Book Cover" className="project-inline-image" />
          <p className="project-subtitle">Legal Studies & Social Commentary | Spring 2025</p>
        </div>

        <div className="project-section">
          <h2>Overview</h2>
          <p>
            Authored and published a #1 Amazon Bestseller on pharmaceutical industry corruption, earning endorsements from academics at York and Cambridge and praise from over 260+ buyers.
          </p>
        </div>

        <div className="project-section">
          <h2>The Challenge</h2>
          <p>
            Public discourse surrounding the pharmaceutical industry and its role in global health crises is often polarized and lacks a clear, evidence-based analysis accessible to a general audience.
          </p>
        </div>

        <div className="project-section">
          <h2>My Approach</h2>
          <p>
            I undertook a rigorous research process to write "Big Pharmamania," a book that breaks down complex legal and ethical issues into a compelling narrative. It combines business ethics, scientific analysis, and social commentary to expose monopolistic practices and advocate for systemic reform in public health.
          </p>
        </div>

        <div className="project-section">
          <h2>My Role</h2>
          <p>
            As the author, I managed the entire project lifecycle, from initial concept to publication. My research and writing were assisted by two distinguished academic mentors — one holding an M.A. Hons from St. John's College, Cambridge with over 25 years of experience in history and literature, and another with a Ph.D. in Philosophy from York University and more than a decade of expertise in ethics, political theory, and law. I personally handled the manuscript editing, Amazon KDP publishing, and distribution.
          </p>
        </div>

        <div className="project-section">
          <h2>Key Outcomes</h2>
          <ul>
            <li>Achieved #1 Bestseller status in the Legal Studies category on Amazon.ca in Spring 2025.</li>
            <li>Received powerful endorsements from academics at York University and Cambridge.</li>
            <li>Trusted by over 260 buyers, many of whom praised its factual, evidence-based analysis of a complex and politically divisive issue.</li>
            <li>Available on Amazon: <a href="https://www.amazon.ca/Big-Pharmamania-Corruption-Pharmaceutical-Industry/dp/B0DSV5MX5D" target="_blank" rel="noopener noreferrer" className="project-link">View on Amazon</a></li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Photo Gallery</h2>
          <div className="photo-gallery-grid">
            <div className="gallery-item-container">
              <img src={bookimg1} alt="Students with signed copies" className="gallery-image" />
              <span className="gallery-caption">Students with signed copies of the book.</span>
            </div>
            <div className="gallery-item-container">
              <img src={bookimg2} alt="Distributed signed versions" className="gallery-image" />
              <span className="gallery-caption">Distributed and signed versions for students.</span>
            </div>
          </div>
        </div>

        <div className="project-section research-divider">
          <h2>AI in the Gig Economy</h2>
          <p className="project-subtitle">Independent Researcher | University of Leeds | Summer 2025</p>
        </div>

        <div className="project-section">
          <h2>Overview</h2>
          <p>
            Led an independent research project under faculty mentorship, handling the full research lifecycle from literature review and data analysis (Excel, Jamovi) to writing a full paper for potential peer review.
          </p>
        </div>
      </div>
    </div>
  );
};
