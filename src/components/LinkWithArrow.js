import "../styles/link-with-arrow.css";
import NorthEastArrowIcon from "../images/icons/north-east-arrow-icon.svg";

function LinkWithArrow({ linkText }) {
  return (
    <div className="link-with-arrow-container">
      <p>{linkText || "Visit Site"}</p>
      <img src={NorthEastArrowIcon} alt="arrow-icon" />
    </div>
  );
}

export default LinkWithArrow;
