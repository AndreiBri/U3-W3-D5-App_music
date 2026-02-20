import { Nav } from "react-bootstrap";
import { FiSearch, FiHome, FiRadio } from "react-icons/fi";
import { LuLayoutGrid } from "react-icons/lu";
import appleMusicLogo from "../assets/logos/music.png";

import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar d-none d-lg-block custom-navbar text-white position-fixed h-100">
      <div className="sidebar-content p-3 d-flex flex-column h-100">
        {/* Logo Apple Music */}
        <div className="mb-4">
          <img src={appleMusicLogo} alt="Apple Music" className="apple-logo" />
        </div>

        <div className="mb-4">
          <div className="search-bar d-flex align-items-center bg-dark rounded-4 px-3 py-2">
            <FiSearch className="me-2 text-secondary" size={20} />
            <input type="text" placeholder="Cerca" className="bg-transparent border-0 text-white flex-grow-1 outline-none" />
          </div>
        </div>

        <Nav className="flex-column gap-1">
          <Nav.Link href="/" className="sidebar-link d-flex align-items-center py-2 px-3 rounded">
            <FiHome stroke="red" className="me-3" size={24} />
            Home
          </Nav.Link>

          <Nav.Link href="/novita" className="sidebar-link active d-flex align-items-center py-2 px-3 rounded">
            <LuLayoutGrid stroke="red" className="me-3" size={24} />
            Novità
          </Nav.Link>

          <Nav.Link href="/radio" className="sidebar-link d-flex align-items-center py-2 px-3 rounded">
            <FiRadio stroke="red" className="me-3" size={24} />
            Radio
          </Nav.Link>
        </Nav>

        <div className="mt-auto text-secondary small"></div>
      </div>
    </div>
  );
};

export default LeftSidebar;
