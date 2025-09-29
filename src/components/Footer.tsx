import '/src/styles/Footer.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <footer className="footer">
    <p>Designed and Developed by Bartosz Bachul</p>
    <p>Copyright &copy; 2025 BB</p>
    <div className="footer__links">
      <a href="https://github.com/Kosciarz" className="footer__links__item">
        <FaGithub size={20} />
      </a>
      <a href="https://linkedin.com" className="footer__links__item">
        <FaLinkedin size={20} />
      </a>
      <a href="https://x.com" className="footer__links__item">
        <FaTwitter size={20} />
      </a>
    </div>
  </footer>
)


export default Footer
