import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const menuItems = [
  { id: "hero", label: "Ana Sayfa" },
  { id: "about", label: "Hakkımda" },
  { id: "skills", label: "Yetenekler" },
  { id: "projects", label: "Projeler" },
  { id: "experience", label: "Deneyim" },
  { id: "contact", label: "İletişim" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="container navbar_container">
        <a href="#hero" className="navbar_logo">
          Onur Solmaz
        </a>

        <ul className={`navbar_menu ${menuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar_actions">
          <ThemeToggle />

          <button
            className="menu_button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;