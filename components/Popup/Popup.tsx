import {  Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material'
import { useModal } from '../../context/ModalContext'
import { popupProps } from './types'
import Image from 'next/image';
import { CLOSE_BUTTON } from './constants'
const Popup:React.FC<popupProps> = ({
  title,
  description,
  releaseYear,
  images,
}) => {
  const { isModalOpen, closeModal } = useModal();
  return (
    <Dialog
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {
        images && (
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Image src={images['Poster Art'].url} alt={'--'} width={200} height={300} />
          </Box>
        )
      }
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogTitle id="alert-dialog-title">
        {releaseYear}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>{CLOSE_BUTTON}</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Popup
