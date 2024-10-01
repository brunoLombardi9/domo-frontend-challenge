import { useState } from "react";
import useGetAnimation from "../hooks/useGetFadeAnimation";
import fingerTip from "/icons/fingerTip.svg";
import phone from "/icons/phone.svg";
import { Link } from "react-router-dom";

const Main = () => {
  const { ref, animationClass, delays } = useGetAnimation();
  return (
    <main id="mainGrid" className="px-4">
      <div className="d-flex flex-column justify-content-center px-1" ref={ref}>
        <p className={`text-primary fw-bold ${animationClass} ${delays.s}`}>
          Core Features
        </p>
        <h1 className={`fw-bold fs-1 mb-4 ${animationClass} ${delays.s}`}>
          Develop systematically with Comet.
        </h1>
        <h2 className={`fw-bold display-4 mb-5 ${animationClass} ${delays.m}`}>
          Adaptable sections are ideal{" "}
          <span className="text-black-50">for crafting versatile layouts.</span>
        </h2>

        <ul
          className={`d-flex align-items-center gap-5 ${animationClass} ${delays.l}`}
        >
          {features.map((feature) => (
            <li key={feature.alt} className="d-flex flex-column">
              <img src={feature.icon} alt={feature.alt} className="w-25 mb-4" />
              <h3 className="display-5 fw-bold mb-3">{feature.title}</h3>
              <h4 className="display-6 fw-normal mb-3">{feature.description}</h4>
              <FeatureLink />
            </li>
          ))}
        </ul>
      </div>

      <div id="hero" className="rounded-5"/>
    </main>
  );
};

export default Main;

const FeatureLink = () => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to="/"
      className={`d-flex align-items-center fw-bold w-fit ${
        hover && "text-primary"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="text-decoration-underline link-offset-3">Le</span>
      arn more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`ms-2 ${hover ? "arrowHover" : "arrow"}`}
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
      >
        <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
      </svg>
    </Link>
  );
};

const features = [
  {
    title: "System analyze your data",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    icon: fingerTip,
    alt: "Fingertip Icon",
  },
  {
    title: "Direct system management",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    icon: phone,
    alt: "Phone Icon",
  },
];
