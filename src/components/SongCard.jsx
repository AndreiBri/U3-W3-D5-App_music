import { Card } from "react-bootstrap";

const SongCard = ({ title = "Song Placeholder", artist = "Artist Placeholder", cover, explicit = false }) => {
  return (
    <Card bg="dark" text="light" className="border-0 h-100">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={cover || "https://via.placeholder.com/300x300?text=♪"}
          className="rounded-4"
          style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
        />
        {explicit && (
          <Badge bg="secondary" className="position-absolute top-0 end-0 m-2" style={{ fontSize: "0.65rem" }}>
            E
          </Badge>
        )}
      </div>
      <Card.Body className="p-2 pt-3">
        <Card.Title className="fs-6 mb-1 text-truncate">{title}</Card.Title>
        <Card.Text className="text-secondary small mb-0 text-truncate">{artist}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SongCard;
