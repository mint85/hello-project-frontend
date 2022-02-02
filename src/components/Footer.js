import { Link } from "react-router-dom";
import "../footer.css";
function Footer() {
  return (
      
    <section className="footer">
        
          <div className="github-f">
            <Link to="https://github.com/mint85/hello-project-frontend">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github-link"
                className="github-logo"
              />
              
            </Link>
            <p className="frontend">Frontend</p>
            </div>
            

            <div className="github-b">
            <Link to="https://github.com/mint85/hello-project-backend">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github-link" 
                className="github-logo2"
              />
              
            </Link>
            <p className="backend">Backend</p>
            </div>
       
      
    </section>
  
  );
}
export default Footer;
