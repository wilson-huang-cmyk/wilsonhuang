import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
        <NavLink to="/resilead" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Resilead
        </NavLink>
        <NavLink to="/safeplay" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          SafePlay AI
        </NavLink>
        <NavLink to="/rise-youth" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Rise Youth
        </NavLink>
        <NavLink to="/research" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Research
        </NavLink>
      </div>
    </nav>
  );
};
