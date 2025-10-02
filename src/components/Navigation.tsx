import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span>Home</span>
        </NavLink>
        <NavLink to="/resilead" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span>Resilead</span>
        </NavLink>
        <NavLink to="/safeplay" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span>SafePlay AI</span>
        </NavLink>
        <NavLink to="/rise-youth" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span>Rise Youth</span>
        </NavLink>
        <NavLink to="/research" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span>Research</span>
        </NavLink>
      </div>
    </nav>
  );
};
