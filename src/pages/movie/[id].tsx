import { useGetMovieDetailsQuery } from "@/redux/moviesApi";
import { useRouter } from "next/router";
import { Box, Container, Typography } from "@mui/material";
import { ListItem } from "../../components/MovieInfo/movie.styled";
import MovieInfo from "@/components/MovieInfo/MovieInfo";
import Link from "next/link";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

function MovieDetails() {
  const { query } = useRouter();
  const { data } = useGetMovieDetailsQuery({ id: query.id });

  return (
    <Container sx={{ paddingTop: "20px" }}>
      <Link href="/">
        <KeyboardDoubleArrowLeftIcon
          fontSize="large"
          sx={{
            "&:hover": {
              color: "darkblue",
            },
          }}
        />
      </Link>
      <Container sx={{ paddingTop: "30px" }}>
        {data && data.Response === "True" && (
          <Box component="ul">
            <Typography component="h1" variant="h3">
              {data?.Title}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: "20px" }}>
              {data.Plot}
            </Typography>
            <ListItem>
              <MovieInfo title="Actors" info={data?.Actors}></MovieInfo>
            </ListItem>
            <ListItem>
              <MovieInfo title="Release Date" info={data?.Released}></MovieInfo>
            </ListItem>
            <ListItem>
              {data?.Ratings.map(
                (
                  { Source, Value }: { Source: string; Value: string },
                  index: number
                ) => (
                  <MovieInfo
                    key={index}
                    title={Source}
                    info={Value}
                  ></MovieInfo>
                )
              )}
            </ListItem>
          </Box>
        )}
        {data && data.Response === "False" && (
          <Typography>Oops, Something went wrong</Typography>
        )}
      </Container>
    </Container>
  );
}

export default MovieDetails;
