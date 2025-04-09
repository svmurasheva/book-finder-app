import "./Footer.css"

const Footer = () => {
    
    const currentYear = new Date().getFullYear();
    const footerContent = `${currentYear} `;
    const footerData = `Ⓒ  ComIT React JS course. Final project, created by Svitlana Murasheva, Winnipeg  ${footerContent}`
    const linkedInIcon = <a 
                          href="https://linkedin.com/in/svitlana-murasheva-328571232"
                          target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>;
    const gitHubIcon = <a 
                        href="https://github.com/svmurasheva" 
                        target="_blank">
                          <i className="fa-brands fa-github">
                          </i></a>
    
    return(
      <footer className="footer-main-box">
        <h4>{footerData}</h4>
        <h4><u>You can reach me here </u>
          <div>{linkedInIcon} {gitHubIcon}</div>
        </h4>
      </footer>
    );
  };
  
  export default Footer;