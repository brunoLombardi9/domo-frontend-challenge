import { Button } from "react-bootstrap";
import Linkedin from "/icons/linkedin.svg";
import LinkIcon from "/icons/link.svg";
const Footer = () => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center gap-3 p-5 text-center">
      <p className="fw-bold display-3">Bruno Lombardi</p>
      <p id="footerText">
        El proyecto está hecho en React.Js para podes usar los componentes y
        hooks del proyecto de forma modular, los estilos fueron hechos usando
        Bootstrap y Sass (este último para editar algunas variables de
        Bootstrap)
      </p>
      <div className="d-flex gap-3">
        {contactInfo.map((c) => (
          <a href={c.href} target="_blank" key={c.name}>
            <Button key={c.name} variant="light" className="rounded-circle py-2">
              <img src={c.icon} alt={c.alt} />
            </Button>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

const contactInfo = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/bruno-lombardi-1b81b723a/",
    icon: Linkedin,
    alt: "Ícono de Linkedin",
  },
  {
    name: "Sitio personal",
    href: "https://www.brunolombardidev.com.ar/",
    icon: LinkIcon,
    alt: "Ícono de sitio personal",
  },
];
