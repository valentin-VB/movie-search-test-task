import { useGetMovieDetailsQuery } from "@/redux/moviesApi";
import { useRouter } from "next/router";
import { Box, Container, Typography } from "@mui/material";
import { ListItem } from "./movie.styled";
import MovieInfo from "@/components/MovieInfo/MovieInfo";

function MovieDetails() {
  const { query } = useRouter();
  const { data } = useGetMovieDetailsQuery({ id: query.id });
  console.log("data:", data);

  return (
    data && <Container sx={{paddingTop: "30px"  }}>
      <Box component="ul">
        <Typography component="h1" variant="h3" >{data?.Title}</Typography>
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>{data.Plot}</Typography>
        <ListItem>
                   <MovieInfo title="Actors" info={data?.Actors} ></MovieInfo>
        </ListItem>
        <ListItem>
         <MovieInfo title="Release Date" info={data?.Released} ></MovieInfo>
        </ListItem>
        <ListItem>
          {data?.Ratings.map(({ Source, Value }: {Source: string, Value: string}, index:number ) => <MovieInfo key={index} title={Source} info={Value} ></MovieInfo>)}
        </ListItem>
        
      </Box>
    </Container>
  );
}

export default MovieDetails;
