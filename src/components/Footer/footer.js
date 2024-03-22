import './footer.css';
import { useCallback } from 'react';


function Footer() {
    const scrollToSection = useCallback((event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        const targetId = event.currentTarget.getAttribute('href').slice(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, []);
    
  return (
    <div className='footer'>
        <div className='footer-name'>
            <div className='footer-name-content'>
                <h2>Niohoggr Software</h2> 
                <hr />
            </div>
        </div>
        <div className='footer-links'>
        <a href='#about-section' onClick={scrollToSection}>ABOUT</a>
        <a href='#work-section' onClick={scrollToSection}>WORK</a>
        <a href='#team-section' onClick={scrollToSection}>TEAM</a>
        </div>
        <div className='contact-info'>
            <p>Phone: 555-555-5555</p>
            <p>Email:  company@company.com</p>
            <p>New York, New York</p>
        </div>
        {/* You could add social media logos here, but im too lazy */}
    </div>
  );
}

export default Footer;
