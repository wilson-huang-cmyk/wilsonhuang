import { useState, useEffect, useRef } from 'react';
import { Bio } from './components/Bio';
import { Timeline, type TimelineEvent } from './components/Timeline';
import { Footer } from './components/Footer';
import { CaseStudy } from './components/CaseStudy';

function App() {
  const [currentView, setCurrentView] = useState<'timeline' | 'caseStudy'>('timeline');
  const [selectedProject, setSelectedProject] = useState<TimelineEvent | null>(null);
  const [theme, setTheme] = useState('dark'); // 'dark' is the default theme
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // This effect runs when the 'theme' state changes
  useEffect(() => {
    // It removes any existing theme class and adds the current one
    document.body.className = '';
    document.body.classList.add(theme + '-theme');
  }, [theme]);

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

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="main-layout">
      <div className="left-column">
        {/* --- THEME TOGGLE BUTTON --- */}
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <Bio />
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
  );
}

export default App;
