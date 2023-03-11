import Head from 'next/head'
import SearchForm from '@/components/SearchForm/SearchForm'
import { DefToaster } from '@/components/Toaster'
import MovieList from '@/components/MoviesList/MovieList';
import { Container } from "@mui/material";


export default function Home() {
  return (
    <>
      <Head>
        <title>MovieBase</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      <main>
        <Container maxWidth="xl" sx={{paddingTop: "30px", paddingBottom: "30px"}}>
          <SearchForm />
          <MovieList/>
          <DefToaster/>
        </Container>
      </main>
    </>
  )
}
