import React from "react";

const App = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#004d40",
      backgroundColor: "#f8f8f8",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    },
    header: {
      background: "white",
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "4px solid #004d40",
      flexWrap: "wrap"
    },
    logoTitle: {
      display: "flex",
      alignItems: "center"
    },
    logo: {
      height: "50px",
      marginRight: "10px"
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.2rem",
      color: "#004d40"
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap"
    },
    navLink: {
      textDecoration: "none",
      color: "#004d40",
      fontWeight: "bold"
    },
    dropbtn: {
      background: "none",
      border: "none",
      color: "#004d40",
      fontWeight: "bold",
      cursor: "pointer"
    },
    dropdown: {
      position: "relative"
    },
    dropdownContent: {
      display: "none",
      position: "absolute",
      backgroundColor: "white",
      minWidth: "160px",
      border: "1px solid #ccc",
      zIndex: 1,
      top: "100%"
    },
    dropdownContentVisible: {
      display: "block"
    },
    dropdownLink: {
      color: "#004d40",
      padding: "10px",
      textDecoration: "none",
      display: "block"
    },
    content: {
      padding: "20px",
      flex: 1
    },
    programBox: {
      background: "white",
      border: "1px solid #ddd",
      padding: "20px",
      marginBottom: "20px",
      borderLeft: "5px solid #004d40",
      borderRadius: "5px"
    },
    footer: {
      background: "white",
      padding: "15px",
      textAlign: "center",
      color: "#004d40",
      fontWeight: "bold",
      borderTop: "4px solid #004d40"
    }
  };

  const handleDropdownToggle = () => {
    const dropdown = document.getElementById("dropdown-content");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoTitle}>
          <img src="/amu-logo.png" alt="AMU Logo" style={styles.logo} />
          <span style={styles.title}>ALIGARH MUSLIM UNIVERSITY</span>
        </div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>
            Home
          </a>
          <a href="#" style={styles.navLink}>
            About
          </a>
          <a href="#" style={styles.navLink}>
            Programs
          </a>
          <a href="#" style={styles.navLink}>
            Faculty
          </a>
          <a href="#" style={styles.navLink}>
            Contact
          </a>
          <div style={styles.dropdown}>
            <button onClick={handleDropdownToggle} style={styles.dropbtn}>
              Links ▾
            </button>
            <div id="dropdown-content" style={styles.dropdownContent}>
              <a href="#" style={styles.dropdownLink}>
                Library
              </a>
              <a href="#" style={styles.dropdownLink}>
                SWAYAM
              </a>
              <a href="#" style={styles.dropdownLink}>
                Exam Portal
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.content}>
        <h2>Post-Graduate Programs in Computer Science</h2>

        <div style={styles.programBox}>
          <h3>Program Name: M.Sc. Cyber Security & Digital Forensics</h3>
          <p>
            <strong>Number of Seats:</strong> 30
          </p>
          <p>
            <strong>Duration:</strong> 2 Years
          </p>
          <p>
            <strong>Open Requirement:</strong> BSc (with relevant subjects)
          </p>

          <h4>Program Educational Objectives (PEOs):</h4>
          <ul>
            <li>
              PEO1: Provide deep insight into cyber systems, vulnerabilities,
              and protection mechanisms.
            </li>
            <li>
              PEO2: Prepare professionals for roles in research, industry, or
              government.
            </li>
          </ul>

          <h4>Program Outcomes (POs):</h4>
          <ul>
            <li>
              PO1: Apply knowledge of computing and mathematics to cybersecurity
            </li>
            <li>
              PO2: Analyze problems and determine computing requirements
            </li>
            <li>
              PO3: Design and evaluate secure computer-based systems
            </li>
            <li>PO4: Function effectively on teams</li>
            <li>PO5: Communicate effectively with a range of audiences</li>
          </ul>
        </div>

        <div style={styles.programBox}>
          <h3>
            Program Name: M.Sc. in Cyber Security & Digital Forensics (Weekend
            Program)
          </h3>
          <p>
            <strong>Number of Seats:</strong> 30
          </p>
          <p>
            <strong>Duration:</strong> 2 Years (Weekend only)
          </p>
          <p>
            <strong>Open Requirement:</strong> BSc/BTech in relevant discipline
          </p>

          <h4>Program Educational Objectives (PEOs):</h4>
          <ul>
            <li>
              PEO1: Prepare working professionals for advanced roles in
              cybersecurity.
            </li>
            <li>
              PEO2: Ensure industry-ready skills in forensics and system
              security.
            </li>
          </ul>

          <h4>Program Outcomes (POs):</h4>
          <ul>
            <li>PO1: Use advanced tools for digital forensics</li>
            <li>PO2: Conduct independent cybersecurity research</li>
            <li>
              PO3: Communicate findings to technical and non-technical
              audiences
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Aligarh Muslim University | All rights
        reserved
      </footer>
    </div>
  );
};

export default App;
