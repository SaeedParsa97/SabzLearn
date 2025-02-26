import './Header.css';
import Topbar from '../Topbar/Topbar';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';

const Header = () => {
  return (
    <header className="header">
      <Topbar/>
      <Navbar/>
      <Landing/>
    </header>
  )
};

export default Header;
