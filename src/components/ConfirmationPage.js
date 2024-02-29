import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import "../components/confirmation.css"




const ConfirmationPage = () => {
  const { rocketId, launchDate } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmBooking = () => {
    // After booking confirmation, navigate to the congratulatory page
    navigate(`/Confirmation2/`, {
      state: {
        ...formData,
        rocketId: rocketId,
        launchDate: launchDate,
       } // Pass form data to ConfirmationPage using location state
    });
  };

  return (
    <Container className="Container">
      <Typography variant="h4" gutterBottom>
        Confirm Booking
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              name="firstName"
              fullWidth
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              fullWidth
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
          Booking Details
        </Typography>
        <Typography>
          Rocket ID: {rocketId}
          <br />
          Launch Date: {launchDate}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </Button>
      </form>
    </Container>
  );
};

export default ConfirmationPage;
