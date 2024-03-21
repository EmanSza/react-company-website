import './work.css';

function Work() {
  return (
    <div className="work" id='work-section'>
        <div className='work-content'>
            <div className='work-overlay'>
                <div className='work-header'>
                    <h2>Our Work</h2>
                </div>
                <div className='work-text'>
                    <p>
                        With decades of experience in the gaming industry, we have worked with some of the biggest names in the business.
                    </p>
                </div>
            </div>
            <div className='image-carousel'>
                <div className='carousel-track'>
                    {/* 
                    This Carousel is inspired by Offbrand.gg "WORK Section". We add a Carousel to display the logos of the companies we have "worked" with.
                    This is a mix of the websites WORK Section,
                    Since our logos are not SVGs we will improvise with greyscale, and on hover we remove the greyscale
                    */}
                    <img src={require('../../images/Companys/treyarch.png')} alt='treyarch' className='com-logo'/>
                    <img src={require('../../images/Companys/steam.png')} alt='steam' className='com-logo' />
                    <img src={require('../../images/Companys/ea.png')} alt='electronic-arts' className='com-logo' />
                    <img src={require('../../images/Companys/blizzard.png')} alt='blizzard' className='com-logo' />
                    <img src={require('../../images/Companys/ubisoft.png')} alt='ubisoft' className='com-logo' />
                    <img src={require('../../images/Companys/epic.png')} alt='epic-games' className='com-logo' />
                    <img src={require('../../images/Companys/gameloft.png')} alt='gameloft' className='com-logo' />

                    <img src={require('../../images/Companys/treyarch.png')} alt='treyarch' className='com-logo'/>
                    <img src={require('../../images/Companys/steam.png')} alt='steam' className='com-logo' />
                    <img src={require('../../images/Companys/ea.png')} alt='electronic-arts' className='com-logo' />
                    <img src={require('../../images/Companys/blizzard.png')} alt='blizzard' className='com-logo' />
                    <img src={require('../../images/Companys/ubisoft.png')} alt='ubisoft' className='com-logo' />
                    <img src={require('../../images/Companys/epic.png')} alt='epic-games' className='com-logo' />
                    <img src={require('../../images/Companys/gameloft.png')} alt='gameloft' className='com-logo' />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Work;
