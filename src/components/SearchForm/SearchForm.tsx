import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { useGetMoviesByTitleMutation } from "@/redux/moviesApi";
import toast from "react-hot-toast";
import { StyledInput } from "../SearchForm/SearchForm.styled";
import { InputAdornment, IconButton } from "@mui/material";
import Box from "@mui/material/Box";

function SearchForm() {
  const [page, setPage] = useState(1);
  const [getMovies] = useGetMoviesByTitleMutation({ fixedCacheKey: "movies" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async ({ query }: FieldValues) => {
    if (query.trim() === "") return;
    setPage(1);
    try {
      const res: any = await getMovies({ query, page });

      if (res.data.Response === "False") {
        throw new Error(res.data.Error);
      }
    } catch (e: any) {
      console.error(e);
      toast.error(e.message);
    }

    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((data) => {
        handleFormSubmit(data);
      })}
    >
      <StyledInput
        type="text"
        required
        fullWidth
        variant="filled"
        sx={{ paddingRight: "25px" }}
        id="search"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        {...register("query")}
      />
    </Box>
  );
}

export default SearchForm;
