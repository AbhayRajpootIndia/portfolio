import "../styles/aboutme-page.css";

function AboutMePage() {
  return (
    <div className="page-container">
      <div className="aboutme-page">
        <img
          src={require("../images/abhay-portrait-with-art.png")}
          alt="Abhay Kumar Portrait"
        />
        <div className="aboutme-content">
          <p>About Me</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque.
            <br></br>
            <br></br>
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis
            consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
            mi a, euismod risus r.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
