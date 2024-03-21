import './about.css';

function About() {

  return (
    <div className="about" id='about-section'>
        <div className='about-header'>
            <h2>About Niohoggr Software</h2>
        </div>
        <div className='about-content'>
            <div className='about-item'>
                <div className='about-item-content'>
                    <div className='about-item-title'>
                        <h3>Our Mission</h3>
                    </div>
                    <div className='about-item-description'>
                        <p>Revitalizing the gaming industry, one game at a time. Our goal is to make games how they should be. For people to enjoy.</p>
                    </div>
                </div>
                <div className='about-item-image'>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
