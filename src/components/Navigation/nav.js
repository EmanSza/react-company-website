import './nav.css';
import Logo from '../../images/logo.webp';

function Nav() {
  return (
    <div className="navigation">
        <div className='logo nav-list'>
            <img src={Logo} alt='logo' className='logo' />
        </div>
        <div className='links nav-list'>
            <a href='#'>ABOUT</a>
            <a href='#'>WORK</a>
            <a href='#'>TEAM</a>
        </div>
        <div className='nav-contact nav-list'>
            <a href='#'>Work With Us!</a>
        </div>
    </div>
  );
}

export default Nav;
