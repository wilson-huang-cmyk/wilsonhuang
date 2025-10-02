import safeplay from '../assets/safeplay.png';

export const SafePlay = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <p className="project-category">Co-Founder & CPO | AI Startup</p>
        <h1 className="project-title">SafePlay AI</h1>
        <p className="project-date">July 2025 - Present</p>
      </header>

      <img src={safeplay} alt="SafePlay AI" className="project-hero-image" />

      <div className="project-content">
        <div className="project-section">
          <h2>Overview</h2>
          <p>
            Co-founded an AI venture to protect young gamers from online threats, winning Best Pitch and Entrepreneurial Excellence at LaunchX.
          </p>
        </div>

        <div className="project-section">
          <h2>The Challenge</h2>
          <p>
            Online gaming communities are rife with sophisticated threats, including coded predatory language, grooming, and cyberbullying, which traditional moderation tools often miss.
          </p>
        </div>

        <div className="project-section">
          <h2>Our Solution</h2>
          <p>
            SafePlay AI is a comprehensive safety platform that uses a multi-modal approach—processing in-game text, voice (future), and screen content (OCR) in real-time. Our NLP models are fine-tuned to detect nuanced and coded threats, providing immediate alerts to a parent-controlled dashboard.
          </p>
        </div>

        <div className="project-section">
          <h2>My Role & Contribution</h2>
          <p>
            As Co-Founder and Chief Product Officer, I led the product strategy from ideation to MVP. I conducted market research, defined the core feature set, and designed the user experience for the parent-facing web and mobile applications. I coordinated with the development team to ensure our product vision was realized and also assisted in crafting our winning pitch at LaunchX.
          </p>
        </div>

        <div className="project-section">
          <h2>Key Outcomes</h2>
          <ul>
            <li>Awarded "Best Pitch" and "Entrepreneurial Excellence" at the 2025 LaunchX Bay Area Program.</li>
            <li>Successfully developed and launched a validated MVP with initial customer sales and traction.</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Tailwind CSS</span>
            <span className="tech-tag">Flask</span>
            <span className="tech-tag">Supabase</span>
            <span className="tech-tag">Stripe</span>
          </div>
        </div>
      </div>
    </div>
  );
};
