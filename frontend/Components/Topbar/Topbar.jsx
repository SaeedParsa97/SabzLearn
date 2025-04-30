import "./Topbar.css";
// import { useContext, useEffect, useState } from "react";
// import AuthContext from "../../src/context/authCpontext";
import { Link } from "react-router-dom";

const Topbar = () => {
  // const authCpontext = useContext(AuthContext);

  const [allTopbarLinks, setAllTopbarLinks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus/topbar`)
      .then((response) => response.json())
      .then((menusData) => setAllTopbarLinks(menusData));
  }, []);

  const getRandomItrmsFromArray = (arr, randomCount) => {
    const shuffed = [...arr].sort(() => 0.5 - Math.random());
    return shuffed.slice(0, randomCount);
  };

  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="top-bar__content">
          <div className="top-bar__right">
            <ul className="top-bar__menu">
              {getRandomItrmsFromArray(allTopbarLinks, 5).map((link) => (
                <li className="top-bar__item">
                  <Link to={link.href} className="top-bar__link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="top-bar__left">
            <div className="top-bar__email">
              <Link to="#" className="top-bar__email-text top-bar__link">
                sabzlearn@gmail.com
              </Link>
              <i className="fas fa-envelope top-bar__email-icon"></i>
            </div>
            <div className="top-bar__phone">
              <Link to="#" className="top-bar__phone-text top-bar__link">
                09921558293
              </Link>
              <i className="fas fa-phone top-bar__phone-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
