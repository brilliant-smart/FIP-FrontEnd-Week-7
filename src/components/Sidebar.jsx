import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["dashboard", "patients", "appointments"];
      let currentSection = "dashboard";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sidebar bg-dark text-white p-3">
      <h4 className="mb-4">Menu</h4>
      <ul className="list-unstyled">
        {["dashboard", "patients", "appointments"].map((item) => (
          <li key={item} className="mb-2">
            <button
              className={`btn w-100 ${
                activeSection === item ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item === "dashboard" && <i className="fas fa-chart-line"></i>}
              {item === "patients" && <i className="fas fa-user-injured"></i>}
              {item === "appointments" && (
                <i className="fas fa-calendar-alt"></i>
              )}{" "}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
