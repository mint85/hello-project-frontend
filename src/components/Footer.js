
import "../footer.css";
function Footer() {
  return (
      
    <div className="footer">
        
          <div className="github-f">
            <a href="https://github.com/mint85/hello-project-frontend" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github-link"
                className="github-logo"
              />
              
            </a>
            <p className="frontend">Frontend</p>
            
            

            
            <a href="https://github.com/mint85/hello-project-backend" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github-link" 
                className="github-logo2"
              />
              
            </a>
            <p className="backend">Backend</p>
            </div>
       
      
    </div>
  
  );
}
export default Footer;
