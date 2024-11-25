import React, {useState} from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdOutlineAccountCircle } from "react-icons/md";
import CompanyLogo from "../Assets/Company_logo.png";
import Accountdropdown from ".auth/Accountdropdown";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
    return (

        <header style={styles.header}>
          {/* Link to the homepage */}
          <Link to="/" style={styles.link}>
            <div style={styles.logoContainer}>
              <img
                src={CompanyLogo}
                alt="Company Logo"
                style={styles.logoImage}
              />
              <h1 style={styles.logoText}>PhrasePerfect</h1>
            </div>
          </Link>
          {/* Account Icon and Dropdown */}
            <div
              style={styles.iconContainer}
              onMouseEnter={() => setIsHovered(true)} // Show dropdown on hover
              onMouseLeave={() => setIsHovered(false)} // Hide dropdown when hover ends
            >
              <MdOutlineAccountCircle style={styles.icon} />
              {isHovered && <Accountdropdown />} {/* Show dropdown when hovered */}
            </div>
        </header>
    );
};

const styles = {
  header: {
    position: "fixed", // Keeps the header fixed at the top
    top: 0,
    left: 0,
    width: "100%", // Spans the full width
    height: "60px", // Ensures enough height
    backgroundColor: "#6F469C", // Purple background
    color: "white",
    padding: "0 20px", // Proper padding for alignment
    display: "flex",
    alignItems: "center", // Centers items vertically
    justifyContent: "space-between", // Spacing between logo and icon
    zIndex: 1000, // Ensures the header stays on top
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a shadow for better visibility
  },
  link: {
    textDecoration: "none", // Removes underline from the link
    color: "white", // Ensures the text color matches the design
  },
  logoContainer: {
    display: "flex", // Ensures logo and text are in a row
    alignItems: "center",
    gap: "10px", // Adds space between logo and text
  },
  logoImage: {
    width: "40px", // Adjusted size for the image
    height: "40px",
    borderRadius: "50%", // Makes the image circular
    objectFit: "cover", // Ensures the image fits within the circle
  },
  logoText: {
    fontSize: "1.9rem",
    fontWeight: "bold",
    margin: 0,
  },
  iconContainer: {
    marginRight: "30px", // Ensures proper spacing on the right side
  },
  icon: {
    fontSize: "2.5rem", // Adjusted size for better visibility
    cursor: "pointer",
    color: "white", // White for better contrast on purple background
  },
};

export default Header;
