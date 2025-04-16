import "./Footer.css"


const Footer = () => {
    
    const currentYear = new Date().getFullYear();
    const lnUrl = "https://linkedin.com/in/svitlana-murasheva-328571232";
    const ghUrl = "https://github.com/svmurasheva";
    
    return(
      <footer className="footer-main-box">
        <h4>{`Ⓒ  ComIT React JS course. Final project, created by Svitlana Murasheva, Winnipeg ${currentYear}`}</h4>
        <h4><u>You can reach me here </u>
          <div>
            <a href={lnUrl} target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={ghUrl} target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </h4>
      </footer>
    );
  };
  
  export default Footer;