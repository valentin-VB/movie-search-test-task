import { Box, Typography } from "@mui/material";

function MovieInfo({ title, info }: { title: string; info: string }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        sx={{
          fontWeight: 600,
          marginRight: "10px",
        }}
      >
        {`${title}:`}
      </Typography>
      <Typography
        sx={{
          color: "#3CB49A",
        }}
      >
        {info}
      </Typography>
    </Box>
  );
}

export default MovieInfo;
