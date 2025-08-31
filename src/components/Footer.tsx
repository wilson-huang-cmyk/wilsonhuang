// src/components/Footer.tsx
export const Footer = () => {
  // This function scrolls the page to the top smoothly.
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="about">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Wilson Huang. All Rights Reserved.</p>
          <a href="#" onClick={scrollToTop} className="back-to-top">
            Back to Top ↑
          </a>
        </div>
    </footer>
  );
};
