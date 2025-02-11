import React from "react";

const cardStyle = {
  background: "white",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s",
  textAlign: "center"
};

const cardHoverStyle = {
  transform: "scale(1.05)"
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover"
};

const contentStyle = {
  padding: "15px"
};

const titleStyle = {
  margin: "10px 0",
  fontSize: "20px"
};

const subtitleStyle = {
  color: "#777",
  fontSize: "16px",
  margin: "5px 0"
};

const descriptionStyle = {
  fontSize: "14px",
  color: "#333"
};

const priceStyle = {
  fontWeight: "bold",
  color: "#e63946",
  fontSize: "18px"
};

const DestinationCard = ({ image, name, location, description, price }) => {
  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={image} alt={name} style={imageStyle} />
      <div style={contentStyle}>
        <h2 style={titleStyle}>{name}</h2>
        <h3 style={subtitleStyle}>{location}</h3>
        <p style={descriptionStyle}>{description}</p>
        <p style={priceStyle}>{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
