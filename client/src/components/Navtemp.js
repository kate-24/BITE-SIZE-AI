import React from "react";

function Navtemp() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.brand_container}>
          <a href="#home" style={styles.brand}>
            <img src="/bs_logo.jpg" alt="Logo" style={styles.logo} />
          </a>
          <span style={styles.companyName}>Bite Size</span>
        </div>
        <div style={styles.navLinks}>
          <a
            href="#home"
            style={{
              ...styles.navLink,
              color: "#FFA500",
              fontFamily: "SF Pro Text, Arial, sans-serif",
              fontWeight: "bold",
            }}
          >
            Home
          </a>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#343a40",
    padding: "1rem",
    boxShadow: "0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.6)", // Drop shadow
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Center vertically
  },
  brand_container: {
    display: "flex",
    alignItems: "center", // Center vertically
  },
  brand: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center", // Center vertically
    fontWeight: "bold",
  },
  logo: {
    height: "40px", // Adjust the height as per your logo size
    marginRight: "0.5rem", // Space between logo and company name
  },
  companyName: {
    color: "#FFA500", // Darkish orange color
    fontSize: "1.7rem",
    fontWeight: "bold",
    fontFamily: "SF Pro Text, Arial, sans-serif", // Apple default font
    marginLeft: "0.5rem", // Space between logo and company name
  },
  navLinks: {
    display: "flex",
    alignItems: "center", // Center vertically
  },
  navLink: {
    color: "#FFA500", // Darkish orange color
    textDecoration: "none",
    marginLeft: "1rem",
    fontFamily: "SF Pro Text, Arial, sans-serif", // Apple default font
    fontWeight: "bold",
    marginRight: "1.2rem"
  },
};

export default Navtemp;
