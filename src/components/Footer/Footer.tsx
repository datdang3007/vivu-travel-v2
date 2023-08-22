import { Box, Grid, Typography } from "@mui/material";
import { BoxImage } from "../../ui";
import { useCallback } from "react";
import { COLOR_PALLETTE } from "../../constants/color";

const listCarouselImage = [
  {
    id: 1,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1106580011030421606/dai-noi-hue-1.png",
  },
  {
    id: 2,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1089123119668658206/1098790183240999032/khu-du-lich-binh-chau-1.png",
  },
  {
    id: 3,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1089123119668658206/1098790183240999032/khu-du-lich-binh-chau-1.png",
  },
  {
    id: 4,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1106580011030421606/dai-noi-hue-1.png",
  },
  {
    id: 5,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1089123119668658206/1098790183240999032/khu-du-lich-binh-chau-1.png",
  },
  {
    id: 6,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1089123119668658206/1098790183240999032/khu-du-lich-binh-chau-1.png",
  },
  {
    id: 7,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1106580011030421606/dai-noi-hue-1.png",
  },
  {
    id: 8,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1089123119668658206/1098790183240999032/khu-du-lich-binh-chau-1.png",
  },
  {
    id: 9,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1089123119668658206/1098790183240999032/khu-du-lich-binh-chau-1.png",
  },
  {
    id: 10,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1106580011030421606/dai-noi-hue-1.png",
  },
  {
    id: 11,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1089123119668658206/1098790183240999032/khu-du-lich-binh-chau-1.png",
  },
  {
    id: 12,
    alt: "Đại nội Huế",
    src: "https://cdn.discordapp.com/attachments/1089123119668658206/1098790183240999032/khu-du-lich-binh-chau-1.png",
  },
];

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: COLOR_PALLETTE.PRIMARY,
        overflow: "hidden",
      }}
    >
      <Grid
        item
        container
        xs={12}
        justifyContent={"center"}
        sx={{
          padding: "20px",
          background: "rgba(0,0,0, .16)",
        }}
      >
        <Typography fontSize={"16px"} color={COLOR_PALLETTE.WHITE}>
          © 2023 Copyright: datdang3007@gmail.com
        </Typography>
      </Grid>
    </Box>
  );
};
