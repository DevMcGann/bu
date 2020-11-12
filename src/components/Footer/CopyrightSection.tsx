import React from 'react';
import { default as logo } from '../../images/p-logo-black.png';
import './scss/index.scss';

const CopyrightSection = () => {
  return (
    <div className="copyrightSection">
      <div className="copyrightSection__left">
        <p>Copyright 2020 ©Puzzle</p>
      </div>
      <div className="copyrightSection__center">
        <p>Creado por</p> &nbsp;
        <a href="https://thepuzzle.digital/">
          <img
            className="copyrightSection__logo"
            src={logo}
            alt="footer logo"
          />
        </a>
      </div>
      <div className="copyrightSection__right">
        <p>Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default CopyrightSection;
