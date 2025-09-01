import { useState, useEffect, useRef } from 'react';
import { Bio } from './components/Bio';
import { Timeline, type TimelineEvent } from './components/Timeline';
import { Footer } from './components/Footer';
import { CaseStudy } from './components/CaseStudy';

function App() {
  const [currentView, setCurrentView] = useState<'timeline' | 'caseStudy'>('timeline');
  const [selectedProject, setSelectedProject] = useState<TimelineEvent | null>(null);
  const [theme, setTheme] = useState('dark');

  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the theme class on the body element
    document.body.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleNavigateToCaseStudy = (project: TimelineEvent) => {
    setSelectedProject(project);
    setCurrentView('caseStudy');
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
      rightColumnRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToTimeline = () => {
    setCurrentView('timeline');
    setSelectedProject(null);
  };

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <span className="toggle-thumb"></span>
      </button>
      <div className="main-layout">
        <div className="left-column">
          <Bio/>
        </div>
        <div className="right-column" ref={rightColumnRef}>
          {currentView === 'timeline' ? (
            <Timeline onNavigate={handleNavigateToCaseStudy} />
          ) : (
            selectedProject && <CaseStudy project={selectedProject} onBack={handleNavigateToTimeline} />
          )}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

