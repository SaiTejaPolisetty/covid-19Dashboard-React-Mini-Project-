import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-bg-container">
    <div className="footer-main-container">
      <h1 className="footer-heading">
        COVID19<span className="footer-heading-part-2">INDIA</span>
      </h1>
      <p className="footer-description">
        we stand with everyone fighting on the front lines
      </p>
      <div className="footer-icons-container">
        <a
          href="https://www.google.co.in/"
          title="code of this project"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithubAlt fontSize="46" color="#CBD5E1" />
        </a>
        <FiInstagram fontSize="46" color="#CBD5E1" />
        <FaTwitter fontSize="46" color="#CBD5E1" />
      </div>
    </div>
  </div>
)

export default Footer
