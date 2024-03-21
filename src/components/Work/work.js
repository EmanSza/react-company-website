import './work.css';

function Work() {
  return (
    <div className="work">
        <div className='work-content'>
            <div className='image-carousel'>
                <div className='carousel-track'>
                    {/* First set of images */}
                    <img src={require('../../images/Companys/treyarch.png')} alt='treyarch' className='com-logo'/>
                    <img src={require('../../images/Companys/steam.png')} alt='steam' className='com-logo' />
                    <img src={require('../../images/Companys/ea.png')} alt='electronic-arts' className='com-logo' />
                    <img src={require('../../images/Companys/treyarch.png')} alt='treyarch' className='com-logo'/>
                    <img src={require('../../images/Companys/steam.png')} alt='steam' className='com-logo' />
                    <img src={require('../../images/Companys/ea.png')} alt='electronic-arts' className='com-logo' />

                    
                </div>
            </div>
            <div className='placeholder-text'>
                Here is some placeholder text. Replace this with whatever you want.
            </div>
        </div>
    </div>
  );
}

export default Work;
