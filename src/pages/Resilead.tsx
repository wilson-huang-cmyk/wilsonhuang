import resilead from '../assets/resilead.png';

export const Resilead = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <p className="project-category">Founder & CEO | Global Microfinance</p>
        <h1 className="project-title">Resilead</h1>
        <p className="project-date">2024 - Present</p>
      </header>

      <img src={resilead} alt="Resilead" className="project-hero-image" />

      <div className="project-content">
        <div className="project-section">
          <h2>Overview</h2>
          <p>
            Launched a UN-recognized business incubator, empowering 1,100+ young entrepreneurs in 35+ countries through microfinance and advocacy.
          </p>
        </div>

        <div className="project-section">
          <h2>The Challenge</h2>
          <p>
            Young entrepreneurs, especially in developing or post-conflict regions, face insurmountable barriers to accessing capital, mentorship, and global platforms to scale their ventures.
          </p>
        </div>

        <div className="project-section">
          <h2>Our Solution</h2>
          <p>
            Resilead provides accessible microloans and need-based financing through a structured support system. We established the COLLABOR8 Framework for advocacy and education, and as a founding partner with the UN Department of Peacekeeping Operations, we amplify youth voices from war-torn regions at major UN forums.
          </p>
        </div>

        <div className="project-section">
          <h2>My Role & Contribution</h2>
          <p>
            As Founder and CEO, I drove the strategic vision, from establishing partnerships with 6+ international organizations to leading fundraising and program design. I additionally collaborated with the UN DPO, raising over $5,000 for youth representation, and assisted in launching the South Sudan Women's Economic Empowerment Microgrant Program to provide capital and training to female entrepreneurs.
          </p>
        </div>

        <div className="project-section">
          <h2>Key Outcomes</h2>
          <ul>
            <li>Empowered over 1,100 young leaders across 35+ countries.</li>
            <li>Recognized by the UN DPO as the South Sudan's first high-school-led business incubator program.</li>
            <li>Successfully funded more than 20 distinct youth-led entrepreneurial projects.</li>
            <li>Raised over $5,000 USD, enabling UN forum representation for leaders from Liberia, Kosovo, and Côte d'Ivoire.</li>
            <li>Assisted in launching a microgrant program providing $150 grants and business training to 20 women in South Sudan.</li>
            <li>Planning expansion into Central Africa in 2026.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
