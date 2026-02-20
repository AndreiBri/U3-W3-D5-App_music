import { Container } from "react-bootstrap";
import { FiSkipBack, FiPlay, FiSkipForward, FiRepeat, FiShuffle } from "react-icons/fi";
import appleLogo from "../assets/logos/apple.svg";

import "./DesktopTopNav.css";

const DesktopTopNav = () => {
  return (
    <nav className="desktop-top-nav  custom-navbar1 border-bottom border-secondary-subtle">
      <Container fluid className="d-flex align-items-center justify-content-between px-4 py-2">
        <div className="controls-left d-flex align-items-center gap-3">
          <button className="btn btn-link px-1 text-light ">
            <FiShuffle size={15} />
          </button>
          <button className="btn btn-link px-1 text-secondary ">
            <FiRepeat size={15} />
          </button>
        </div>

        <div className="player-center d-flex align-items-center gap-4 flex-grow-1 justify-content-center">
          <button className="btn btn-link px-1 text-white ">
            <FiSkipBack size={15} />
          </button>

          <button className="btn btn-link px-1 text-white play-btn">
            <FiPlay size={15} />
          </button>

          <button className="btn btn-link px-1 text-white">
            <FiSkipForward size={15} />
          </button>

          <div className="player-center d-flex align-items-center justify-content-center flex-grow-1 midletopnavbar rounded-3">
            <span className="apple-logo text-white fw-bold fs-3">
              <img src={appleLogo} alt="" />
            </span>{" "}
          </div>
        </div>

        <div className="controls-right d-flex align-items-center gap-4">
          <button className="btn btn-danger rounded-pill px-4 py-1 fw-semibold d-flex align-items-center justify-content-center">
            {" "}
            <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            Accedi
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default DesktopTopNav;
