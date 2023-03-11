import { List, ListItem, MovieInfo, Wrapper } from "./MovieList.styled";
import { useGetMoviesByTitleMutation } from "@/redux/moviesApi";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function MovieList() {
  const [getMovies, { data }] = useGetMoviesByTitleMutation({
    fixedCacheKey: "movies",
  });
  console.log("data:", data);

  return (
    data && data.Response === 'True' && (
      <List>
        {data.Search.map(({ imdbID, Title, Poster, Year }: { imdbID: string, Title: string, Poster: string, Year: string}) => {
          return (
            <ListItem key={imdbID}>
              <Link href={`movie/${imdbID}`}>
                <Wrapper>
                  <Image alt={Title} src={Poster} fill/>
                  <MovieInfo>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                      }}
                    >
                     {`${Title} ${Year}`}
                    </Typography>
                  </MovieInfo>
                </Wrapper>
              </Link>
            </ListItem>
          );
        })}
      </List>
    )
  );
}

export default MovieList;
