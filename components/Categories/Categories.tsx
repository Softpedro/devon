import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'; 
import { moviesState, SeriesState } from '../../state/recoil'
import { useRecoilState } from "recoil";
import Link from 'next/link';
import { Movies, CategoriesEnum } from './types'
import { CATS } from './constants'
const Categories: React.FC = () => {
  const { data, loading, error } = useFetch(`${process.env.NEXT_PUBLIC_API}/sample.json`);
  const [movies, setMovies] = useRecoilState<Movies[]>(moviesState);
  const [series, setSeries] = useRecoilState<Movies[]>(SeriesState);
  console.log(`${process.env.NEXT_PUBLIC_API}/sample.json`, 'process.env.NEXT_PUBLIC_API')
  useEffect(() => {
    if (!loading && data) {
      //@ts-ignore
      const listMovies = data.entries.filter(item => item.programType === CategoriesEnum.Peliculas)
      //@ts-ignore
      const listSeries = data.entries.filter(item => item.programType === CategoriesEnum.Series)
      // @ts-ignore
      setMovies(listMovies)
      // @ts-ignore
      setSeries(listSeries)
    }
  }, [data, loading, error]);
  
  return (
    <>
      <Container
        maxWidth="lg" 
        sx={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center' }}
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
          {
            CATS.map((item, index) => (
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  pt: 8,
                  pb: 6,
                  px: 4,
                  mx: {md: 2},
                  mb: 4,
                  boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)'
                }}
                key={index}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography align="center" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Link
                    href={item.link}
                    style={{
                      backgroundColor: '#c8222c',
                      color: 'white',
                      fontFamily: 'Arial',
                      padding: '8px 12px' ,
                      borderRadius: '4px',
                      textDecoration: 'none',
                      boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
                    }}
                  >
                    {item.button}
                  </Link>
                </Stack>
              </Box>
            ))
          }
        </Box>
      </Container>
    </>
  )
}

export default Categories
