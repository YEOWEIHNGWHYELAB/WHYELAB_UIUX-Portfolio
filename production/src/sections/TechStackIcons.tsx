import React from "react";
import { Box, Tooltip } from "@mui/material";

type TechStackIconsProps = {
  icons: {
    name: string;
    src: string;
  }[];
};

const TechStackIcons: React.FC<TechStackIconsProps> = ({ icons }) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto", // 👈 Enable horizontal scroll
        whiteSpace: "nowrap", // 👈 Prevent wrapping
        gap: 2,
        mt: 2,
        p: 2,
        borderRadius: 2,
        bgcolor: "#f0f0f0",
        boxShadow: 2,
        scrollbarWidth: "thin", // for Firefox
        "&::-webkit-scrollbar": {
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: "10px",
        },
      }}
    >
      {icons.map((icon, index) => (
        <Tooltip title={icon.name} key={index}>
          <Box
            component="img"
            src={icon.src}
            alt={icon.name}
            sx={{
              width: 40,
              height: 40,
              transition: "transform 0.3s ease",
              display: "inline-block", // 👈 Keep it inline for horizontal scroll
              "&:hover": {
                transform: "scale(1.3)",
                cursor: "pointer",
              },
            }}
          />
        </Tooltip>
      ))}
    </Box>
  );
};

export default TechStackIcons;
