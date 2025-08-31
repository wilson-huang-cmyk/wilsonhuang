import { useState } from 'react';
import { Bio } from './components/Bio';
import { Timeline, type TimelineEvent } from './components/Timeline';
import { Footer } from './components/Footer';
import { CaseStudy } from './components/CaseStudy';

function App() {
  const [currentView, setCurrentView] = useState<'timeline' | 'caseStudy'>('timeline');
  const [selectedProject, setSelectedProject] = useState<TimelineEvent | null>(null);

  const handleNavigateToCaseStudy = (project: TimelineEvent) => {
    setSelectedProject(project);
    setCurrentView('caseStudy');
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const handleNavigateToTimeline = () => {
    setCurrentView('timeline');
    setSelectedProject(null);
  };

  return (
    <div className="main-layout">
      {/* The Bio is always visible on large screens */}
      <div className="left-column">
        <Bio onNavigateHome={handleNavigateToTimeline} />
      </div>

      <div className="right-column">
        {currentView === 'timeline' ? (
          <Timeline onNavigate={handleNavigateToCaseStudy} />
        ) : (
          selectedProject && <CaseStudy project={selectedProject} onBack={handleNavigateToTimeline} />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;

