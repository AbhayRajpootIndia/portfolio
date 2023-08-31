import "../styles/link-with-arrow.css";
import NorthEastArrowIcon from "../images/icons/north-east-arrow-icon.svg";

function LinkWithArrow({ linkText, link }) {
  return (
    <a
      href={link}
      target="_blank"
      style={{ textDecoration: "none" }}
      rel="noreferrer"
    >
      <div className="link-with-arrow-container">
        <p>{linkText || "Visit Site"}</p>
        <img src={NorthEastArrowIcon} alt="arrow-icon" />
      </div>
    </a>
  );
}

export default LinkWithArrow;
