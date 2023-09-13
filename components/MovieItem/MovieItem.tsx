
import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Movies } from '../Categories/types'
import { useModal } from '../../context/ModalContext';
import Popup from '../Popup'
const Movie: React.FC<Movies> = ({
  title,
  description,
  programType,
  images,
  releaseYear,
}) => {
  const { openModal } = useModal();
  const [selectedMovie, setSelectedMovie] = useState<Movies | null>(null);
  const handleClickOpen = () => {
    setSelectedMovie({
      title,
      description,
      programType,
      images,
      releaseYear,
    });
    openModal();
  };
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            border: '2px solid black',
            transition: 'all .25s ease',
            '&:hover': {
              opacity: '.5',
              borderColor: 'white'
            }
          }}
        >
          <CardMedia
            component="div"
            sx={{
              pt: '56.25%',
            }}
            image={images['Poster Art'].url}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              onClick={handleClickOpen}
              sx={{ cursor: 'pointer' }}
            >
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {
        selectedMovie && (<Popup
          title={selectedMovie.title}
          description={selectedMovie.description}
          releaseYear={selectedMovie.releaseYear}
          images={selectedMovie.images}
        />)
      }
    </>
  )
}

export default Movie
