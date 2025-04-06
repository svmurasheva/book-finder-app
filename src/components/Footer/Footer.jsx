import "./Footer.css"

const Footer = () => {
    
    const currentYear = new Date().getFullYear();
    const footerContent = `${currentYear} `;
    const footerData = `Ⓒ  ComIT React JS course. Final project, created by Svitlana Murasheva, Winnipeg  ${footerContent}`
    return (
      <footer>
        <h6>{footerData}</h6>
      </footer>
    );
  };
  
  export default Footer;