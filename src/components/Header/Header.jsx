import React, { useState } from 'react';
import './Header.css';
import DisplayMenu from '../DisplayMenu/DisplayMenu';
import { SVG_ICONS } from '../../constants/icons';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <button
        className="display-button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="display-icon">
          <img src={SVG_ICONS.general.Display} alt="Display Icon" />
        </span>
        <span>Display</span>
        <span className="arrow-icon">
          <img src={SVG_ICONS.general.Down} alt="Down Arrow Icon" />
        </span>
      </button>
      {showMenu && <DisplayMenu onClose={() => setShowMenu(false)} />}
    </header>
  );
}

export default Header;