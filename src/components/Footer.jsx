// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// const Footer = () => {
//   return (
//     <footer>
//       <div>MaxOutFitness</div>
//         <div className="footer-social-icons">
//                 <a href="https://github.com/kritikrishnablue" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
//                 <a href="https://linkedin.com/in/kritikrishna079" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
//             </div>
//             <div>kritikrishna2blue © MaxOutFitness - All Right Reserved.</div>
//     </footer>
//   )
// }

//  export default Footer
// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/assets'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footer-content-left">
//             <h1>Foodonclick</h1>
//             <p>This website is made with love by Kriti Krishna.</p>
//             <div className="footer-social-icons">
//                 <a href="https://github.com/kritikrishnablue" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
//                 <a href="https://linkedin.com/in/kritikrishna079" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
//             </div>
//         </div>
//         <div className="footer-content-center">
//             <h2>COMPANY</h2>
//             <ul>
//                 <li><a href="https://github.com/kritikrishnablue" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/>Github</a></li>
//                 <li><a href="https://linkedin.com/in/kritikrishna079" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/>Linkedin</a></li>
//             </ul>
//         </div>
//         <div className="footer-content-right">
//             <h2>GET IN TOUCH</h2>
//             <ul>
//                 {/* <li><a href="tel:+916398220731">+916398220731</a></li> */}
//                 <li><a href="mailto:kritikrishna000@gmail.com">kritikrishna000@gmail.com</a></li>
//             </ul>
//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">kritikrishna2blue © Foodonclick - All Right Reserved.</p>
//     </div>
//   )
// }

// export default Footer
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">MaxOutFitness</h2>

      <div className="footer-social-icons">
        <a
          href="https://github.com/kritikrishnablue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://linkedin.com/in/kritikrishna079"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>

      <p className="footer-text">
        kritikrishna2blue © MaxOutFitness - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
