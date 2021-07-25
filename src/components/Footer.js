import React from 'react';
import LogoGit from '../assets/logoGithub.png';
import LogoLink from '../assets/logoLinkedIn.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>
          Made with &#9829; by Juliana Velasques -{' '}
          <a href="https://github.com/JulianaVelasques">
            <img src={LogoGit} height="20px" alt="Logo GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/julianavelasquesbalta/">
            <img src={LogoLink} height="20px" alt="Logo LinkedIn" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
