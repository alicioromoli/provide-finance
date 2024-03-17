import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

export const LenderCard = ({
  imgUrl = "",
  desc = "",
  title = "",
  toUrl = "",
}) => {
  return (
    <Link
      href={`${toUrl}`}
      style={{ textDecoration: "none" }}
      className="lender-card"
    >
      <Card
        sx={{
          maxWidth: 600,
          height: 386,
          "&:hover": {
            opacity: "0.7",
          },
        }}
      >
        <CardHeader
          title={title}
          className="lender-title"
          titleTypographyProps={{
            sx: {
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              height: "65px",
            },
          }}
        />
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            paddingInline: "16px",
            boxSizing: "border-box",
          }}
          height="190"
          image={imgUrl}
          alt={title}
        />
        <CardContent>
          <Typography
            variant="body2"
            className="lender-description"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LenderCard;
