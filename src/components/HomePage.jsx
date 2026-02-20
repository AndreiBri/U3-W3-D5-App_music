import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongCard from "../components/SongCard";
import MyFooter from "./MyFooter";

import "./HomePage.css";

import StaticImgLeft from "../assets/images/1a.png";
import StaticImgRight from "../assets/images/1b.png";
import img1 from "../assets/images/2a.png";
import img2 from "../assets/images/2b.png";
import img3 from "../assets/images/2c.png";
import img4 from "../assets/images/2d.png";
import img5 from "../assets/images/2e.png";
import img6 from "../assets/images/2f.png";

import { FiArrowRight } from "react-icons/fi";
import { fetchNewReleases } from "../redux/actions";
import DesktopTopNav from "./DesktopTopNav";

const HomePage = function ({ className }) {
  const dispatch = useDispatch();
  const { newReleases, loading, error } = useSelector((state) => state.deezer);

  useEffect(() => {
    dispatch(fetchNewReleases());
  }, [dispatch]);

  return (
    <>
      <div className="d-none d-lg-block mb-5 bg-dark border-bottom border-secondary-subtle">
        <DesktopTopNav />
      </div>
      <section className={className}>
        <div className="mx-4 mt-3 mt-lg-0 text-light">
          <h1>Novità</h1>
          <hr />
        </div>

        <Container className="mb-5">
          <Row className="g-3">
            <Col xs={12} md={6}>
              <div className="radio-card">
                <div className="content">
                  <small className="text-secondary">NUOVA STAZIONE RADIO</small>
                  <h5 className="mt-1">Rilassati, al resto pensiamo noi.</h5>
                  <p className="mb-3">Ascolta Apple Music Chill</p>
                </div>
                <img src={StaticImgLeft} className="img-fluid rounded-4" alt="" />
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div className="radio-card">
                <div className="content">
                  <small className="text-secondary">NUOVA STAZIONE RADIO</small>
                  <h5 className="mt-1">Ecco la nuova casa latina</h5>
                </div>
                <img src={StaticImgRight} className="img-fluid rounded-4" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <h3 className="text-light mb-3">Nuovi episodi radio</h3>
            <a href="/all" className="text-light text-decoration-none align-top ms-2">
              <FiArrowRight size={24} className="arrowright" />
            </a>
          </div>

          <Row>
            <Col xs={4} md={2} className="col-text d-block">
              <Card bg="dark" text="light" className="border-0">
                <Card.Img variant="top" src={img1} className="rounded-4" />
                <Card.Body className="p-2">
                  <div className="d-flex justify-content-between align-items-start">
                    <Card.Text className="mb-0 me-2 song-text" style={{ lineHeight: "1.2" }}>
                      Michael Bublé & Carly Pearce
                    </Card.Text>
                    <Badge bg="secondary">E</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={4} md={2} className="col-text d-block">
              <Card bg="dark" text="light" className="border-0">
                <Card.Img variant="top" src={img2} className="rounded-4" />
                <Card.Body className="p-2">
                  <div className="d-flex justify-content-between align-items-start">
                    <Card.Text className="mb-0 me-2 song-text" style={{ lineHeight: "1.2" }}>
                      Prólogo con Abuelo
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={4} md={2} className="col-text d-block">
              <Card bg="dark" text="light" className="border-0">
                <Card.Img variant="top" src={img3} className="rounded-4" />
                <Card.Body className="p-2">
                  <div className="d-flex justify-content-between align-items-start">
                    <Card.Text className="mb-0 me-2 song-text" style={{ lineHeight: "1.2" }}>
                      Michael Bublé & Carly Pearce
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={4} md={2} className="col-text d-none d-md-block">
              <Card bg="dark" text="light" className="border-0">
                <Card.Img variant="top" src={img4} className="rounded-4" />
                <Card.Body className="p-2">
                  <div className="d-flex justify-content-between align-items-start">
                    <Card.Text className="mb-0 me-2 song-text" style={{ lineHeight: "1.2" }}>
                      Setphan Moccio
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={4} md={2} className="col-text d-none d-md-block">
              <Card bg="dark" text="light" className="border-0">
                <Card.Img variant="top" src={img5} className="rounded-4" />
                <Card.Body className="p-2">
                  <div className="d-flex justify-content-between align-items-start">
                    <Card.Text className="mb-0 me-2 song-text" style={{ lineHeight: "1.2" }}>
                      Chart Spotlight
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={4} md={2} className="col-text d-none d-md-block">
              <Card bg="dark" text="light" className="border-0">
                <Card.Img variant="top" src={img6} className="rounded-4" />
                <Card.Body className="p-2">
                  <div className="d-flex justify-content-between align-items-start">
                    <Card.Text className="mb-0 me-2 song-text" style={{ lineHeight: "1.2" }}>
                      Podcast Live
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <h3 className="text-light mb-3">Nuove uscite {newReleases.length > 0 ? `– ${newReleases[0].artist?.name || "Artista"}` : ""}</h3>
            <a href="/all" className="text-light text-decoration-none align-top ms-2">
              <FiArrowRight size={24} className="arrowright" />
            </a>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Caricamento...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center">{error}</div>
          ) : newReleases.length === 0 ? (
            <div className="text-center py-5 text-secondary">Nessun brano trovato al momento</div>
          ) : (
            <Row className="g-3">
              {newReleases.slice(0, 12).map((track, index) => (
                <Col
                  key={track.id}
                  xs={4} // 3 card per riga su mobile
                  md={2} // 6 card per riga da md in su
                  // Nascondi le card dalla 7 in poi SOLO su mobile (xs/sm)
                  className={
                    index >= 6
                      ? "d-none d-md-block" // invisibili su < md, visibili da md in su
                      : "" // sempre visibili
                  }
                >
                  <SongCard
                    title={track.title}
                    artist={track.artist?.name || "Stray Kids"}
                    cover={track.album?.cover_medium}
                    explicit={track.explicit_lyrics}
                  />
                </Col>
              ))}

              {/* Placeholder: riempi fino a 12 solo dove serve */}
              {newReleases.length < 12 &&
                Array.from({ length: 12 - newReleases.length }).map((_, i) => {
                  const index = newReleases.length + i;
                  return (
                    <Col key={`ph-${i}`} xs={4} md={2} className={index >= 6 ? "d-none d-md-block" : ""}>
                      <SongCard /> {/* placeholder vuoto/grigio */}
                    </Col>
                  );
                })}
            </Row>
          )}
        </Container>
        <section className="mx-3">
          <h2 className="mb-4">Altro da esplorare</h2>
          <Container className="mb-5">
            <Row className="g-2">
              <Col xs={12} md={4}>
                <Button className="my-custom-button py-3">
                  <h3>Esplora per genere</h3>
                  <a href="/all" className="text-light text-decoration-none align-top ms-2">
                    <FiArrowRight stroke="rgb(250, 88, 106)" size={24} className="arrowright" />
                  </a>
                </Button>
              </Col>
              <Col xs={12} md={4}>
                <Button className="my-custom-button py-3">
                  <h3>Worldwide</h3>
                  <a href="/all" className="text-light text-decoration-none align-top ms-2">
                    <FiArrowRight stroke="rgb(250, 88, 106)" size={24} className="arrowright" />
                  </a>
                </Button>
              </Col>
              <Col xs={12} md={4}>
                <Button className="my-custom-button py-3">
                  <h3>Video musicali</h3>
                  <a href="/all" className="text-light text-decoration-none align-top ms-2">
                    <FiArrowRight stroke="rgb(250, 88, 106)" size={24} className="arrowright" />
                  </a>
                </Button>
              </Col>
              <Col xs={12} md={4}>
                <Button className="my-custom-button py-3">
                  <h3>Decenni</h3>
                  <a href="/all" className="text-light text-decoration-none align-top ms-2">
                    <FiArrowRight stroke="rgb(250, 88, 106)" size={24} className="arrowright" />
                  </a>
                </Button>
              </Col>
              <Col xs={12} md={4}>
                <Button className="my-custom-button py-3">
                  <h3>Classifiche</h3>
                  <a href="/all" className="text-light text-decoration-none align-top ms-2">
                    <FiArrowRight stroke="rgb(250, 88, 106)" size={24} className="arrowright" />
                  </a>
                </Button>
              </Col>
              <Col xs={12} md={4}>
                <Button className="my-custom-button py-3">
                  <h3>Nuovi artisti</h3>
                  <a href="/all" className="text-light text-decoration-none align-top ms-2">
                    <FiArrowRight stroke="rgb(250, 88, 106)" size={24} className="arrowright" />
                  </a>
                </Button>
              </Col>
              <Col xs={12} md={4}>
                <Button className="my-custom-button py-3">
                  <h3>Attivitá e stati d'animo</h3>
                  <a href="/all" className="text-light text-decoration-none align-top ms-2">
                    <FiArrowRight stroke="rgb(250, 88, 106)" size={24} className="arrowright" />
                  </a>
                </Button>
              </Col>
              <Col xs={12} md={4}>
                <Button className="my-custom-button py-3">
                  <h3>Audio spaziale</h3>
                  <a href="/all" className="text-light text-decoration-none align-top ms-2">
                    <FiArrowRight stroke="rgb(250, 88, 106)" size={24} className="arrowright" />
                  </a>
                </Button>
              </Col>
              <Col xs={12} md={4}>
                <Button className="my-custom-button py-3">
                  <h3>Hit del passato</h3>
                  <a href="/all" className="text-light text-decoration-none align-top ms-2">
                    <FiArrowRight stroke="rgb(250, 88, 106)" size={24} className="arrowright" />
                  </a>
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="d-none d-md-block">
          <MyFooter />
        </div>
      </section>
    </>
  );
};

export default HomePage;
