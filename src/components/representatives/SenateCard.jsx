import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import "./RepSenCard.css";

const CustomTypography = styled.div`
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: 22px;
`;

const SenateCard = ({ representative }) => {
  return (
    <div className="card-item">
      <Card
        sx={{
          minWidth: 350,
          maxWidth: 250,
          display: "flex",
          flexDirection: "row",
          boxShadow:
            representative.party === "R"
              ? "4px 4px 12px red"
              : representative.party === "D"
              ? "4px 4px 12px #2366c8"
              : "4px 4px 12px grey",
        }}
      >
        <CardMedia
          sx={{ width: 250, height: 200, maxWidth: 150 }}
          image={`https://www.congress.gov/img/member/${representative.id.toLowerCase()}_200.jpg`}
          title="senate image"
        />
        <div className="card-content">
        <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              minHeight: 150,
              padding: 1, // Remove default padding
              paddingLeft: "10px",
            }}
          >
            <CustomTypography>
              {representative.first_name} {representative.last_name}
            </CustomTypography>
            <Typography variant="body2">
              Party: {representative.party}
            </Typography>
            <Typography variant="body2">
              State: {representative.state}
            </Typography>
          </CardContent>
        <CardActions>
          <Button size="small">
            <Link
              to={`/representatives/${representative.id}`}
              state={{ representative: representative }}
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default SenateCard;
