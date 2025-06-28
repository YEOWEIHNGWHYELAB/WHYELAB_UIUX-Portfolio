import React from "react";
import { Box, Tooltip } from "@mui/material";

type TechStackIconsProp = {
  icons: {
    name: string;
    src: string;
  }[];
};

const TechStackIcon: React.FC<TechStackIconsProp> = ({ icons }) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        gap: 2,
        mt: 2,
        p: 2,
        borderRadius: 2,
        bgcolor: "#808080",
        boxShadow: 2,
        scrollbarWidth: "thin",
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
              display: "inline-block",
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

export default TechStackIcon;
