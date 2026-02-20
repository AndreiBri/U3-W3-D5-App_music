import Container from "react-bootstrap/Container";

import "./MyFooter.css";

const MyFooter = () => {
  return (
    <footer className="custom-footer mt-auto py-4 ps-0">
      <Container fluid className="px-3 px-md-4 px-lg-5 text-secondary small text-start">
        <div className="d-flex flex-wrap gap-3 mb-4">
          <a href="#" className="footer-link fw-semibold text-decoration-none">
            Italia
          </a>
          <span className="text-muted">|</span>
          <a href="#" className="footer-link fw-semibold text-decoration-none">
            English (UK)
          </a>
        </div>

        <div className="mb-3">
          Copyright © 2026 <span className="text-light">Apple Inc. </span>Tutti i diritti riservati.
        </div>

        <div className="d-flex flex-wrap gap-3 mb-2">
          <a href="#" className="footer-link text-decoration-none">
            Condizioni dei servizi internet
          </a>
          <span className="text-muted">|</span>
          <a href="#" className="footer-link text-decoration-none">
            Apple Music e privacy
          </a>
          <span className="text-muted">|</span>
          <a href="#" className="footer-link text-decoration-none">
            Avviso sui cookie
          </a>
        </div>

        <div className="d-flex flex-wrap gap-3">
          <a href="#" className="footer-link text-decoration-none">
            Supporto
          </a>
          <span className="text-muted">|</span>
          <a href="#" className="footer-link text-decoration-none">
            Feedback
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default MyFooter;
