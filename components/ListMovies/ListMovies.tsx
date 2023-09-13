import MovieItem from '../MovieItem'
import { useRecoilValue } from 'recoil';
import { moviesState, SeriesState } from '../../state/recoil'
import { Movie, types } from './types'
import { Container, Grid, Typography } from '@mui/material';
import { NOT_FOUND } from './contants'
const ListMovies: React.FC<types> = ({
  type
}) => {
  let videos = useRecoilValue<Movie[]>(type === 'series' ? SeriesState : moviesState);
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {videos.length > 0
            ? videos.map((movie, index) => {
                if (index <= 20) return
                return movie.releaseYear >= 2010 && (
                  <MovieItem
                    key={index}
                    title={movie.title}
                    description={movie.description}
                    programType={movie.programType}
                    images={movie.images}
                    releaseYear={movie.releaseYear}
                  />
                )
              })
            : (
              <Typography
                align="center"
                sx={{ 
                  minHeight: 'calc(100vh-80px)',
                  display: 'flex',
                  color: 'white',
                  fontSize: '30px',
                  textAlign: 'center',
                  width: '100%' 
                }}
              >
                {NOT_FOUND}
              </Typography>
            )
          }
        </Grid>
      </Container>  
    </>
  )
}

export default ListMovies
