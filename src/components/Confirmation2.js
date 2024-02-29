import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import "../components/confirmation2.css"; // Import your CSS file

const Confirmation2 = () => {
  const location = useLocation();
  const { firstName, lastName, email, phoneNumber, rocketId, launchDate } =
    location.state;

  return (
    <Container className="final-confirmation-container">
      <Typography variant="h4" gutterBottom>
        Congratulations on Your Booking!
      </Typography>

      <div className="confirmation-details">
        <Typography>
          <strong>Name:</strong> {firstName} {lastName}
        </Typography>
        <Typography>
          <strong>Email:</strong> {email}
        </Typography>
        <Typography>
          <strong>Phone Number:</strong> {phoneNumber}
        </Typography>
        <Typography>
          <strong>Rocket ID:</strong> {rocketId}
        </Typography>
        <Typography>
          <strong>Launch Date:</strong> {launchDate}
        </Typography>
      </div>

      <Typography className="confirmation-message">
        Thank you for choosing Stellar Launcher! We are thrilled to have you on
        board for this exciting space journey. Get ready for an amazing
        experience!
      </Typography>
    </Container>
  );
};

export default Confirmation2;
