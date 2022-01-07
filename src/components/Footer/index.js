import React from "react";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-primary bg-gradient">
        <div className="container">
          <p className="text-light">
            Made with <FaHeart color="#B51942" /> by Rodrigo Teixeira de Andrade
          </p>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/rodrigo-teixeira-de-andrade/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="40" color="#fff" />
            </a>

            <a
              href="https://github.com/RTAcps/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="40" color="#fff" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
