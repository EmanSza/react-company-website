import './nav.css';
import Logo from '../../images/logo.webp';
import { useCallback } from 'react';

function Nav() {
  // Smooth scroll function
  const scrollToSection = useCallback((event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    const targetId = event.currentTarget.getAttribute('href').slice(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="navigation">
        <div className='logo nav-list'>
            <img src={Logo} alt='logo' className='logo' />
        </div>
        <div className='links nav-list'>
            <a href='#about-section' onClick={scrollToSection}>ABOUT</a>
            <a href='#work-section' onClick={scrollToSection}>WORK</a>
            <a href='#team-section' onClick={scrollToSection}>TEAM</a>
        </div>
        <div className='nav-contact nav-list'>
            <a href='#'>Get in Contact!</a>
        </div>
    </div>
  );
}

export default Nav;
