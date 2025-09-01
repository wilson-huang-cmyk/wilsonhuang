import { useState, useRef } from 'react'; // 1. Import useRef
import { Bio } from './components/Bio';
import { Timeline, type TimelineEvent } from './components/Timeline';
import { Footer } from './components/Footer';
import { CaseStudy } from './components/CaseStudy';

function App() {
  const [currentView, setCurrentView] = useState<'timeline' | 'caseStudy'>('timeline');
  const [selectedProject, setSelectedProject] = useState<TimelineEvent | null>(null);

  // 2. Create a ref to hold the right column DOM element
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const handleNavigateToCaseStudy = (project: TimelineEvent) => {
    setSelectedProject(project);
    setCurrentView('caseStudy');

    // 4. Implement conditional scrolling logic
    const isMobile = window.innerWidth <= 1024; // Match this breakpoint to your CSS

    if (isMobile) {
      // On mobile, scroll the top of the right column into view
      rightColumnRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On desktop, scroll the entire window to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToTimeline = () => {
    setCurrentView('timeline');
    setSelectedProject(null);
  };

  return (
    <div className="main-layout">
      <div className="left-column">
        <Bio/>
      </div>

      {/* 3. Attach the ref to the right column div */}
      <div className="right-column" ref={rightColumnRef}>
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