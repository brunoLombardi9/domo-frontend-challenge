import menuIcon from "/icons/menuIcon.svg";
import twitterIcon from "/icons/twitter.svg";
import instagramIcon from "/icons/instagram.svg";
import linkedinIcon from "/icons/linkedin.svg";
import dribbleIcon from "/icons/dribble.svg";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="d-flex justify-content-between align-items-center px-2 px-md-5 mx-md-2">
      <ul className="d-none d-md-flex align-items-center justify-content-between gap-3">
        <SocialMediaIcons />
      </ul>

      <Link to="/" className="d-flex align-items-center gap-1">
        <img src="icons/logo.svg" alt="Logo" />
        <p className="fw-bold fs-3 my-auto">Comet</p>
      </Link>

      <Button variant="" onClick={handleShow}>
        <img src={menuIcon} alt="menu icon" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header>
          <Button variant="close" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-center align-items-center gap-1">
          {navOptions.map((opt) => (
            <Button
              variant="info"
              key={opt}
              className="py-2 w-100 d-flex justify-content-center"
            >
              <p className="m-auto my-2">Opción {opt}</p>
            </Button>
          ))}

          <ul className="d-flex d-md-none align-items-center gap-3 position-absolute bottom-0 mb-5">
            <SocialMediaIcons />
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;

const navOptions = [1, 2, 3, 4, 5];

const SocialMediaIcons = () => (
  <>
    {socialMedia.map((media) => (
      <li key={media.name}>
        <a target="_blank" href={media.href}>
          <img src={media.icon} alt={media.name} />
        </a>
      </li>
    ))}
  </>
);

const socialMedia = [
  { name: "Twitter", href: "https://x.com", icon: twitterIcon },
  { name: "Instagram", href: "https://instagram.com", icon: instagramIcon },
  { name: "Linkedin", href: "https://linkedin.com", icon: linkedinIcon },
  { name: "Dribble", href: "https://dribble.com", icon: dribbleIcon },
];
